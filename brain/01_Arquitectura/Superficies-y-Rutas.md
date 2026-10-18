---
rol: orquestador
estado: bloqueado
resumen: Rutas públicas previstas, origen de datos y límites hasta ticket. No implementa.
---

# Superficies y rutas

Mapa de superficies del portfolio. Esta nota fija intención; cada ruta entra en el producto con un ticket de `ui-layout` (o backend, si cambia el origen de datos).

## Rutas previstas

| Ruta | Superficie | Estado |
| --- | --- | --- |
| `/` | Portada: oficio, casos `featured`, ancla de contacto | Existe (layout base) |
| `/casos/[slug]` | Detalle de un `ProjectCaseStudy` | Prevista; sin página aún |
| `/#contacto` | Formulario de contacto en la portada | Prevista; ancla, no ruta aparte |

No hay otras rutas públicas en esta fase. Experiencia y habilidades siguen reservadas en el esquema de datos: sin página hasta ticket.

## Origen de datos

| Fase | Qué importa la UI |
| --- | --- |
| Hoy | `src/mocks/portfolio.mock.ts` (semilla de contrato) |
| Tras cerrar E2 (parser) | Función en `src/lib/content/` sobre `brain/04_Contenido/Casos-Estudio/` |

`brain/` no es una ruta HTTP. Un solo origen a la vez: cuando el parser sustituya el mock en la portada (y luego en el detalle), se retira el import del mock en esa superficie. No se mantienen los dos en paralelo.

El contacto valida con Server Action (`ContactSubmission`); no se persiste. El envío real de correo espera un ADR.

## Fuera de esta nota (hasta ticket)

- Motion: solo `src/motion/`, según [Reglas de motion](../02_Specs-Frontend/Reglas-Motion.md).
- SEO de entrega (`title`, description, canónica, Open Graph, `sitemap.xml`, `robots.txt`): umbrales en [Checklist de calidad](../05_Calidad/Checklist-QA-SEO.md); un ticket de QA o layout los aplica.
- Redacción de casos: [Guía de estilo](../04_Contenido/Guia-Estilo-Copy.md) y archivos en `Casos-Estudio/`.
