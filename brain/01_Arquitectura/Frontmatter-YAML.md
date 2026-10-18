---
tipo: spec
rol: orquestador
estado: bloqueado
epica: E0
resumen: Dos esquemas YAML — enjambre (A) vs casos públicos (B). Sin hashtags sueltos; no contaminar el parser.
---

# Frontmatter YAML y metadatos

Clasificación y estado van **solo** en el frente YAML. No uses hashtags `#tag` sueltos en el cuerpo para filas de Obsidian o para agentes.

Hay **dos esquemas**. Mezclarlos rompe el CMS o ensucia el enjambre.

## Cortafuegos

| Zona | Esquema | ¿Lo lee `getCaseStudies()`? |
| --- | --- | --- |
| Specs, arquitectura, MOC, tickets, especialistas, calidad | **A** (enjambre) | No |
| `04_Contenido/Casos-Estudio/*.md` / `*.mdx` | **B** (público) | Sí |
| `99_Borradores/` | Libre (A opcional) | No |

En casos públicos **prohibido** meter `tipo`, `estado: bloqueado`, `epica`, `rol_asignado` u otras claves del enjambre. El parser hoy ignora claves desconocidas, pero el contrato editorial no las contempla: no las escribas.

## Esquema A — Notas internas del enjambre

Aplica a `00_MOC/`, `00_Tareas/`, `01_Arquitectura/`, `02`–`06` (no a `Casos-Estudio/`).

```yaml
---
tipo: spec        # spec | adr | moc | ticket | borrador
rol: orquestador  # orquestador | ui-layout | design-system | backend | copywriter | motion | qa
estado: bloqueado # specs: bloqueado | borrador | obsoleto
                  # tickets: pendiente | en_progreso | completado | devuelto
epica: E0         # E0 | E1 | E2 | E3 | E4 | E5 (omitir solo si aplica a varias)
resumen: "Una línea para que el agente sepa si debe leer el archivo completo."
---
```

### Tickets (extensión del esquema A)

Los tickets **conservan** el scope lock de [_PLANTILLA_TICKET](../00_Tareas/_PLANTILLA_TICKET.md). Encima del bloque de alcance:

- `tipo: ticket`
- `epica: E1` (… E5)
- `resumen: "…"`
- `rol_asignado:` cumple el papel de `rol` del esquema A (no renombrar: el protocolo y `npm run scope` ya dependen de este nombre)
- `estado:` valores de ticket, no de spec

Campos de alcance que siguen siendo obligatorios en tickets: `aislamiento`, `dependencias`, `contexto_lectura`, `primer_archivo`, `archivos_permitidos`, `archivos_prohibidos`, `contratos`, `comando_verificacion`, `id`, `titulo`.

## Esquema B — Casos de estudio públicos

Manda [Esquema-Datos](../03_Specs-Backend/Esquema-Datos.md), `src/types/contracts.ts` (`ProjectCaseStudy`) y `src/lib/content/get-case-studies.ts`.

El YAML usa **claves en español** que el parser mapea al contrato. El `slug` sale del **nombre del archivo**, no del frente.

```yaml
---
titulo: string           # → title
resumen: string          # → summary
rol: string              # → role (papel en el proyecto, no rol de agente)
anio: number             # → year (entero de 4 cifras)
orden: number            # → order
etiquetas: string[]      # → tags (opcional; ausente = [])
destacado: boolean       # → featured (opcional; ausente = false)
imagen: string           # → coverImage (opcional)
enlaces:                 # → links (opcional)
  sitio: string          # → links.live
  repo: string           # → links.repo
---
```

Cuerpo, encabezados exactos y en este orden → `problem` / `approach` / `outcome`:

```markdown
## Problema
## Arquitectura
## Métricas de Impacto
```

### No uses en el YAML del caso

| Invento frecuente | Por qué no |
| --- | --- |
| `title`, `summary`, `year`, `tags`, `featured`, `order`, `links` | El parser espera las claves en español de arriba |
| `subtitle`, `category`, `period`, `stack`, `metrics` | **No** existen en `ProjectCaseStudy` |
| `slug` en el frente | Lo define el nombre de archivo |
| `tipo`, `estado`, `epica`, `rol_asignado` | Esquema A; contaminan el CMS |

`problem` / `approach` / `outcome` no van en el YAML: salen de las tres secciones del cuerpo.

**Prohibido** `[[wikilinks]]` de Obsidian en el cuerpo o el frente de un caso: `npm run vault-check` falla y el texto saldría crudo en la web.

## Relación con el contrato TypeScript

`ProjectCaseStudy` es la forma **en código**. El archivo Markdown es la forma **en disco**. Solo el parser hace el puente. Cambiar claves YAML o campos del contrato exige ticket del orquestador + ADR si es estructural; no se «alinean» a ojo desde un ticket de copy.
