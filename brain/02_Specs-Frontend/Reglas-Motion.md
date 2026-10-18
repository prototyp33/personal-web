---
rol: motion
estado: bloqueado
resumen: Spring único de Framer Motion, gestos permitidos y límites para no animar layout.
---

# Reglas de motion

La librería es `framer-motion` 14.3.0. El código vive en `src/motion/`. Los componentes importan esa API y no declaran otro `transition`.

## Spring por defecto

El objeto normativo está en [Sistema de diseño](Sistema-Diseno.md):

```ts
{ type: "spring", stiffness: 300, damping: 30 }
```

No hay stiffness, damping, bounce, duration ni ease alternativos. No hay segunda librería de animación.

## Gestos

- Entrada: opacidad de 0 a 1 y `y` de 8 a 0, con el spring por defecto.
- Hover: desplazamiento máximo de 4 px en `x` o `y`, mismo spring.
- Stagger: 0.04 s entre hermanos, y solo los seis primeros. El resto entra con el sexto.
- Un gesto a la vez. Sin parallax, sin bucle y sin animación continua al hacer scroll.
- Con `prefers-reduced-motion: reduce`, `transition` es `{ duration: 0 }` y el desplazamiento es 0.

## Rendimiento

- Animar solo `opacity` y `transform` (`x`, `y`, `scale`).
- Prohibido animar `width`, `height`, `top`, `left`, `margin`, `padding`, `box-shadow` o `filter`.
- `will-change` no se deja fijo en la hoja de estilos.
- Los datos de un gesto salen de `src/mocks/portfolio.mock.ts` hasta que el ticket cambie el import por el parser.
