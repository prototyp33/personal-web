---
id: T-01
titulo: "Layout base de la portada"
rol_asignado: ui-layout
estado: completado
dependencias: []
primer_archivo: "src/app/layout.tsx"
contexto_lectura:
  - "brain/02_Specs-Frontend/Sistema-Diseno.md"
  - "src/types/contracts.ts"
  - "src/mocks/portfolio.mock.ts"
archivos_permitidos:
  - "src/app/layout.tsx"
  - "src/app/page.tsx"
  - "src/app/globals.css"
  - "src/components/layout/**"
  - "postcss.config.mjs"
  - "next.config.ts"
  - "package.json"
  - "package-lock.json"
archivos_prohibidos:
  - "src/lib/**"
  - "src/motion/**"
  - "src/actions/**"
  - "src/app/api/**"
  - "src/types/contracts.ts"
  - "src/mocks/**"
  - "brain/**"
contratos:
  - "ProjectCaseStudy"
comando_verificacion: "npm run verify"
---

# T-01 — Layout base de la portada

## Objetivo

Existe un App Router mínimo: layout con `header`, `main` y `footer`, tokens del sistema de diseño y una portada que lista los casos `featured` del mock, uno por fila.

Avanza E3 y no la cierra.

Fuera de alcance:

- Ficha de caso, formulario y motion.
- Abrir Markdown o redefinir el tipo.
- Cualquier librería distinta de `@tailwindcss/postcss` en `4.3.3`.

## Criterio de aceptación

- [x] Layout con `header`, `main` y `footer`, portada y CSS global con los tokens de `Sistema-Diseno.md`, sin páginas de más.
- [x] `html` con `lang="es"`. Fuentes con `next/font`: Fraunces, Figtree e IBM Plex Mono.
- [x] El nombre visible es «Adrián Iraegui». La frase es: «Ingeniería de datos e IA para decisiones de producto y de operación.»
- [x] Los datos salen de `projectCaseStudies` en `src/mocks/portfolio.mock.ts`. En portada solo entran `featured === true`, ordenados por `order` ascendente. De cada uno se ven título, año y resumen.
- [x] La portada pinta OnSpot y OnSpot ML, en ese orden, y no pinta el caso de vivienda.
- [x] Si ningún caso es `featured`, la lista queda vacía y el nombre y la frase siguen visibles.
- [x] Sin clases `animate-`, `transition-` ni `framer-motion`. Sin estado global.
- [x] `package.json` solo suma `@tailwindcss/postcss` en `4.3.3`, exacto, si hace falta. Ningún otro paquete.
- [x] `npm run verify` termina en cero.

## Archivos permitidos

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- `src/components/layout/**`
- `postcss.config.mjs`
- `next.config.ts`
- `package.json`
- `package-lock.json`

## Archivos prohibidos

- `src/lib/**`
- `src/motion/**`
- `src/actions/**`
- `src/app/api/**`
- `src/types/contracts.ts`
- `src/mocks/**`
- `brain/**`

## Contratos afectados

- `ProjectCaseStudy` — solo lectura. Los datos salen del mock. Si el tipo no alcanza, el resultado es Devuelto al Orquestador.

## Verificación

- `npm run verify`

## Resultado

Una sola casilla. La rellena el ejecutor.

- [x] Aprobado
- [ ] Devuelto al Orquestador

Motivo de la devolución:

-

## Notas de cierre

-

## ADR generado

- Ninguna.
