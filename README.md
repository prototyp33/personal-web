# Portfolio personal

Sitio personal (Next.js) con contenido editorial en la bóveda `brain/`. El trabajo de producto entra por tickets en `brain/00_Tareas/`, no por editar a ciegas.

## Requisitos

- Node `>=20.9.0`
- Dependencias: `npm install`

## Comandos

```bash
npm run verify   # typecheck + eslint estricto
npm run scope -- brain/00_Tareas/T-NN-slug.md   # alcance del ticket frente al diff
```

## Contexto durable

El mapa de la bóveda está en [`brain/00_MOC/INDEX.md`](brain/00_MOC/INDEX.md). Las épicas viven en [`brain/00_MOC/ROADMAP.md`](brain/00_MOC/ROADMAP.md). Stack, carpetas y flujo de estado: [`brain/01_Arquitectura/Diseno-Sistema.md`](brain/01_Arquitectura/Diseno-Sistema.md).

Los agentes del enjambre usan `.cursor/rules/` y los comandos slash (`.cursor/commands/`).
