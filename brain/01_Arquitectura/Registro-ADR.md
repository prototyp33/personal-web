---
rol: orquestador
estado: bloqueado
resumen: Decisiones estructurales aceptadas. No acumula la bitácora de cada ticket.
---

# Registro de decisiones de arquitectura

Solo el orquestador escribe aquí. Los demás agentes lo leen al arrancar y no lo reabren.

Una entrada larga lleva contexto, decisión y consecuencias. Al cerrar un ticket, el orquestador añade una entrada corta solo si `## ADR generado` nombra una decisión estructural. Qué cuenta como estructural lo fija ADR-011. Si no es de esa lista, no se inventa una ADR: el cambio menor queda en `## Notas de cierre` del ticket y en [CHANGELOG.md](CHANGELOG.md).

```md
## ADR-NN — Se adopta X
- **Estado:** aceptada
- **Ticket:** T-NN
- **Decisión:** Se adopta X por Y motivo.
```

Si el ticket no introdujo una decisión estructural, no se inventa una ADR.

## ADR-001 — La bóveda separa el contexto de los agentes

- **Estado:** aceptada
- **Contexto:** un solo hilo mezcla diseño visual, esquema de datos y notas a medio hacer.
- **Decisión:** el contexto durable vive en `brain/`. Cada rol lee las notas que el ticket enlaza. `brain/99_Borradores/**` y `brain/.obsidian/**` se excluyen en `.cursorignore`.
- **Consecuencias:** una spec que no está en `INDEX.md` no existe para los agentes.

## ADR-002 — Un solo archivo de contratos compartidos

- **Estado:** aceptada
- **Contexto:** si interfaz y servidor declaran tipos distintos, el relevo se rompe.
- **Decisión:** `src/types/contracts.ts` es la única fuente de `ProjectCaseStudy`, `ExperienceItem`, `SkillCategory`, `ContactSubmission` y `CONTACT_LIMITS`. Solo el orquestador lo edita, y solo dentro de un ticket que lo liste en `archivos_permitidos`.
- **Consecuencias:** el ticket de contrato se cierra antes de que otro rol dependa del tipo nuevo.

## ADR-003 — Markdown/MDX en la bóveda, sin CMS ni base de datos

- **Estado:** aceptada
- **Contexto:** el portfolio es contenido editorial. Una base de datos o un CMS añaden operación sin cambiar el producto.
- **Decisión:** los casos viven en `brain/04_Contenido/Casos-Estudio/`. El parser acepta `.md` y `.mdx` y devuelve `ProjectCaseStudy`. El contacto se valida en una Server Action y no se persiste. El stack queda fijado en [Diseño del sistema](Diseno-Sistema.md).
- **Consecuencias:** publicar es editar un archivo de contenido. El envío real de correo espera un ADR.

## ADR-004 — Las specs bloqueadas no se reescriben de paso

- **Estado:** aceptada
- **Contexto:** un agente de implementación puede «mejorar» una spec mientras construye.
- **Decisión:** `estado: bloqueado` se obedece. Cambiarla exige rol `orquestador`, una ADR aquí y un ticket. `estado: borrador` se edita dentro del rol dueño de la carpeta.
- **Consecuencias:** el trabajo de producto espera a que el roadmap tenga la épica abierta y un ticket `pendiente`.

## ADR-005 — El enjambre trabaja por tickets

- **Estado:** aceptada
- **Contexto:** un tablero único juntaba checklists de todos los roles y cada chat cargaba specs de más.
- **Decisión:** la unidad de trabajo es `brain/00_Tareas/T-XX-slug.md`, con `rol_asignado`, `estado`, `contexto_lectura`, `archivos_permitidos` y `archivos_prohibidos`. El protocolo de `.cursor/rules/00-protocolo-enjambre.mdc` aplica siempre. Cada rol tiene una regla con descripción y globs. Los comandos `/orquestar`, `/ejecutar-ticket`, `/crear-agente` y `/destilar` abren especialistas, ejecutan, crean roles y cierran el ciclo. Se retira `TAREA_ACTIVA.md`.
- **Consecuencias:** un chat sin ticket no implementa. Un rol no abre la spec de otro salvo que el ticket la enlace.

## ADR-006 — Scope lock, mock gemelo y stack con versiones

- **Estado:** aceptada
- **Contexto:** dos chats podían editar el mismo archivo, maquetar sin datos y elegir cada uno una librería distinta. La spec anterior prohibía una librería de animación.
- **Decisión:** el ticket exige `dependencias`, `contexto_lectura`, `archivos_permitidos`, `archivos_prohibidos` y `comando_verificacion`. `src/mocks/portfolio.mock.ts` se actualiza en el mismo cambio que `contracts.ts`. El stack queda fijado sin rangos en `package.json`: Next 16.4.1, React 19.3.1, TypeScript 6.0.3, Tailwind 4.3.3, Framer Motion 14.3.0, Lucide 1.57.0 y gray-matter 4.0.3. TypeScript 7 queda fuera hasta que `typescript-eslint` lo soporte. Node `>=20.9.0`. Esta ADR sustituye la frase «sin librería de animación». Un ticket de código no pasa a `completado` sin `npm run verify` en cero. `lint:strict` usa ESLint con `eslint-config-next`, porque Next 16.4.1 no incluye `next lint`. En git, un ticket es un commit; el paralelo usa otro worktree.
- **Consecuencias:** UI y motion no esperan al parser. El agente no hace commit ni `git reset --hard`.

## ADR-007 — El orquestador no pisa al ejecutor

- **Estado:** aceptada
- **Contexto:** si el mismo chat planifica y maqueta, mezcla contratos con Tailwind. Si el ejecutor abre el siguiente ticket, el enjambre deja de tener un solo guardián del alcance.
- **Decisión:** el orquestador es el tech lead. Vive en una pestaña fija, `[0] Orquestador`, con `@01-orquestador` o `/orquestar`. Lee el roadmap, la arquitectura y el estado de `brain/00_Tareas/`. Es el único que crea tickets y el único que edita `src/types/contracts.ts` y `src/mocks/portfolio.mock.ts`. No escribe en `src/components/` ni en `src/lib/`. El ejecutor, en otra pestaña, solo consume el ticket adjunto y no planifica el siguiente. Qué puede escribir en ese ticket lo fija ADR-010.
- **Consecuencias:** una petición nueva entra por la pestaña del orquestador. El script de n8n o de GitHub Actions que redactaría el siguiente ticket solo no forma parte de esta fase.

## ADR-008 — ADR al cierre, QA de épica y dos intentos

- **Estado:** aceptada
- **Contexto:** un ejecutor puede adoptar una librería que el siguiente chat deshace, y un `verify` roto se convierte en un bucle de parches.
- **Decisión:** `Registro-ADR.md` lo escribe solo el orquestador, al cerrar el ticket, y solo si hubo librería nueva, cambio de carpetas o patrón fuera del stack. Todo agente lo lee al arrancar. El auditor de QA no implementa: al cerrar una épica revisa el diff contra los contratos, el código muerto, los tipos y la accesibilidad, y devuelve hallazgos. Si `npm run verify` falla, hay una corrección con el error literal de la terminal. Si falla otra vez, el ejecutor se detiene. No sigue el chat, no hace `git reset --hard` y no parte el ticket. Quien opera el repo, en un árbol en serie sin otro trabajo sucio, restaura con `git checkout .`. El orquestador divide el ticket en dos y el siguiente intento abre un chat nuevo.
- **Consecuencias:** el chat que falló dos veces se cierra. La épica no se da por buena sin `/auditar`. El criterio de qué entra en este registro lo sustituye ADR-011.

## ADR-009 — `/ingerir` destila borradores en la bóveda

- **Estado:** aceptada
- **Decisión:** Se adopta `/ingerir` para destilar material de `99_Borradores` (solo archivos nombrados o adjuntos) hacia `02_Specs-Frontend/` y `04_Contenido/`. Escribe ya; si choca con `bloqueado`, crea `*-propuesta.md`. No toca `src/` ni crea tickets.

## ADR-010 — El ticket tiene plantilla fija y cierre binario

- **Estado:** aceptada
- **Contexto:** el alcance vivía en el frontmatter, pero el cierre era una «sección 4» libre. El ejecutor tenía que inferir qué rellenar y cuándo devolver el trabajo.
- **Decisión:** todo ticket copia `_PLANTILLA_TICKET.md`. El frontmatter sigue siendo el scope lock y suma `contratos`. El cuerpo tiene secciones fijas: Objetivo, Criterio de aceptación, Archivos permitidos, Archivos prohibidos, Contratos afectados, Verificación, Resultado y ADR generado. El ejecutor marca el criterio, elige una sola casilla de Resultado y deja ADR generado en `Ninguna.` o en `Se adopta X por Y motivo`. `estado: devuelto` no se reejecuta: vuelve a `[0] Orquestador`. El registro de ADR lo sigue escribiendo solo el orquestador, en `/destilar`, y solo si ADR generado no es `Ninguna.`.
- **Consecuencias:** un ticket que no trae esas secciones no se ejecuta. Las listas del cuerpo y del frontmatter coinciden; si difieren, manda el frontmatter. Esta ADR sustituye, en ADR-007, la frase que dejaba al ejecutor rellenar el checklist y la sección 4. ADR-011 añade `## Notas de cierre` y saca la bitácora de este registro.

## ADR-011 — El registro de ADR no es la bitácora

- **Estado:** aceptada
- **Contexto:** `Registro-ADR.md` acumulaba una viñeta por ticket cerrado. Un agente que lo lee al arrancar cargaba historia menor junto con las decisiones que no debe deshacer.
- **Decisión:** este archivo solo registra impacto estructural: una librería o dependencia relevante; un patrón de estado, de datos o de autenticación; un contrato público; la arquitectura de carpetas o el límite de un módulo; o la decisión de no hacer algo, y por qué. El cambio menor vive en `## Notas de cierre` del ticket. `/destilar` copia esa nota a [CHANGELOG.md](CHANGELOG.md) y no la copia aquí. Esta ADR sustituye el criterio de entrada de ADR-008 y la sección «Aprendizajes de tickets».
- **Consecuencias:** un ticket cerrado no abre una ADR por defecto. `## ADR generado` queda en `Ninguna.` salvo que el cambio esté en la lista.

## ADR-012 — El scope lock se comprueba en el diff

- **Estado:** aceptada
- **Contexto:** `archivos_prohibidos` entra en el contexto del modelo como una instrucción. Eso no restringe la escritura del editor.
- **Decisión:** hay tres niveles y solo el segundo se automatiza. La prohibición sigue en el ticket. La detección es `npm run scope -- <ticket>`, que compara archivos creados, modificados, borrados y renombrados —también los que estén en staging— con las rutas autorizadas, y rechaza la entrega si algo queda fuera. Un ticket con rol distinto de `orquestador` tampoco puede tocar reglas de agentes, `scripts/**`, la configuración del linter, `package.json` ni lockfiles, aunque los ponga en `archivos_permitidos`. Si el ticket ya está en `HEAD` y su alcance cambió, la comprobación falla. No hay un tercer nivel: ni las reglas ni este script impiden guardar el archivo.
- **Consecuencias:** sin repositorio git la entrega no se acepta, porque no hay diff. T-01 quedó cerrado antes de esta decisión y su lista aún nombra `package.json`.

## ADR-013 — Serie o worktree, e integra el orquestador

- **Estado:** aceptada
- **Contexto:** un chat por ticket separa la conversación. No separa el checkout. Dos chats sobre el mismo árbol no tienen dueño de cada cambio.
- **Decisión:** `aislamiento: serie` usa un solo checkout, con el árbol limpio al empezar y un solo ticket `en_progreso`. `aislamiento: worktree` usa la rama `ticket/T-NN` en un worktree distinto del checkout principal. En los dos casos integra el orquestador, en `/destilar`, después de que `npm run scope` pase. El worktree no sustituye a ese control. Esta ADR precisa la frase de ADR-006 sobre el worktree en paralelo.
- **Consecuencias:** el ejecutor no fusiona ni hace commit. Dos tickets en serie no se solapan. Dos tickets en paralelo no comparten directorio de trabajo.

## ADR-014 — Dirección visual P1 + ensayos P3

- **Estado:** aceptada
- **Contexto:** la investigación ingerida propone tres direcciones; el sistema bloqueado era oscuro con acento cobre.
- **Decisión:** Se adopta base **P1 · Cuaderno de laboratorio** (papel, tipografía de tres voces, columna de lectura) con **ensayos P3 · Explicable** como casos estrella. **P2 · Consola** queda fuera. Los tokens normativos pasan a [Sistema-Diseno.md](../02_Specs-Frontend/Sistema-Diseno.md) vía ticket `design-system`. El spring de Framer Motion no cambia.
- **Consecuencias:** la UI construida bajo la paleta anterior se ajusta en un ticket de layout. `Sistema-Diseno-propuesta.md` deja de mandar cuando T-03 cierre.

## ADR-015 — El contrato del caso sigue en tres bloques

- **Estado:** aceptada
- **Contexto:** la narrativa ingerida pide TL;DR tipado, tira de métricas y secciones extra que no caben en `ProjectCaseStudy`.
- **Decisión:** **No** se amplía `ProjectCaseStudy` en esta fase. Se mantienen `problem`, `approach` y `outcome` mapeados a Problema / Arquitectura / Métricas de Impacto. La voz y el orden editorial se adoptan en la guía de copy y en [Narrativa-Casos.md](../02_Specs-Frontend/Narrativa-Casos.md); el copywriter los mete dentro de esos tres bloques. Figura interactiva y campos TL;DR tipados esperan otro ADR.
- **Consecuencias:** el parser y el mock no cambian por esta decisión. E1 puede avanzar sin tocar `contracts.ts`.
