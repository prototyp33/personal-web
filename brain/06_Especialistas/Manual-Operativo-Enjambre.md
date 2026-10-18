---
tipo: spec
rol: orquestador
estado: bloqueado
epica: E0
resumen: Checklist del puesto de mando Obsidian + Cursor + Git. Quién escribe qué en brain/ y el ciclo de 6 pasos.
---

# Manual operativo del enjambre

Checklist del día a día. No sustituye las ADR ni los tickets. Si algo aquí choca con una ADR aceptada, manda la ADR.

## 1. Puesto de mando (tres herramientas)

### Obsidian — panel de control y CMS

| Regla | Detalle |
| --- | --- |
| Carpeta abierta | Solo `brain/` del repositorio. Ruta absoluta típica: `…/Personal website/brain`. **No** la raíz del repo. |
| No abrir | Carpetas vacías creadas por Obsidian en la raíz (`Personal website/`, `project vaut/`, `project vault/`). Están en `.gitignore`; bórralas si reaparecen. La bóveda con notas es `brain/` (~30 `.md`). |
| Pestañas fijas | `00_MOC/ROADMAP.md`, `01_Arquitectura/Registro-ADR.md` y la carpeta `00_Tareas/`. |
| Estructura | Solo las cajas de [Propósito · composición](../01_Arquitectura/Proposito-de-la-Boveda.md#composición-estructura-limpia). Investigación jubilada en `99_Borradores/`. |

### Cursor — fábrica de ejecución

| Regla | Detalle |
| --- | --- |
| Carpeta abierta | Raíz del repo (`package.json`, `src/`, `brain/`). |
| Chat fijo | Una sola pestaña `[0] Orquestador` (`/orquestar`, `@01-orquestador`). |
| Chats temporales | Un ticket = un chat virgen con `/ejecutar-ticket`. Se cierra tras commit. |

### Terminal integrada

| Regla | Detalle |
| --- | --- |
| Node | `nvm use` → Node **22** (`.nvmrc`). El suelo de `package.json` es `>=20.9.0`; el puesto de mando usa 22. |
| Pre-vuelo | `git status` limpio antes de abrir o ejecutar un ticket. |

## 2. Quién escribe en `brain/`

| Ruta | Quién escribe | Uso humano |
| --- | --- | --- |
| `99_Borradores/` | Solo tú | Bloc libre. Ignorado por agentes (`.cursorignore`) y por git. |
| `04_Contenido/Casos-Estudio/` | Agente copywriter + tú | Ticket genera estructura (Problema / Arquitectura / Métricas); tú pulís en Obsidian. |
| `01_Arquitectura/`, `02_Specs-Frontend/`, `03_Specs-Backend/` | Orquestador / especialistas | `estado: bloqueado` no se edita a mano a mitad de ticket. Promoción desde borradores: `/ingerir`. |
| `00_Tareas/T-XX-*.md` | Orquestador crea; ejecutor marca casillas | Tú no redactas tickets a mano; los miras para ver el progreso. |

## 3. Ciclo de trabajo (6 pasos)

Orden estricto. Saltar un paso pierde garantías de scope y de memoria.

1. **Árbol limpio** — `git status` sin cambios ni `??`. Si hay trabajo de un ticket anterior sin commit, commit primero. No lances otro ticket con el árbol sucio: `npm run scope` mezclará diffs.
2. **Planificar** — En `[0] Orquestador`, `/orquestar` + intención. Comprueba en Obsidian el `T-XX.md` (YAML completo). Si hace falta contrato, el orquestador actualiza `contracts.ts` y `portfolio.mock.ts` en el mismo turno.
3. **Ejecutar** — Chat nuevo: `/ejecutar-ticket` + ticket adjunto. El ejecutor solo toca `archivos_permitidos` y corre `verify` + `scope`.
4. **Dos intentos** — Verify/scope en cero → paso 5. Primer fallo → pegas el error literal. Segundo fallo → paras, cierras el chat, `git checkout .` (árbol en serie sin otro trabajo sucio), orquestador parte el ticket. Sin tercer prompt.
5. **Destilar y commit** — `/destilar` en el orquestador (changelog; ADR solo si es estructural). Commit atómico: `feat(T-XX): por qué`. Cierras el chat del ejecutor.
6. **Auditar la épica** — Cuando cierran todos los tickets de una épica: chat nuevo `/auditar`. Hallazgos → tickets de corrección vía orquestador. VºBº → épica a Completadas en el roadmap (tras auditoría).

## 4. Comandos slash (repo)

| Comando | Dónde | Efecto |
| --- | --- | --- |
| `/orquestar` | `[0] Orquestador` | Tickets y contratos; no implementa. |
| `/ejecutar-ticket` | Chat virgen | Un ticket, un rol. |
| `/destilar` | Orquestador | Cierre, changelog, ADR si aplica; prepara commit. |
| `/auditar` | Chat QA | Informe; no edita `src/`. |
| `/ingerir` | Orquestador | Destila `99_Borradores` nombrados → specs. |
| `/crear-agente` | Orquestador | Nuevo rol / regla. |

## 5. Grafo de Obsidian = radar de auditoría

No es decoración. Abre **Graph view** tras cada `/destilar` y mira en 2 segundos:

| Señal | Significado | Acción |
| --- | --- | --- |
| Ticket verde flotando (huérfano) | Cerrado sin wikilink en [[ROADMAP]] o [[CHANGELOG]] | Enlaza `[[T-NN-slug\|T-NN]]` al destilar |
| Nodo gris apagado | `[[Nombre-Mal-Escrito]]` sin archivo | Corrige el wikilink |
| Borrador / `*-propuesta` pegado al núcleo | Contaminación de contexto | Quita el enlace; jubila en `99_Borradores/` |

### Colores (P1)

| Color | Hex | Query | Rol |
| --- | --- | --- | --- |
| Hueso | `#F2F2F2` | `path:00_MOC` | Mapas |
| Azul laboratorio | `#2F5BFF` | Specs / arquitectura / calidad / especialistas | Leyes y specs |
| Verde | `#22C55E` | `path:00_Tareas` | Tickets |
| Ámbar | `#D67A26` | `path:04_Contenido` | CMS / casos |

### Config local (fuera de Git)

Archivo: `brain/.obsidian/graph.json` (cubierto por `.gitignore` / `.cursorignore`). No se commitea.

Claves críticas: `"search": "-path:99_Borradores"`, `"showArrow": true`, `"hideUnresolved": false`, `"showOrphans": true`.

Si Obsidian resetea el grafo, pega esto en `brain/.obsidian/graph.json` (local; no hacer commit):

```json
{
  "collapse-filter": false,
  "search": "-path:99_Borradores",
  "showTags": false,
  "showAttachments": false,
  "hideUnresolved": false,
  "showOrphans": true,
  "collapse-color-groups": false,
  "colorGroups": [
    { "query": "path:00_MOC", "color": { "a": 1, "rgb": 15921906 } },
    { "query": "path:01_Arquitectura OR path:02_Specs-Frontend OR path:03_Specs-Backend OR path:05_Calidad OR path:06_Especialistas", "color": { "a": 1, "rgb": 3103743 } },
    { "query": "path:00_Tareas", "color": { "a": 1, "rgb": 2278750 } },
    { "query": "path:04_Contenido", "color": { "a": 1, "rgb": 14055974 } }
  ],
  "collapse-display": false,
  "showArrow": true,
  "textFadeMultiplier": -1.5,
  "nodeSizeMultiplier": 1.1,
  "lineSizeMultiplier": 1,
  "collapse-forces": false,
  "centerStrength": 0.6,
  "repelStrength": 10,
  "linkStrength": 1,
  "linkDistance": 180
}
```

El repo versiona la **regla** (esta sección); la **calibración** en `.obsidian/` es local.

Al destilar: además del changelog, comprueba que el ticket nuevo tiene wikilink en ROADMAP (épica) y en CHANGELOG.

## 6. Automatizaciones (código y comandos; cero plugins)

| Práctica | ¿Hacerlo? | Por qué |
| --- | --- | --- |
| `graph.json` con `-path:99_Borradores` y colores P1 | Sí | Radar visual de arquitectura |
| `/destilar` obliga `[[T-XX-Nombre]]` en ROADMAP + CHANGELOG | Sí | Sin tickets huérfanos |
| `npm run verify` incluye `vault-check` | Sí | Casos rotos o wikilinks públicos fallan antes del commit |
| Plugins Dataview / Templater / Kanban / Git en Obsidian | **No** | Sintaxis propietaria; conflictos con agentes y git de terminal |
| `[[wikilinks]]` dentro de `04_Contenido/Casos-Estudio/` | **No** | Salen crudos en la web vía gray-matter |

### Bookmarks nativos de Obsidian (sin Dataview)

Con el esquema A de [Frontmatter YAML](../01_Arquitectura/Frontmatter-YAML.md), en **Buscar** guarda estos filtros en Marcadores:

1. **Tickets pendientes** — `path:00_Tareas [estado:pendiente]`
2. **Specs bloqueadas** — `[estado:bloqueado]`
3. **Borradores infiltrados** — `-path:99_Borradores [estado:borrador]`

## 7. Comprobaciones rápidas del repo

- [ ] Obsidian apunta a `brain/`.
- [ ] Cursor apunta a la raíz del repo.
- [ ] Existe pestaña `[0] Orquestador`.
- [ ] `nvm use` → v22.x.
- [ ] `git status` limpio.
- [ ] No existe bóveda falsa `Personal website/` en la raíz.
- [ ] `.cursorignore` excluye `brain/.obsidian/**` y `brain/99_Borradores/**`.
- [ ] Graph view: sin tickets huérfanos ni enlaces a `99_Borradores`.
- [ ] `npm run vault-check` (o `verify`) en cero.
