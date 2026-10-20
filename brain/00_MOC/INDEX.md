# Mapa de la bóveda

`brain/` no es un wiki libre. Tres roles: contexto mínimo para Cursor, máquina de estados del enjambre y CMS headless. Detalle: [Propósito de la bóveda](../01_Arquitectura/Proposito-de-la-Boveda.md).

El trabajo de producto entra por un ticket, no por esta nota. Entrada humana del repo: [README](../../README.md).

## Estructura limpia (7 cajas)

Ningún archivo durable fuera de estas carpetas. Inventario normativo en [Propósito · composición](../01_Arquitectura/Proposito-de-la-Boveda.md#composición-estructura-limpia).

| Carpeta | Rol | Contenido permitido |
| --- | --- | --- |
| `00_MOC/` | Navegación | Solo `INDEX.md`, `ROADMAP.md` |
| `00_Tareas/` | Cola de ejecución | `_PLANTILLA_TICKET.md`, `T-XX-*.md` |
| `01_Arquitectura/` | Leyes | Diseño, superficies, ADR, changelog, decisiones, propósito |
| `02_Specs-Frontend/` | UI / motion | `Sistema-Diseno.md`, `Reglas-Motion.md` |
| `03_Specs-Backend/` | Datos | `Esquema-Datos.md` |
| `04_Contenido/` | CMS y voz | `Guia-Estilo-Copy.md`, `Casos-Estudio/` |
| `05_Calidad/` | QA | `Checklist-QA-SEO.md` |
| `06_Especialistas/` | Specs de roles | `Design-System.md`, `Manual-Operativo-Enjambre.md`, … |
| `99_Borradores/` | Zona libre | Ignorada por IA y por git. Propuestas jubiladas e investigación cruda. |

## Notas normativas

- [Roadmap](ROADMAP.md)
- [Plantilla de ticket](../00_Tareas/_PLANTILLA_TICKET.md)
- [Propósito de la bóveda](../01_Arquitectura/Proposito-de-la-Boveda.md)
- [Frontmatter YAML](../01_Arquitectura/Frontmatter-YAML.md)
- [Diseño del sistema](../01_Arquitectura/Diseno-Sistema.md)
- [Superficies y rutas](../01_Arquitectura/Superficies-y-Rutas.md)
- [Registro de ADR](../01_Arquitectura/Registro-ADR.md)
- [Decisión · Knowledge repo independiente](../01_Arquitectura/Decision-Knowledge-Repo-Independiente.md)
- [Changelog](../01_Arquitectura/CHANGELOG.md)
- [Sistema de diseño](../02_Specs-Frontend/Sistema-Diseno.md)
- [Reglas de motion](../02_Specs-Frontend/Reglas-Motion.md)
- [Esquema de datos](../03_Specs-Backend/Esquema-Datos.md)
- [Guía de copy](../04_Contenido/Guia-Estilo-Copy.md)
- [Sobre mí](../04_Contenido/Sobre-mi.md)
- [Casos de estudio](../04_Contenido/Casos-Estudio/)
- [Checklist de QA](../05_Calidad/Checklist-QA-SEO.md)
- [Design system · rol](../06_Especialistas/Design-System.md)
- [Manual operativo del enjambre](../06_Especialistas/Manual-Operativo-Enjambre.md)

## Código y agentes

- `src/types/contracts.ts` — tipos compartidos. Solo los edita el orquestador.
- `src/mocks/portfolio.mock.ts` — datos del contrato. Cambia en el mismo paso.
- `.cursor/rules/` — protocolo siempre activo y una regla por rol.
- `.cursor/commands/` — `/orquestar`, `/ejecutar-ticket`, `/auditar`, `/destilar`, `/crear-agente`, `/ingerir`.

## Investigación ingerida

Absorbida en specs oficiales (ADR-014, ADR-015). Los crudos y `*-propuesta` jubilados viven solo en `99_Borradores/` (fuera del contexto de agentes). **Mandan:** [Guía de estilo](../04_Contenido/Guia-Estilo-Copy.md) y [Sistema de diseño](../02_Specs-Frontend/Sistema-Diseno.md).

`estado: bloqueado` se obedece. El ticket dice qué archivos se tocan y qué notas se leen. `/ingerir` es la única vía que puede leer archivos concretos de `99_Borradores/` para destilarlos.
