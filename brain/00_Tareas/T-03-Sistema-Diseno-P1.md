---
id: T-03
titulo: "Sistema de diseño P1 papel"
rol_asignado: design-system
estado: completado
aislamiento: serie
dependencias: []
contexto_lectura:
  - "brain/02_Specs-Frontend/Sistema-Diseno.md"
  - "brain/02_Specs-Frontend/Sistema-Diseno-propuesta.md"
  - "brain/02_Specs-Frontend/Investigacion-Portfolios.md"
  - "brain/01_Arquitectura/Registro-ADR.md"
primer_archivo: "brain/02_Specs-Frontend/Sistema-Diseno.md"
archivos_permitidos:
  - "brain/02_Specs-Frontend/Sistema-Diseno.md"
  - "brain/02_Specs-Frontend/Sistema-Diseno-propuesta.md"
archivos_prohibidos:
  - "src/**"
  - "brain/00_Tareas/**"
  - "brain/01_Arquitectura/**"
  - "brain/03_Specs-Backend/**"
  - "brain/04_Contenido/**"
  - "package.json"
  - "package-lock.json"
  - "scripts/**"
  - ".cursor/**"
  - "eslint.config.mjs"
contratos: []
comando_verificacion: "npm run verify"
---

# T-03 — Sistema de diseño P1 papel

## Objetivo

`Sistema-Diseno.md` pasa a la dirección aceptada en ADR-014: base P1 (papel, tres voces tipográficas, columna de lectura) con hueco para ensayos P3. Queda otra vez `estado: bloqueado`. La propuesta se marca como absorbida.

Avanza la base de E3. No toca CSS ni componentes.

Fuera de alcance:

- `Reglas-Motion.md` (el spring no cambia).
- `src/**`, fuentes en `layout.tsx`, casos Markdown.
- Ampliar `ProjectCaseStudy` (ADR-015).

## Criterio de aceptación

- [x] `Sistema-Diseno.md` documenta tokens P1: canvas `#F4F1EA`, ink `#161513`, muted `#6B6760`, line `#E2DDD2`, accent `#2F5BFF`, danger `#C2412D`.
- [x] Tipografía normativa: Inter Display (titulares), Inter (cuerpo), Newsreader Italic (citas/acentos), JetBrains Mono (meta y cifras). Escala de 2–3 tallas.
- [x] Layout: columna de lectura (~680 px / `--measure`), portada tipo laboratorio (nombre, frase, casos featured), caso con titular-resultado y meta en mono. Sin bento.
- [x] El spring por defecto sigue siendo `{ type: "spring", stiffness: 300, damping: 30 }` con `prefers-reduced-motion`.
- [x] Frontmatter: `rol: design-system`, `estado: bloqueado`, resumen actualizado.
- [x] `Sistema-Diseno-propuesta.md` indica que ADR-014 la absorbió y ya no manda.
- [x] `npm run verify` termina en cero.

## Archivos permitidos

- `brain/02_Specs-Frontend/Sistema-Diseno.md`
- `brain/02_Specs-Frontend/Sistema-Diseno-propuesta.md`

## Archivos prohibidos

- `src/**`
- `brain/00_Tareas/**`
- `brain/01_Arquitectura/**`
- `brain/03_Specs-Backend/**`
- `brain/04_Contenido/**`
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

- [x] Aprobado
- [ ] Devuelto al Orquestador

Motivo de la devolución:

-

## Notas de cierre

Una o dos líneas de lo que quedó hecho. No es una ADR. `/destilar` la copia al changelog.

- `Sistema-Diseno.md` pasa a P1 papel (ADR-014); la propuesta queda como historial y ya no manda.

## ADR generado

`Ninguna.` salvo un cambio estructural: librería o dependencia relevante; patrón de estado, datos o autenticación; contrato público; carpetas o límite de módulo; decisión de no hacer algo, y por qué.

- Ninguna.
