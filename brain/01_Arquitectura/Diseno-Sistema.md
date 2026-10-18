---
rol: orquestador
estado: bloqueado
resumen: Stack con versiones fijadas, carpetas, flujo de estado y regla de un ticket por commit.
---

# Diseño del sistema

Portfolio personal. El contenido vive en la bóveda; la interfaz lo muestra; el servidor lo lee con `gray-matter`. Cada cambio entra por un ticket con scope lock.

## Stack inmutable

Estas versiones están fijadas en `package.json`, sin rango. Otro paquete de UI, datos o animación exige un ADR. No se instala un segundo parser, un segundo set de iconos ni otra librería de motion.

| Paquete | Versión | Uso |
| --- | --- | --- |
| `next` | 16.4.1 | App Router |
| `react`, `react-dom` | 19.3.1 | Interfaz |
| `typescript` | 6.0.3 | `strict`. La 7.0 aún no la acepta `typescript-eslint` |
| `tailwindcss` | 4.3.3 | Estilos. Solo el rol de layout |
| `framer-motion` | 14.3.0 | Movimiento. Solo `src/motion/` |
| `lucide-react` | 1.57.0 | Iconos. No mezclar otro set |
| `gray-matter` | 4.0.3 | Frente YAML de `brain/04_Contenido` |

La puerta de salida de un ticket de código es `npm run verify`: `tsc --noEmit` y `eslint . --max-warnings=0`. Hace falta Node `>=20.9.0`. Next 16.4.1 ya no trae el subcomando `next lint`.

## Estructura de carpetas

```text
brain/                 contexto y Markdown publicable
src/app/               rutas
src/components/        maquetación
src/motion/            Framer Motion
src/actions/           Server Actions
src/lib/               parseo con gray-matter y adaptadores
src/mocks/portfolio.mock.ts
src/types/contracts.ts
```

`brain/` no es una ruta pública. Hasta que exista el parser, UI y motion importan `src/mocks/portfolio.mock.ts`. Cuando el backend entregue la función real, se cambia ese import. No se mantienen los dos orígenes a la vez.

El orquestador actualiza el mock en el mismo cambio que `contracts.ts`.

## Flujo de estado

1. Un ticket lista `dependencias`, `contexto_lectura`, `archivos_permitidos` y `archivos_prohibidos`.
2. No se ejecuta si una dependencia no está `completado`.
3. El ejecutor lee el ticket, `contexto_lectura` y la spec de su rol. Escribe solo en `archivos_permitidos`.
4. `npm run verify` tiene que terminar en 0. Si no, no hay ticket `completado`.
5. Un caso se redacta en `brain/04_Contenido/Casos-Estudio/<slug>.md`. El parser lo convierte en `ProjectCaseStudy`.

No hay base de datos ni estado global en esta fase.

## Git

Un ticket cerrado, un commit, en la misma copia del repo. El mensaje lleva el id: `feat(T-01): por qué`. Si `npm run verify` falla dos veces, ese chat se cierra. En un árbol en serie y sin otro trabajo sucio, `git checkout .` vuelve al último commit bueno. El orquestador parte el ticket en dos. El agente no ejecuta `git reset --hard`.

Dos agentes no editan este directorio a la vez. El paralelo usa otro worktree (`git worktree add ../portfolio-<rol> <rama>`), con su propio servidor, y se integra después. El agente no hace `git reset --hard` ni commit solo: deja el mensaje listo.

## Límites entre roles

- `orquestador`: único que crea tickets y edita `contracts.ts` y el mock. No toca `src/components/` ni `src/lib/`.
- `design-system`: `Sistema-Diseno.md` y `Reglas-Motion.md`.
- `ui-layout`: componentes. No define físicas.
- `motion`: `src/motion/` con el spring fijado.
- `backend`: `gray-matter`, Server Actions. No pinta.
- `copywriter`: Markdown de `04_Contenido`.
- `qa`: el checklist. No amplía el producto.
