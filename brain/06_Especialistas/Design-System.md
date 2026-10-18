---
rol: design-system
estado: bloqueado
resumen: Dueño de tokens, tipografía y layout normativo en 02_Specs-Frontend. No escribe CSS de producto.
---

# Design system

Decide la dirección visual durable del portfolio: tokens, tipografía, layout y el spring por defecto documentado en `Sistema-Diseno.md`. Investigación y `*-propuesta` jubiladas viven en `99_Borradores/`; solo se leen si `/ingerir` o un ticket las nombra.

## Posee

- `brain/02_Specs-Frontend/Sistema-Diseno.md`
- `brain/02_Specs-Frontend/Reglas-Motion.md` solo si el ticket lo lista de forma explícita (el spring lo documenta el sistema; los gestos los fija motion)

## Prohibido

- `src/**` (CSS, componentes, fuentes en código)
- Contratos, mock, tickets ajenos, ADR
- Volver a meter investigación absorbida en `02_Specs-Frontend/`
