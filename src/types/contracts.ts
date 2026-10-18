/**
 * Contratos compartidos del portfolio.
 * Única fuente de tipos entre la interfaz y el servidor.
 * Solo el rol `orquestador` modifica este archivo, y solo si el ticket
 * lo incluye en `archivos_permitidos`.
 */

/**
 * Caso de estudio publicado en el portfolio.
 * Origen: `brain/04_Contenido/Casos-Estudio/<slug>.md` o `<slug>.mdx`.
 * El parser rechaza el archivo si falta el frente obligatorio o una de las
 * tres secciones del cuerpo: Problema, Arquitectura y Métricas de Impacto.
 */
export interface ProjectCaseStudy {
  /** Identificador estable. Coincide con el nombre del archivo, sin extensión. */
  slug: string;
  /** Título visible del proyecto. */
  title: string;
  /** Una o dos frases para listados y metadatos. */
  summary: string;
  /** Papel de la persona en el proyecto. */
  role: string;
  /** Año de cierre o de publicación. */
  year: number;
  /** Etiquetas cortas: disciplina, medio o tecnología. */
  tags: string[];
  /** Ruta pública de la imagen de portada. */
  coverImage?: string;
  /** Qué problema había que resolver. */
  problem: string;
  /** Cómo se abordó. */
  approach: string;
  /** Qué cambió al terminar. */
  outcome: string;
  /** Enlaces externos. Omitir la clave si no existe. */
  links?: {
    /** URL del producto en producción. */
    live?: string;
    /** URL del repositorio, si es público. */
    repo?: string;
  };
  /** Si es verdadero, puede aparecer en la portada. */
  featured: boolean;
  /** Orden ascendente en listados. Un número menor queda más arriba. */
  order: number;
}

/**
 * Una etapa laboral o un encargo relevante, en orden cronológico inverso
 * cuando se liste. El archivo de contenido todavía no existe; el tipo sí,
 * para que un ticket posterior no invente otra forma.
 */
export interface ExperienceItem {
  /** Identificador estable, único en el listado. */
  id: string;
  /** Empresa, estudio o cliente. */
  organization: string;
  /** Cargo o tipo de colaboración. */
  role: string;
  /** Inicio en formato `YYYY-MM`. */
  start: string;
  /** Fin en formato `YYYY-MM`. `null` si continúa. */
  end: string | null;
  /** Descripción breve del contexto. */
  summary: string;
  /** Resultados concretos, una frase por elemento. */
  highlights: string[];
}

/**
 * Grupo de habilidades mostrado como una sola categoría.
 * `skills` va de la más relevante a la menos; la interfaz no reordena.
 */
export interface SkillCategory {
  /** Identificador estable. */
  id: string;
  /** Nombre visible de la categoría. */
  name: string;
  /** Habilidades, de la más relevante a la menos. */
  skills: string[];
}

/**
 * Límites del formulario de contacto, en caracteres.
 * Interfaz y Server Action leen este objeto y no duplican las cifras.
 * Los extremos de `name` se miden después de recortar espacios.
 */
export const CONTACT_LIMITS = {
  nameMin: 2,
  nameMax: 80,
  messageMin: 10,
  messageMax: 2000,
} as const;

/**
 * Envío del formulario de contacto.
 * Lo construye la interfaz y lo valida una Server Action.
 */
export interface ContactSubmission {
  /** Nombre de quien escribe. */
  name: string;
  /** Correo de respuesta. */
  email: string;
  /** Mensaje libre. */
  message: string;
  /**
   * Campo trampa para bots. Debe llegar vacío.
   * Si trae texto, la acción no procesa el mensaje.
   */
  company?: string;
}
