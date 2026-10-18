---
rol: design-system
estado: bloqueado
resumen: Paleta, escala tipográfica, radio, bordes y spring por defecto. La UI no inventa otro valor.
---

# Sistema de diseño

Campo oscuro, texto de papel y un solo acento de cobre. Los casos se leen en columna, no en una rejilla de tarjetas iguales. `border-white/10` solo se entiende sobre este fondo.

## Tokens

| Token | Valor | Clase |
| --- | --- | --- |
| `--color-canvas` | `#12110f` | Fondo de página |
| `--color-surface` | `#1c1b18` | Pieza elevada |
| `--color-ink` | `#f3efe6` | Texto y titulares |
| `--color-muted` | `#c8c1b6` | Meta. 4.5:1 sobre el canvas |
| `--color-accent` | `#e08a45` | Un enlace, un foco, una marca. Nunca un fondo grande |
| `--color-line` | `rgb(255 255 255 / 0.10)` | `border border-white/10` |
| `--font-display` | Fraunces | Titulares |
| `--font-body` | Figtree | Texto y formularios |
| `--font-mono` | IBM Plex Mono | Año, etiquetas, métricas |
| `--radius-card` | `1rem` | `rounded-2xl` |
| `--shadow-card` | `0 24px 48px -28px rgb(0 0 0 / 0.65)` | Sombra de la pieza, siempre con el filete |
| `--page-max` | `72rem` | Ancho de página |
| `--measure` | `68ch` | Ancho de la prosa |

No hay segundo radio ni segundo gris. La sombra no va sola: la pieza lleva `border border-white/10`.

## Escala tipográfica

| Uso | Fuente | Tamaño | Interlineado |
| --- | --- | --- | --- |
| Portada | Fraunces 560 | `clamp(2.5rem, 5vw, 4.5rem)` | 1.05, tracking `-0.02em` |
| Sección | Fraunces 520 | `clamp(1.75rem, 3vw, 2.25rem)` | 1.15 |
| Cuerpo | Figtree | `1.125rem` | 1.6 |
| Entradilla | Figtree | `1.25rem` | 1.5 |
| Meta y cifra | IBM Plex Mono | `0.75rem` | 1.4, tracking `0.04em`, color muted |

## Layout

- Margen: `clamp(1.25rem, 4vw, 3rem)`. Prosa hasta `--measure`. Figuras hasta `--page-max`.
- Alineación a la izquierda.
- Portada: nombre, una frase y los casos `featured`, uno por fila.
- Caso: titular, meta en mono, problema, arquitectura, métricas.
- Contacto: una columna, etiquetas visibles, límites de `CONTACT_LIMITS`.
- Foco: anillo de 2 px en `--color-accent`.

## Motion por defecto

Toda transición de `framer-motion` usa este objeto y ningún otro, salvo que `Reglas-Motion.md` diga lo contrario para un gesto ya nombrado:

```ts
{ type: "spring", stiffness: 300, damping: 30 }
```

Con `prefers-reduced-motion: reduce` no hay spring: el estado final aparece al instante.
