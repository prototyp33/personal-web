---
tipo: ticket
id: T-00
titulo: "Título corto de la tarea"
rol_asignado: ui-layout # cumple el «rol» del esquema A; no renombrar
estado: pendiente # pendiente | en_progreso | completado | devuelto
epica: E0 # E0 | E1 | E2 | E3 | E4 | E5
resumen: "Una línea: qué entrega este ticket."
aislamiento: serie # serie | worktree. worktree no es un permiso de escritura.
dependencias: [] # No ejecutar hasta que cada id esté completado
contexto_lectura:
  - "brain/02_Specs-Frontend/Sistema-Diseno.md"
primer_archivo: "src/components/ejemplo.tsx"
archivos_permitidos:
  - "src/components/projects/**"
archivos_prohibidos:
  - "src/lib/**"
  - "src/types/contracts.ts"
  - "package.json"
  - "package-lock.json"
  - "scripts/**"
  - ".cursor/**"
  - "eslint.config.mjs"
contratos: [] # Interfaces de contracts.ts. Vacío si el ticket no las usa.
comando_verificacion: "npm run verify"
---

# T-00 — Título corto de la tarea

Plantilla. No se ejecuta. Cópiala a `T-NN-slug.md` y sustituye cada campo.

Ciclo: `pendiente` → `en_progreso` → `completado` o `devuelto`.
El ejecutor marca el criterio, elige un solo Resultado, rellena Notas de cierre y deja ADR generado en `Ninguna.` salvo que el cambio sea estructural (ADR-011).
No edita el objetivo, las listas de archivos, los contratos ni el frontmatter de alcance.

Las listas de archivos, `contratos` y `comando_verificacion` del cuerpo coinciden con el frontmatter. Si hubiera una diferencia, manda el frontmatter.

El frontmatter prohíbe. No impide escribir. Antes de aceptar la entrega, `npm run scope -- <este-ticket>` compara el diff, incluido lo que esté en staging, con esas rutas. Un ticket funcional no puede modificar reglas de agentes, este script, el linter, `package.json` ni lockfiles.

## Objetivo

Qué debe existir al terminar, en 2-3 líneas. Un ticket, un resultado.

Fuera de alcance:

- Lo que este ticket no hace.

## Criterio de aceptación

- [ ] Hecho observable.
- [ ] `npm run verify` termina en cero.

## Archivos permitidos

- `src/components/projects/**`

## Archivos prohibidos

- `src/lib/**`
- `src/types/contracts.ts`
- `package.json`
- `package-lock.json`
- `scripts/**`
- `.cursor/**`
- `eslint.config.mjs`

## Contratos afectados

- Ninguno. Si hace falta un tipo que no está aquí, el resultado es Devuelto al Orquestador.

## Verificación

- `npm run verify`

## Resultado

Una sola casilla. La rellena el ejecutor.

- [ ] Aprobado
- [ ] Devuelto al Orquestador

Motivo de la devolución:

-

## Notas de cierre

Una o dos líneas de lo que quedó hecho. No es una ADR. `/destilar` la copia al changelog.

-

## ADR generado

`Ninguna.` salvo un cambio estructural: librería o dependencia relevante; patrón de estado, datos o autenticación; contrato público; carpetas o límite de módulo; decisión de no hacer algo, y por qué.

- Ninguna.
