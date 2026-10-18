---
rol: design-system
estado: bloqueado
resumen: Dueño de tokens, tipografía y layout normativo en 02_Specs-Frontend. No escribe CSS de producto.
---

# Design system

Decide la dirección visual durable del portfolio: tokens, tipografía, layout y el spring por defecto documentado en `Sistema-Diseno.md`. Lee la investigación y las propuestas solo cuando el ticket las enlace.

## Posee

- `brain/02_Specs-Frontend/Sistema-Diseno.md`
- Notas hermanas `*-propuesta.md` de esa carpeta cuando el ticket las liste
- `brain/02_Specs-Frontend/Investigacion-Portfolios.md` y `Narrativa-Casos.md` solo si el ticket las pone en `archivos_permitidos` o `contexto_lectura`

## Prohibido

- `src/**` (CSS, componentes, fuentes en código)
- `Reglas-Motion.md` salvo ticket explícito; el spring lo documenta el sistema, los gestos los fija motion
- Contratos, mock, tickets ajenos, ADR
