# Portfolio personal

Sitio personal (Next.js). La bóveda `brain/` no es un wiki libre: enruta contexto a Cursor, gobierna el enjambre por tickets y actúa como CMS headless de casos (`getCaseStudies()`). Detalle: [`Proposito-de-la-Boveda.md`](brain/01_Arquitectura/Proposito-de-la-Boveda.md). El trabajo de producto entra por tickets en `brain/00_Tareas/`.

## Puesto de mando

| Herramienta | Qué abres |
| --- | --- |
| **Obsidian** | Solo la carpeta `brain/` (bóveda). No la raíz del repo. |
| **Cursor** | La raíz del repo (`package.json`, `src/`, `brain/`). |
| **Chat fijo** | Una pestaña `[0] Orquestador`. El resto de chats son temporales por ticket. |

Checklist completo: [`brain/06_Especialistas/Manual-Operativo-Enjambre.md`](brain/06_Especialistas/Manual-Operativo-Enjambre.md).

## Requisitos

- Node **22** en el día a día: `nvm use` (lee `.nvmrc`). Suelo del proyecto: `>=20.9.0`.
- Dependencias: `npm install`
- Antes de un ticket: `git status` limpio.

## Comandos

```bash
nvm use
npm run verify   # typecheck + eslint + vault-check (casos CMS + specs)
npm run scope -- brain/00_Tareas/T-NN-slug.md   # alcance del ticket frente al diff
```

Ciclo: `/orquestar` → `/ejecutar-ticket` → `/destilar` + commit → `/auditar` al cerrar una épica.

## Contexto durable

El mapa de la bóveda está en [`brain/00_MOC/INDEX.md`](brain/00_MOC/INDEX.md). Las épicas viven en [`brain/00_MOC/ROADMAP.md`](brain/00_MOC/ROADMAP.md). Stack y flujo: [`brain/01_Arquitectura/Diseno-Sistema.md`](brain/01_Arquitectura/Diseno-Sistema.md).

Los agentes del enjambre usan `.cursor/rules/` y los comandos slash (`.cursor/commands/`).
