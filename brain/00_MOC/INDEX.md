# Mapa de la bóveda

Contexto del enjambre. El trabajo entra por un ticket, no por esta nota.

Entrada humana del repo: [README](../../README.md).

## Carpetas

- `00_MOC/` — este mapa y el roadmap de épicas.
- `00_Tareas/` — tickets atómicos con la plantilla fija. `_PLANTILLA_TICKET.md` no se ejecuta.
- `01_Arquitectura/` — stack, carpetas, flujo de estado, ADR y changelog.
- `02_Specs-Frontend/` — tokens, tipografía, layout y físicas de animación.
- `03_Specs-Backend/` — datos, CMS en Markdown/MDX y Server Actions.
- `04_Contenido/` — voz y casos de estudio publicables.
- `05_Calidad/` — accesibilidad, SEO, rendimiento y tipado.
- `06_Especialistas/` — specs de roles añadidos; [Design system](../06_Especialistas/Design-System.md).
- `99_Borradores/` — notas fuera de contexto. Ignoradas.

## Notas

- [Roadmap](ROADMAP.md)
- [Plantilla de ticket](../00_Tareas/_PLANTILLA_TICKET.md)
- [Diseño del sistema](../01_Arquitectura/Diseno-Sistema.md)
- [Superficies y rutas](../01_Arquitectura/Superficies-y-Rutas.md)
- [Registro de ADR](../01_Arquitectura/Registro-ADR.md)
- [Decisión · Knowledge repo independiente](../01_Arquitectura/Decision-Knowledge-Repo-Independiente.md)
- [Changelog](../01_Arquitectura/CHANGELOG.md)
- [Sistema de diseño](../02_Specs-Frontend/Sistema-Diseno.md)
- [Reglas de motion](../02_Specs-Frontend/Reglas-Motion.md)
- [Esquema de datos](../03_Specs-Backend/Esquema-Datos.md)
- [Guía de copy](../04_Contenido/Guia-Estilo-Copy.md)
- [Casos de estudio](../04_Contenido/Casos-Estudio/)
- [Checklist de QA](../05_Calidad/Checklist-QA-SEO.md)

## Código y agentes

- `src/types/contracts.ts` — tipos compartidos. Solo los edita el orquestador.
- `src/mocks/portfolio.mock.ts` — datos del contrato. Cambia en el mismo paso.
- `.cursor/rules/` — protocolo siempre activo y una regla por rol.
- `.cursor/commands/` — `/orquestar`, `/ejecutar-ticket`, `/auditar`, `/destilar`, `/crear-agente`, `/ingerir`.

## Investigación ingerida

Historial de investigación. **No mandan:** la voz normativa es [Guía de estilo](../04_Contenido/Guia-Estilo-Copy.md) (T-04 / ADR-015); los tokens mandan en [Sistema de diseño](../02_Specs-Frontend/Sistema-Diseno.md) (T-03 / ADR-014).

- [Investigación de portfolios](../02_Specs-Frontend/Investigacion-Portfolios.md)
- [Narrativa de casos](../02_Specs-Frontend/Narrativa-Casos.md) — absorbida en lo aplicable por la guía
- [Sistema de diseño · propuesta](../02_Specs-Frontend/Sistema-Diseno-propuesta.md) — absorbida por ADR-014
- [Guía de copy · propuesta](../04_Contenido/Guia-Estilo-Copy-propuesta.md) — absorbida por ADR-015

`estado: bloqueado` se obedece. El ticket dice qué archivos se tocan y qué notas se leen. `/ingerir` es la única vía que puede leer archivos concretos de `99_Borradores/` para destilarlos.
