/**
 * Semilla de UI y motion mientras el parser de `brain/04_Contenido` no existe.
 * Cada valor cumple `src/types/contracts.ts`. Si el contrato cambia, este
 * archivo cambia en el mismo paso. No es contenido editorial: el copywriter
 * publica los casos en Markdown y el backend sustituye este import.
 */
import type {
  ContactSubmission,
  ExperienceItem,
  ProjectCaseStudy,
  SkillCategory,
} from "../types/contracts";

export const projectCaseStudies = [
  {
    slug: "onspot",
    title: "OnSpot",
    summary:
      "MVP de aparcamiento urbano para Barcelona. El piloto está en Vilanova i la Geltrú y el trabajo cerró el TFG.",
    role: "Producto, investigación y modelo de negocio",
    year: 2025,
    tags: ["producto", "movilidad", "MVP"],
    problem:
      "En Barcelona, encontrar sitio en hora punta llega a 20 minutos. Ese tiempo es tráfico, no un detalle de la app. Hacía falta un MVP que se pudiera pilotar en una ciudad real, no una idea de mercado.",
    approach:
      "Investigué con entrevistas, personas y análisis de alternativas. El MVP junta disponibilidad y navegación para calle y parking. El piloto se fijó en Vilanova i la Geltrú, con conversaciones abiertas con comercio local y el municipio. Fue el TFG.",
    outcome:
      "El TFG cerró con sobresaliente. El producto quedó en validación de uso y métricas de engagement, no en una red desplegada.",
    featured: true,
    order: 1,
  },
  {
    slug: "onspot-ml",
    title: "OnSpot ML",
    summary:
      "Pipeline público para predecir la ocupación de aparcamientos en Barcelona sin colar el futuro en el entrenamiento.",
    role: "Ingeniería de datos y modelo",
    year: 2025,
    tags: ["LightGBM", "series temporales", "Python"],
    problem:
      "Operar un aparcamiento con el dato de ayer llega tarde. Un modelo que puntúa 100 % y ha visto el futuro no sirve para decidir.",
    approach:
      "LightGBM multiclase con validación cruzada temporal, SMOTE para el desbalance y PyArrow para leer en streaming. Optuna y MLflow ajustan y registran el experimento. El conjunto pasa de 92 millones de registros, con POIs y calendario como features.",
    outcome:
      "F1 ponderado 0.714 y precisión 0.710. El código está en el repositorio público OnSpotML.",
    links: {
      repo: "https://github.com/prototyp33/OnSpotML",
    },
    featured: true,
    order: 2,
  },
  {
    slug: "barcelona-vivienda",
    title: "Vivienda y demografía en Barcelona",
    summary:
      "Dashboard abierto que cruza cómo cambia la población con el precio de la vivienda en Barcelona.",
    role: "Análisis y visualización",
    year: 2025,
    tags: ["datos abiertos", "dashboard", "Barcelona"],
    problem:
      "La conversación de precio y población se hacía con tablas sueltas. No había una vista única para ver si se movían juntas.",
    approach:
      "Publiqué un dashboard de código abierto que relaciona la evolución demográfica con el precio de la vivienda en la ciudad. El análisis queda en el repositorio, no en una captura.",
    outcome:
      "El cruce se puede recorrer sin reconstruir el dataset. No hay una cifra de impacto de política: el entregable es la herramienta abierta.",
    links: {
      repo: "https://github.com/prototyp33/barcelona-housing-demographics-analyzer",
    },
    featured: false,
    order: 3,
  },
] as const satisfies readonly ProjectCaseStudy[];

export const experienceItems = [
  {
    id: "grifols",
    organization: "Grifols",
    role: "Process Development Analyst",
    start: "2024-09",
    end: "2025-04",
    summary:
      "Desarrollo de procesos en Parets del Vallès, entre operaciones, SQL y el informe que ve dirección.",
    highlights: [
      "Retrasos operativos un 23 % menores al mapear el flujo de punta a punta y seguir el SLA con SQL y Excel.",
      "Un 35 % menos de tiempo de reporte manual con un dashboard de Power BI sobre esa misma base.",
    ],
  },
] as const satisfies readonly ExperienceItem[];

export const skillCategories = [
  {
    id: "datos-ia",
    name: "Datos e IA",
    skills: ["Python", "LightGBM", "SQL", "validación temporal", "PyArrow"],
  },
  {
    id: "producto",
    name: "Producto",
    skills: ["entrevistas", "MVP", "personas", "métricas de uso"],
  },
  {
    id: "negocio",
    name: "Negocio",
    skills: ["Power BI", "modelado financiero", "lectura de operaciones"],
  },
] as const satisfies readonly SkillCategory[];

/** Forma válida del formulario. No es un mensaje recibido. */
export const contactSubmissionExample = {
  name: "Ada",
  email: "ada@example.com",
  message: "Quiero entender cómo se validó el pipeline de ocupación.",
} as const satisfies ContactSubmission;
