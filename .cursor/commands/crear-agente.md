# Crear agente

Crea un especialista que todavía no existe. No implementes su trabajo de producto.

1. Toma el encargo del mensaje (por ejemplo, shaders WebGL o analítica). Si no hay encargo, pregunta el nombre y detente.
2. Comprueba `.cursor/rules/` y `brain/00_MOC/INDEX.md`. Si el rol ya existe, no dupliques: di cuál regla lo cubre.
3. Elige un identificador `kebab-case` en español, estable, que no choque con `orquestador`, `copywriter`, `design-system`, `ui-layout`, `motion`, `backend` ni `qa`.
4. Crea `brain/06_Especialistas/<Nombre>.md` en español, con frontmatter `rol`, `estado: bloqueado` y `resumen`. La nota dice qué decide el rol, qué archivos posee y qué tiene prohibido. No copies specs de otros roles.
5. Crea `.cursor/rules/NN-<identificador>.mdc`. `NN` es el siguiente número libre. Frontmatter: `alwaysApply: false`, una `description` que diga cuándo solicitar la regla, y `globs` que no se solapen con los de otro rol. El cuerpo cabe en menos de 50 líneas, lee la nota nueva y prohíbe salir de ella.
6. Enlaza la nota y la regla desde `brain/00_MOC/INDEX.md` sin pasar de 50 líneas.
7. Añade el identificador a la lista de `rol_asignado` en `brain/00_Tareas/_PLANTILLA_TICKET.md`.
8. No crees el ticket de implementación salvo que te lo pidan con `/orquestar`. No toques `src/`.

Cierra con la ruta de la nota, la ruta de la regla y la frase para invocarla: solicitar esa regla o abrir un ticket con ese `rol_asignado`.
