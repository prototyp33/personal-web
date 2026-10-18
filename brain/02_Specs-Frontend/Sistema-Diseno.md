---
rol: design-system
estado: bloqueado
resumen: Base P1 papel, tres voces tipográficas y spring único. ADR-014.
---

# Sistema de diseño

Cuaderno de laboratorio (P1): papel cálido, tinta oscura y un solo acento azul. Los casos se leen en columna. Los ensayos P3 (un control interactivo por caso estrella) reutilizan estos tokens; el TL;DR no depende del control.

## Tokens

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-canvas` | `#F4F1EA` | Fondo de página (papel) |
| `--color-surface` | `#EDEAE3` | Pieza elevada sobre el papel |
| `--color-ink` | `#161513` | Texto y titulares |
| `--color-muted` | `#6B6760` | Meta. ≥ 4.5:1 sobre el canvas |
| `--color-accent` | `#2F5BFF` | Enlace, foco, estado. Nunca un fondo grande |
| `--color-danger` | `#C2412D` | Error y regresión |
| `--color-line` | `#E2DDD2` | Reglas 1 px |
| `--font-display` | Inter Display | Titulares |
| `--font-body` | Inter | Texto y formularios |
| `--font-serif` | Newsreader Italic | Citas y acentos editoriales |
| `--font-mono` | JetBrains Mono | Año, etiquetas, métricas |
| `--radius-card` | `0.5rem` | `rounded-lg`. Piezas discretas, no tarjetas bento |
| `--page-max` | `72rem` | Ancho de página |
| `--measure` | `680px` | Ancho de la prosa (~68 ch) |

No hay segundo acento ni bento. Oscuro opcional fuera de esta fase: `#121110` / `#EDEAE3`.

Categóricos solo en figuras de datos (P3), un color por disciplina y constante en toda la web: Data `#1B9E8F`, ML `#3F4BB8`, Producto `#E8A33D`, Web `#D6407A`.

## Escala tipográfica

Como máximo tres tallas.

| Uso | Fuente | Tamaño | Interlineado |
| --- | --- | --- | --- |
| Portada / titular-resultado | Inter Display 560 | `clamp(2rem, 4vw, 2.75rem)` | 1.1, tracking `-0.02em` |
| Sección | Inter Display 520 | `clamp(1.35rem, 2.5vw, 1.75rem)` | 1.2 |
| Cuerpo | Inter | `1.125rem` | 1.6 |
| Meta y cifra | JetBrains Mono | `0.75rem` | 1.4, tracking `0.04em`, color muted |
| Cita / pie interpretativo | Newsreader Italic | `1.125rem` | 1.5 |

## Layout

- Margen: `clamp(1.25rem, 4vw, 3rem)`. Prosa hasta `--measure`. Figuras pueden abrirse hacia `--page-max`.
- Alineación a la izquierda. Sin rejilla de tarjetas iguales.
- Portada (laboratorio): nombre, una frase de oficio y los casos `featured`, uno por fila.
- Caso: titular-resultado (verbo + cifra), meta en mono, luego problema, arquitectura y métricas. Hueco para un control P3 con estado estático legible por defecto.
- Contacto: una columna, etiquetas visibles, límites de `CONTACT_LIMITS`.
- Foco: anillo de 2 px en `--color-accent`.

## Motion por defecto

Toda transición de `framer-motion` usa este objeto y ningún otro, salvo que `Reglas-Motion.md` diga lo contrario para un gesto ya nombrado:

```ts
{ type: "spring", stiffness: 300, damping: 30 }
```

Con `prefers-reduced-motion: reduce` no hay spring: el estado final aparece al instante.
