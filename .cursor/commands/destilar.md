# Destilar

Cierra el ticket adjunto. Si no está adjunto, pide `@brain/00_Tareas/T-NN-....md` y detente.

1. Lee el ticket. Si `## Resultado` es Devuelto al Orquestador, o si queda alguna casilla abierta en `## Criterio de aceptación`, no lo marques `completado`: lista el motivo y para. Este chat no reabre un ticket `devuelto`.
2. Ejecuta `npm run scope -- <ticket>`. Compara el diff, incluido staging, con el alcance. Si falla, no aceptes la entrega, no prepares el commit y pasa el ticket a `devuelto` con la salida del script en el motivo.
3. Ejecuta `npm run verify`. Si no termina en cero, no prepares el commit y no intentes un tercer arreglo: los dos intentos viven en `/ejecutar-ticket`. Detente.
4. Confirma `estado: completado`, la casilla Aprobado, `## Notas de cierre` con una o dos líneas y `## ADR generado` rellenada (`Ninguna.` es lo habitual).
5. Si este chat no es la pestaña `[0] Orquestador`, no escribas en `Registro-ADR.md` ni en `CHANGELOG.md`. Las notas del ticket son el insumo.
6. Si este chat es el orquestador, añade una viñeta en `brain/01_Arquitectura/CHANGELOG.md` con el id del ticket y el texto de `## Notas de cierre`. No copies esa viñeta al registro de ADR.
7. **Regla de Grafo al Destilar (obligatoria):** con el archivo del ticket `T-XX-Nombre.md` (nombre sin extensión = `T-XX-Nombre`):
   - Inserta el wikilink exacto `[[T-XX-Nombre]]` (o `[[T-XX-Nombre|T-XX]]`) en la viñeta nueva de `brain/01_Arquitectura/CHANGELOG.md`.
   - Inserta el mismo wikilink bajo la épica correspondiente en `brain/00_MOC/ROADMAP.md`.
   - En el cuerpo del ticket, las notas de `brain/` citadas en `contexto_lectura` deben tener al menos una referencia `[[Nombre-Nota]]` (nombre de archivo sin `.md`) para trazabilidad en el grafo de Obsidian.
   - No uses solo enlaces Markdown `[texto](ruta)` para esa trazabilidad: el Graph View de Obsidian prioriza `[[wikilinks]]`.
   - Prohibido enlazar desde el núcleo a `99_Borradores/` o a `*-propuesta` jubiladas.
8. Añade una ADR corta solo si `## ADR generado` es estructural: librería o dependencia relevante; patrón de estado, datos o autenticación; contrato público; carpetas o límite de módulo; decisión de no hacer algo, y por qué. Formato: `ADR-NN: Se adopta X por Y motivo`. Si dice `Ninguna.`, no inventes una ADR.
9. Si el ticket nombra una épica y no queda otro ticket suyo abierto, muévela a `## Completadas` en `brain/00_MOC/ROADMAP.md`. Aún no está auditada: la épica se da por buena después de `/auditar`.
10. Prepara un solo commit para este ticket, sin ejecutarlo. El orquestador es quien integra. Mensaje: `feat(T-NN): por qué`, no un resumen de archivos. Revisa `git status` y `git diff`, deja fuera secretos y `brain/99_Borradores/**`. No hagas `git reset --hard` ni `git checkout .`. Espera confirmación antes de `git commit`.
11. Resume en español: ticket cerrado, scope y verify en cero, viñeta de changelog (con `[[T-XX-Nombre]]`), enlace en ROADMAP, y, si la hubo, la ADR. Cierra este chat. No abras el siguiente ticket aquí. Otro ticket en paralelo necesita su propia rama y su worktree.
