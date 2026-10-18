import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import type { ProjectCaseStudy } from "../../types/contracts";

const CASES_DIR = path.join(
  process.cwd(),
  "brain",
  "04_Contenido",
  "Casos-Estudio",
);

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const SECTION_HEADERS = [
  "Problema",
  "Arquitectura",
  "Métricas de Impacto",
] as const;

/** Detecta import o JSX en cuerpos MDX (ningún componente permitido). */
const MDX_FORBIDDEN =
  /(?:^|\n)\s*import\s+[\s\S]+?from\s+['"][^'"]+['"]\s*;?|(?:^|\n)\s*export\s+[\s\S]+|(?:<[A-Za-z][\w.-]*[\s/>])/;

type CaseFrontmatter = {
  titulo?: unknown;
  resumen?: unknown;
  rol?: unknown;
  anio?: unknown;
  orden?: unknown;
  etiquetas?: unknown;
  destacado?: unknown;
  imagen?: unknown;
  enlaces?: unknown;
};

function caseError(slug: string, detail: string): Error {
  return new Error(`Caso inválido (${slug}): ${detail}`);
}

function requireNonEmptyString(
  value: unknown,
  slug: string,
  field: string,
): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw caseError(slug, `falta o es inválido el campo «${field}»`);
  }
  return value.trim();
}

function requireYear(value: unknown, slug: string): number {
  if (typeof value !== "number" || !Number.isInteger(value)) {
    throw caseError(slug, "falta o es inválido el campo «anio»");
  }
  if (value < 1000 || value > 9999) {
    throw caseError(slug, "«anio» debe ser un entero de cuatro cifras");
  }
  return value;
}

function requireOrder(value: unknown, slug: string): number {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw caseError(slug, "falta o es inválido el campo «orden»");
  }
  return value;
}

function parseTags(value: unknown, slug: string): string[] {
  if (value === undefined) {
    return [];
  }
  if (
    !Array.isArray(value) ||
    value.some((item) => typeof item !== "string")
  ) {
    throw caseError(slug, "«etiquetas» debe ser un array de strings");
  }
  return value.map((item) => item.trim()).filter((item) => item.length > 0);
}

function parseFeatured(value: unknown, slug: string): boolean {
  if (value === undefined) {
    return false;
  }
  if (typeof value !== "boolean") {
    throw caseError(slug, "«destacado» debe ser boolean");
  }
  return value;
}

function parseLinks(
  value: unknown,
  slug: string,
): ProjectCaseStudy["links"] | undefined {
  if (value === undefined || value === null) {
    return undefined;
  }
  if (typeof value !== "object" || Array.isArray(value)) {
    throw caseError(slug, "«enlaces» debe ser un objeto");
  }

  const raw = value as { sitio?: unknown; repo?: unknown };
  const links: NonNullable<ProjectCaseStudy["links"]> = {};

  if (raw.sitio !== undefined) {
    if (typeof raw.sitio !== "string" || raw.sitio.trim() === "") {
      throw caseError(slug, "«enlaces.sitio» debe ser un string no vacío");
    }
    links.live = raw.sitio.trim();
  }

  if (raw.repo !== undefined) {
    if (typeof raw.repo !== "string" || raw.repo.trim() === "") {
      throw caseError(slug, "«enlaces.repo» debe ser un string no vacío");
    }
    links.repo = raw.repo.trim();
  }

  if (links.live === undefined && links.repo === undefined) {
    return undefined;
  }

  return links;
}

function extractSections(
  body: string,
  slug: string,
): Pick<ProjectCaseStudy, "problem" | "approach" | "outcome"> {
  const trimmed = body.replace(/^\uFEFF/, "").trim();
  if (trimmed === "") {
    throw caseError(slug, "faltan las secciones del cuerpo");
  }

  const headingPattern = /^## (.+)$/gm;
  const matches = [...trimmed.matchAll(headingPattern)];

  if (matches.length !== SECTION_HEADERS.length) {
    throw caseError(
      slug,
      "se esperan exactamente las secciones ## Problema, ## Arquitectura y ## Métricas de Impacto",
    );
  }

  for (let i = 0; i < SECTION_HEADERS.length; i += 1) {
    const match = matches[i];
    const expected = SECTION_HEADERS[i];
    if (!match || match[1] !== expected) {
      throw caseError(
        slug,
        `la sección ${i + 1} debe ser «## ${expected}»`,
      );
    }
  }

  const contents: string[] = [];
  for (let i = 0; i < matches.length; i += 1) {
    const start = matches[i]!.index! + matches[i]![0].length;
    const end = i + 1 < matches.length ? matches[i + 1]!.index! : trimmed.length;
    const content = trimmed.slice(start, end).trim();
    if (content === "") {
      throw caseError(slug, `la sección «${SECTION_HEADERS[i]}» está vacía`);
    }
    contents.push(content);
  }

  return {
    problem: contents[0]!,
    approach: contents[1]!,
    outcome: contents[2]!,
  };
}

function assertNoMdxComponents(body: string, slug: string, ext: string): void {
  if (ext !== ".mdx") {
    return;
  }
  if (MDX_FORBIDDEN.test(body)) {
    throw caseError(
      slug,
      "MDX con import o JSX no está permitido; no hay componentes autorizados",
    );
  }
}

function parseCaseFile(
  filename: string,
  raw: string,
): ProjectCaseStudy {
  const ext = path.extname(filename).toLowerCase();
  const slug = path.basename(filename, ext);

  if (!SLUG_PATTERN.test(slug)) {
    throw caseError(
      slug,
      "el slug solo admite minúsculas, números y guiones",
    );
  }

  const parsed = matter(raw);
  const data = parsed.data as CaseFrontmatter;
  const body = typeof parsed.content === "string" ? parsed.content : "";

  assertNoMdxComponents(body, slug, ext);

  const title = requireNonEmptyString(data.titulo, slug, "titulo");
  const summary = requireNonEmptyString(data.resumen, slug, "resumen");
  const role = requireNonEmptyString(data.rol, slug, "rol");
  const year = requireYear(data.anio, slug);
  const order = requireOrder(data.orden, slug);
  const tags = parseTags(data.etiquetas, slug);
  const featured = parseFeatured(data.destacado, slug);
  const links = parseLinks(data.enlaces, slug);
  const sections = extractSections(body, slug);

  const study: ProjectCaseStudy = {
    slug,
    title,
    summary,
    role,
    year,
    tags,
    problem: sections.problem,
    approach: sections.approach,
    outcome: sections.outcome,
    featured,
    order,
  };

  if (data.imagen !== undefined) {
    if (typeof data.imagen !== "string" || data.imagen.trim() === "") {
      throw caseError(slug, "«imagen» debe ser un string no vacío");
    }
    study.coverImage = data.imagen.trim();
  }

  if (links !== undefined) {
    study.links = links;
  }

  return study;
}

/**
 * Lee `brain/04_Contenido/Casos-Estudio/` y devuelve casos tipados.
 * Carpeta vacía o inexistente → `[]`. Un caso inválido lanza con el slug.
 */
export async function getCaseStudies(): Promise<ProjectCaseStudy[]> {
  let entries: string[];

  try {
    entries = await readdir(CASES_DIR);
  } catch (error) {
    const code =
      error && typeof error === "object" && "code" in error
        ? (error as { code?: string }).code
        : undefined;
    if (code === "ENOENT") {
      return [];
    }
    throw error;
  }

  const caseFiles = entries
    .filter((name) => {
      const ext = path.extname(name).toLowerCase();
      return ext === ".md" || ext === ".mdx";
    })
    .sort((a, b) => a.localeCompare(b));

  if (caseFiles.length === 0) {
    return [];
  }

  const studies: ProjectCaseStudy[] = [];

  for (const filename of caseFiles) {
    const absolute = path.join(CASES_DIR, filename);
    const raw = await readFile(absolute, "utf8");
    studies.push(parseCaseFile(filename, raw));
  }

  studies.sort((a, b) => {
    if (a.order !== b.order) {
      return a.order - b.order;
    }
    return a.slug.localeCompare(b.slug);
  });

  return studies;
}
