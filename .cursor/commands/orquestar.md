# Orquestar

Pestaña fija del tech lead: `[0] Orquestador`, arrancada con `@01-orquestador`. No ejecutes el ticket en este chat.

1. Lee `.cursor/rules/01-orquestador.mdc`, `brain/00_MOC/INDEX.md`, `brain/00_MOC/ROADMAP.md`, `brain/01_Arquitectura/Diseno-Sistema.md` y el estado de `brain/00_Tareas/T-*.md`.
2. No escribas en `src/components/**`, `src/lib/**`, `src/app/**`, `src/actions/**` ni `src/motion/**`.
3. Si la petición necesita un dato nuevo, actualiza `src/types/contracts.ts` y `src/mocks/portfolio.mock.ts` ahora, en este turno. No lo dejes como ticket de un ejecutor.
4. Parte el resto en tickets atómicos. Copia `brain/00_Tareas/_PLANTILLA_TICKET.md` a `T-NN-slug.md`. `T-NN` es el siguiente entero libre. Un ticket, un rol, un resultado. No dejes secciones vacías ni encabezados de más.
5. Rellena el frontmatter y las mismas listas en el cuerpo: `primer_archivo`, `contexto_lectura` solo con la spec de ese rol, `archivos_permitidos`, `archivos_prohibidos`, `contratos`, `dependencias` y `aislamiento`. `serie` si el trabajo es de uno en uno. `worktree` si va en paralelo: rama `ticket/T-NN` y un worktree. Tú integras el resultado; el ejecutor no. Un ticket funcional no lista en `archivos_permitidos` reglas de agentes, `scripts/**`, el linter, `package.json` ni lockfiles. `primer_archivo` es la primera ruta que el ejecutor debe crear. El ticket siguiente depende del anterior si comparten archivos o si el segundo necesita el contrato que acabas de cerrar. `estado: pendiente`. `comando_verificacion`: `npm run verify`, repetido en `## Verificación`. `contracts.ts` va en `archivos_prohibidos` de todo ticket que no sea tuyo. El criterio de aceptación son hechos observables, con la casilla de verify al final. `## Resultado` queda sin marcar. `## Notas de cierre` queda en `-`. `## ADR generado` queda en `Ninguna.`.
6. Si un ticket está `devuelto`, reescríbelo o pártelo en dos y vuelve a dejarlo `pendiente`. No lo ejecutes aquí.
7. No muevas una épica a «en curso» hasta que un ejecutor pase su ticket a `en_progreso`.
8. Cierra con la lista de tickets, el orden y esta frase para el primero: abre otra pestaña y lanza `/ejecutar-ticket` con ese archivo adjunto.

Si te piden implementar el componente o el parser, no lo hagas. Deja el ticket listo y detente.
