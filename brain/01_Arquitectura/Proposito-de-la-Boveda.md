---
tipo: spec
rol: orquestador
estado: bloqueado
epica: E0
resumen: brain/ no es un wiki libre. Tres roles mecánicos y estructura limpia por carpetas.
---

# Propósito de la bóveda (`brain/`)

`brain/` **no** es un wiki para acumular apuntes humanos. Tiene tres objetivos mecánicos en este repositorio. Si una nota no sirve a uno de ellos, pertenece a `99_Borradores/` o a otro sitio.

## 1. Enrutador de contexto mínimo viable (Cursor)

Evitar que los agentes lean todo el repositorio. Cada nota durable es una **cápsula de memoria** que el ticket inyecta solo al rol que la necesita (`contexto_lectura`).

- Mapa: [INDEX](../00_MOC/INDEX.md)
- Base: [ADR-001](Registro-ADR.md) (bóveda separa el contexto de los agentes)
- Lo que no entra en contexto: `99_Borradores/**`, `.obsidian/**` (`.cursorignore`)

## 2. Máquina de estados del enjambre

Los tickets en `00_Tareas/` y el [ROADMAP](../00_MOC/ROADMAP.md) dictan qué está hecho, qué está bloqueado y **qué archivos de código se pueden tocar**. El control automatizado es `npm run scope -- <ticket>`.

- Base: [ADR-005](Registro-ADR.md) (trabajo por tickets), [ADR-012](Registro-ADR.md) (scope lock en el diff)
- Operativa: [Manual operativo](../06_Especialistas/Manual-Operativo-Enjambre.md)

## 3. CMS headless en tiempo de compilación

`04_Contenido/Casos-Estudio/` es la **fuente de verdad editorial de producción**. El sitio la consume con `getCaseStudies()` (Markdown/MDX + frontmatter → `ProjectCaseStudy`). No hay CMS ni base de datos aparte.

- Base: [ADR-003](Registro-ADR.md) (Markdown/MDX sin CMS/DB)
- Código: `src/lib/content/get-case-studies.ts`
- Contrato: `src/types/contracts.ts`

Casos previstos: `onspot.md`, `onspot-ml.md`, `vivienda-barcelona.md` (bajo ticket de copywriter). Hasta que la UI deje el mock, el parser ya lee esa carpeta.

## Composición (estructura limpia)

Cada carpeta tiene un rol estricto. Ningún archivo **versionado** debe vivir fuera de estas cajas.

| Carpeta | Rol | Archivos / contenido |
| --- | --- | --- |
| `00_MOC/` | Mapas de navegación | Solo `INDEX.md`, `ROADMAP.md` |
| `00_Tareas/` | Cola de ejecución | `_PLANTILLA_TICKET.md`, `T-XX-*.md` |
| `01_Arquitectura/` | Leyes inmutables | `Diseno-Sistema.md`, `Superficies-y-Rutas.md`, `Registro-ADR.md`, `CHANGELOG.md`, `Decision-Knowledge-Repo-Independiente.md`, `Proposito-de-la-Boveda.md`, `Frontmatter-YAML.md` |
| `02_Specs-Frontend/` | Manual UI / motion | Solo `Sistema-Diseno.md`, `Reglas-Motion.md` |
| `03_Specs-Backend/` | Manual de datos | `Esquema-Datos.md` |
| `04_Contenido/` | CMS y voz | `Guia-Estilo-Copy.md` + `Casos-Estudio/` |
| `05_Calidad/` | QA | `Checklist-QA-SEO.md` |
| `06_Especialistas/` | Specs de agentes | `Design-System.md`, `Manual-Operativo-Enjambre.md`, … |
| `99_Borradores/` | Zona libre (IA y git ignoran) | Ideas, research, outputs Grok, `*-propuesta` jubiladas |

Regla de jubilación: investigaciones y `*-propuesta.md` absorbidas en la spec oficial **pasan a** `99_Borradores/` y dejan de enlazarse desde el INDEX.

## Qué no es

| No es | Por qué |
| --- | --- |
| Wiki personal / second brain genérico | Eso vive fuera, o en `99_Borradores/` hasta `/ingerir` |
| Índice RAG / MCP / Grok | Repo independiente `ai-knowledge-repo`; ver [Decisión knowledge repo](Decision-Knowledge-Repo-Independiente.md) |
| Sitio público servido como estáticos desde `brain/` | `brain/` no es ruta pública; Next lee y tipa el contenido |

## Relación con el humano

Tú editas en Obsidian **abriendo solo `brain/`**. Puedes pulir copy en `04_Contenido/Casos-Estudio/`. No reescribes specs `bloqueado` a mano a mitad de un ticket; no inventas tickets a mano. El resto del ciclo lo marca el [Manual operativo](../06_Especialistas/Manual-Operativo-Enjambre.md).
