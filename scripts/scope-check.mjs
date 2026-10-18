import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync } from "node:fs";
import { dirname, relative, resolve } from "node:path";

const SCOPE_KEYS = [
  "id",
  "rol_asignado",
  "aislamiento",
  "archivos_permitidos",
  "archivos_prohibidos",
  "contratos",
  "contexto_lectura",
  "dependencias",
  "primer_archivo",
  "comando_verificacion",
];

const SENSITIVE = [
  ".cursor/rules/**",
  ".cursor/commands/**",
  ".cursor/hooks.json",
  ".cursor/hooks/**",
  "scripts/**",
  "package.json",
  "package-lock.json",
  "pnpm-lock.yaml",
  "yarn.lock",
  "eslint.config.js",
  "eslint.config.mjs",
  "eslint.config.cjs",
  "eslint.config.ts",
  ".eslintrc",
  ".eslintrc.*",
];

function globToRegExp(glob) {
  const normalized = glob.trim().replaceAll("\\", "/").replace(/^\.\//, "");
  const body = normalized
    .split("**")
    .map((part) => part.replace(/[.+^${}()|[\]\\]/g, "\\$&").replaceAll("*", "[^/]*"))
    .join(".*");
  return new RegExp(`^${body}$`);
}

function matches(path, globs) {
  const file = path.replaceAll("\\", "/").replace(/^\.\//, "");
  return globs.some((glob) => globToRegExp(glob).test(file));
}

export function parseFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match?.[1]) {
    throw new Error("El ticket no tiene frontmatter.");
  }
  const data = {};
  let key = "";
  for (const line of match[1].split(/\r?\n/)) {
    const listItem = line.match(/^\s+-\s+"?([^"#]+?)"?\s*(?:#.*)?$/);
    if (listItem && key) {
      const bucket = data[key] ?? [];
      bucket.push(listItem[1].trim());
      data[key] = bucket;
      continue;
    }
    const field = line.match(/^([a-z_]+):\s*(.*?)\s*(?:#.*)?$/);
    if (!field) continue;
    key = field[1];
    const raw = field[2].trim();
    if (raw === "" || raw === "[]") {
      data[key] = [];
      continue;
    }
    data[key] = raw.replace(/^"|"$/g, "");
  }
  return data;
}

export function parseStatus(porcelain) {
  const parts = porcelain.split("\0");
  if (parts.at(-1) === "") parts.pop();
  const paths = [];
  for (let index = 0; index < parts.length; index += 1) {
    const entry = parts[index] ?? "";
    const status = entry.slice(0, 2);
    const first = entry.slice(3);
    if (first) paths.push(first);
    if (status.includes("R") || status.includes("C")) {
      index += 1;
      const renamed = parts[index];
      if (renamed) paths.push(renamed);
    }
  }
  return paths;
}

function listValue(data, key) {
  const value = data[key];
  if (Array.isArray(value)) return value;
  if (typeof value === "string" && value !== "") return [value];
  return [];
}

function git(args) {
  return execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

function scopeSnapshot(data) {
  const snapshot = {};
  for (const key of SCOPE_KEYS) {
    const value = data[key];
    snapshot[key] = Array.isArray(value) ? value : (value ?? "");
  }
  return JSON.stringify(snapshot);
}

function otherInProgress(ticketPath) {
  const dir = dirname(resolve(ticketPath));
  const own = relative(process.cwd(), resolve(ticketPath)).replaceAll("\\", "/");
  return readdirSync(dir)
    .filter((name) => /^T-.*\.md$/.test(name) && !name.startsWith("_"))
    .map((name) => relative(process.cwd(), resolve(dir, name)).replaceAll("\\", "/"))
    .filter((path) => path !== own)
    .filter((path) => {
      const data = parseFrontmatter(readFileSync(path, "utf8"));
      return data.estado === "en_progreso";
    });
}

function inLinkedWorktree() {
  const gitDir = git(["rev-parse", "--git-dir"]);
  const commonDir = git(["rev-parse", "--git-common-dir"]);
  return resolve(gitDir) !== resolve(commonDir);
}

function checkDelivery(ticketPath, text) {
  const data = parseFrontmatter(text);
  const role = String(data.rol_asignado ?? "");
  const allowed = listValue(data, "archivos_permitidos");
  const denied = listValue(data, "archivos_prohibidos");
  const ticket = relative(process.cwd(), resolve(ticketPath)).replaceAll("\\", "/");
  let baseline = null;
  try {
    baseline = parseFrontmatter(git(["show", `HEAD:${ticket}`]));
  } catch {
    baseline = null;
  }
  const errors = [];
  if (baseline && scopeSnapshot(baseline) !== scopeSnapshot(data)) {
    errors.push(`${ticket}: el alcance no coincide con HEAD. El ejecutor no puede ampliarlo.`);
  }
  let status = "";
  try {
    status = execFileSync("git", ["status", "--porcelain=v1", "-z", "--untracked-files=all"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch {
    return ["No hay repositorio git: sin diff no se acepta la entrega."];
  }
  for (const path of parseStatus(status)) {
    if (path === ticket) continue;
    const functional = role !== "orquestador";
    if (functional && matches(path, SENSITIVE)) {
      errors.push(`${path}: archivo sensible. Un ticket funcional no puede modificarlo.`);
      continue;
    }
    if (matches(path, denied)) {
      errors.push(`${path}: está en archivos_prohibidos.`);
      continue;
    }
    if (!matches(path, allowed)) {
      errors.push(`${path}: fuera de archivos_permitidos.`);
    }
  }
  return errors;
}

function checkStart(ticketPath, text) {
  const data = parseFrontmatter(text);
  const isolation = data.aislamiento === "worktree" ? "worktree" : "serie";
  const errors = [];
  let inside;
  try {
    git(["rev-parse", "--is-inside-work-tree"]);
    inside = true;
  } catch {
    inside = false;
  }
  if (!inside) {
    return ["No hay repositorio git: no hay estado inicial conocido ni worktree."];
  }
  if (isolation === "serie") {
    const others = otherInProgress(ticketPath);
    if (others.length > 0) {
      errors.push(`Aislamiento en serie y hay otro ticket en progreso: ${others.join(", ")}.`);
    }
    const dirty = git(["status", "--porcelain=v1"]);
    if (dirty) {
      errors.push("El checkout no está limpio. En serie el estado inicial tiene que estar vacío.");
    }
  } else {
    if (!inLinkedWorktree()) {
      errors.push("Aislamiento worktree, pero este directorio es el checkout principal.");
    }
    const branch = git(["branch", "--show-current"]);
    const id = String(data.id ?? "");
    if (!branch.startsWith(`ticket/${id}`)) {
      errors.push(`La rama ${branch || "(desprendida)"} no es ticket/${id}.`);
    }
  }
  return errors;
}

function selfTest() {
  const renamed = parseStatus(" M src/app/page.tsx\0?? src/new.tsx\0R  src/old.tsx\0src/new-name.tsx\0");
  if (renamed.join(",") !== "src/app/page.tsx,src/new.tsx,src/old.tsx,src/new-name.tsx") {
    throw new Error(`porcelain: ${renamed.join(",")}`);
  }
  if (!matches("src/lib/content/get-case-studies.ts", ["src/lib/content/**"])) {
    throw new Error("glob **");
  }
  if (matches("package.json", ["src/lib/**"])) {
    throw new Error("glob falso positivo");
  }
  if (!matches("eslint.config.mjs", SENSITIVE) || !matches(".cursor/rules/00-protocolo-enjambre.mdc", SENSITIVE)) {
    throw new Error("sensible");
  }
  const parsed = parseFrontmatter('---\nid: T-02\narchivos_permitidos:\n  - "src/lib/content/**"\n---\n');
  if (parsed.id !== "T-02" || parsed.archivos_permitidos?.[0] !== "src/lib/content/**") {
    throw new Error("frontmatter");
  }
  console.log("scope-check: self-test ok");
}

function main() {
  const args = process.argv.slice(2).filter((arg) => arg !== "--");
  if (args.includes("--self-test")) {
    selfTest();
    return;
  }
  const start = args.includes("--inicio");
  const ticketPath = args.find((arg) => !arg.startsWith("--"));
  if (!ticketPath) {
    console.error("Uso: node scripts/scope-check.mjs [--inicio] brain/00_Tareas/T-NN-slug.md");
    process.exit(2);
  }
  const text = readFileSync(ticketPath, "utf8");
  const errors = start ? checkStart(ticketPath, text) : checkDelivery(ticketPath, text);
  if (errors.length > 0) {
    for (const error of errors) console.error(error);
    process.exit(1);
  }
  console.log(start ? "Alcance inicial aceptado." : "Diff dentro del alcance.");
}

main();
