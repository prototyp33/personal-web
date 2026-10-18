# Ejecutar ticket

Ejecuta un solo ticket. Si no está adjunto, pide `@brain/00_Tareas/T-NN-....md` y no hagas nada más. Rechaza `_PLANTILLA_TICKET.md`.

## Ritmo

Tres lecturas y a escribir. Prohibido un plan, prohibido explorar `node_modules` y prohibido abrir archivos que el ticket no nombre.

1. Lee el ticket. Si no trae las secciones de `_PLANTILLA_TICKET.md`, detente y devuélvelo a `[0] Orquestador`. Si `estado` es `bloqueado`, `devuelto` o `completado`, no lo ejecutes. Si una dependencia no está `completado`, detente y di cuál falta. Ejecuta `npm run scope -- <ticket> --inicio`. Si `aislamiento` es `serie`, hace falta un checkout limpio y ningún otro ticket `en_progreso`. Si es `worktree`, hace falta la rama `ticket/T-NN` en un worktree, no el checkout principal. Si el script falla, no empieces.
2. Pasa `estado` a `en_progreso`. Lee solo la regla de `rol_asignado` y los archivos de `contexto_lectura`.
3. Si `primer_archivo` no existe, la siguiente acción es crearlo. Si los archivos del ticket ya existen, la siguiente acción es `npm run verify`. No vuelvas a leer la bóveda.
4. Sigue solo dentro de `archivos_permitidos`. Un tipo que no esté en `contratos` se devuelve: marca Devuelto al Orquestador, escribe el motivo y pasa `estado` a `devuelto`. No crees tickets ni edites `src/types/contracts.ts`. En el ticket solo puedes cambiar `estado`, las casillas de `## Criterio de aceptación`, `## Resultado`, `## Notas de cierre` y `## ADR generado`.

Regla del rol:

- `orquestador` → `.cursor/rules/01-orquestador.mdc`
- `design-system` → `brain/02_Specs-Frontend/Sistema-Diseno.md` y `Reglas-Motion.md`. No crees componentes.
- `ui-layout` → `.cursor/rules/02-ui-layout.mdc`
- `motion` o `motion-interaccion` → `.cursor/rules/03-motion-interaccion.mdc`
- `backend` o `backend-datos` → `.cursor/rules/04-backend-datos.mdc`
- `copywriter` → `.cursor/rules/05-copywriter.mdc`
- `qa` o `auditor-qa` → `.cursor/rules/06-auditor-qa.mdc`
- Otro rol → la regla `.mdc` que `/crear-agente` haya creado para ese nombre.

## Cierre

5. Marca `[x]` en `## Criterio de aceptación` solo lo que ya esté hecho.
6. PROHIBIDO marcar el ticket como completado hasta que hayas ejecutado `npm run verify` en la terminal integrada de Cursor y el resultado sea 0 errores. Si falla, hay un solo intento más: corrige dentro de `archivos_permitidos` usando el error literal de esa ejecución. Si el segundo `npm run verify` también falla, detente. No sigas editando el producto. Marca solo `Devuelto al Orquestador`, copia el error en el motivo, pasa `estado` a `devuelto` y no ejecutes `git checkout .` ni `git reset --hard`.
7. Con verify en cero, ejecuta `npm run scope -- <ticket>`. Si falla, no marques Aprobado: marca Devuelto al Orquestador, copia la salida en el motivo y pasa `estado` a `devuelto`. Si pasa, y todos los criterios están marcados, escribe una o dos líneas en `## Notas de cierre`. Deja `## ADR generado` en `Ninguna.` salvo que el cambio sea estructural: librería o dependencia relevante; patrón de estado, datos o autenticación; contrato público; carpetas o límite de módulo; decisión de no hacer algo, y por qué. En ese caso escribe «Se adopta X por Y motivo». Marca solo `Aprobado` y pasa `estado` a `completado`. No hagas commit, no integres, no escribas el changelog ni el ADR: eso lo cierra el orquestador con `/destilar`.

Si el segundo verify falló, la recuperación no ocurre en este chat. En un árbol en serie, sin otro trabajo sucio, quien opera el repo ejecuta `git checkout .`. Luego el orquestador parte el ticket en dos y el siguiente intento abre un chat nuevo.

Responde en español con qué cambió, el resultado de verify y qué quedó fuera del ticket.
