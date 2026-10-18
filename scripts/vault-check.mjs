/**
 * Validación rápida de la bóveda (CMS + specs).
 * Encadenado en `npm run verify`. No sustituye al parser en runtime:
 * reutiliza getCaseStudies() vía Node strip-types.
 */
import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const CASES_DIR = join(ROOT, "brain", "04_Contenido", "Casos-Estudio");
const LOCKED_DIRS = [
  "brain/01_Arquitectura",
  "brain/02_Specs-Frontend",
  "brain/03_Specs-Backend",
  "brain/05_Calidad",
];
const WIKILINK = /\[\[[^\]]+\]\]/;
const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---/;

function listMarkdown(dir) {
  let names;
  try {
    names = readdirSync(dir);
  } catch (error) {
    if (error && error.code === "ENOENT") return [];
    throw error;
  }
  return names
    .filter((name) => {
      const ext = name.slice(name.lastIndexOf(".")).toLowerCase();
      return ext === ".md" || ext === ".mdx";
    })
    .map((name) => join(dir, name))
    .filter((path) => statSync(path).isFile());
}

function checkCasesWikilinks() {
  const errors = [];
  for (const file of listMarkdown(CASES_DIR)) {
    const text = readFileSync(file, "utf8");
    if (WIKILINK.test(text)) {
      errors.push(
        `${relative(ROOT, file)}: contiene [[wikilink]] de Obsidian; prohibido en casos públicos (salen en la web).`,
      );
    }
  }
  return errors;
}

function checkCasesParser() {
  const script = `
import { getCaseStudies } from ${JSON.stringify(join(ROOT, "src/lib/content/get-case-studies.ts"))};
await getCaseStudies();
console.log("vault-check: casos OK");
`;
  try {
    execFileSync(process.execPath, ["--experimental-strip-types", "--input-type=module", "-e", script], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
      cwd: ROOT,
      env: { ...process.env, NODE_NO_WARNINGS: "1" },
    });
    return [];
  } catch (error) {
    const stderr = error && typeof error === "object" && "stderr" in error ? String(error.stderr) : "";
    const stdout = error && typeof error === "object" && "stdout" in error ? String(error.stdout) : "";
    const detail = (stderr || stdout || String(error)).trim() || "getCaseStudies() falló";
    return [`Casos-Estudio: ${detail}`];
  }
}

function parseEstado(text) {
  const match = text.match(FRONTMATTER);
  if (!match?.[1]) return null;
  const line = match[1].split(/\r?\n/).find((row) => /^estado:\s*/.test(row));
  if (!line) return null;
  return line.replace(/^estado:\s*/, "").replace(/\s+#.*$/, "").trim();
}

function checkLockedSpecs() {
  const errors = [];
  for (const dir of LOCKED_DIRS) {
    for (const file of listMarkdown(join(ROOT, dir))) {
      const rel = relative(ROOT, file).replaceAll("\\", "/");
      const text = readFileSync(file, "utf8");
      const estado = parseEstado(text);
      if (estado !== "bloqueado") {
        errors.push(
          `${rel}: se espera estado: bloqueado en el frontmatter (ahora: ${estado ?? "ausente"}).`,
        );
      }
    }
  }
  return errors;
}

function main() {
  const errors = [
    ...checkCasesParser(),
    ...checkCasesWikilinks(),
    ...checkLockedSpecs(),
  ];
  if (errors.length > 0) {
    for (const error of errors) console.error(error);
    process.exit(1);
  }
  console.log("vault-check: OK");
}

main();
