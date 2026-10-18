---
id: T-05
titulo: "Layout con tokens P1"
rol_asignado: ui-layout
estado: completado
aislamiento: serie
dependencias:
  - T-03
contexto_lectura:
  - "brain/02_Specs-Frontend/Sistema-Diseno.md"
  - "src/types/contracts.ts"
  - "src/mocks/portfolio.mock.ts"
primer_archivo: "src/app/globals.css"
archivos_permitidos:
  - "src/app/layout.tsx"
  - "src/app/page.tsx"
  - "src/app/globals.css"
  - "src/components/layout/**"
archivos_prohibidos:
  - "src/lib/**"
  - "src/motion/**"
  - "src/actions/**"
  - "src/types/contracts.ts"
  - "src/mocks/**"
  - "brain/**"
  - "package.json"
  - "package-lock.json"
  - "scripts/**"
  - ".cursor/**"
  - "eslint.config.mjs"
contratos:
  - "ProjectCaseStudy"
comando_verificacion: "npm run verify"
---

# T-05 — Layout con tokens P1

## Objetivo

La portada y el CSS global usan los tokens y la tipografía de `Sistema-Diseno.md` tras T-03 (papel P1). Los casos `featured` del mock siguen en columna, uno por fila. Sin fichas nuevas ni motion.

Avanza E3 y no la cierra.

Fuera de alcance:

- Redefinir tokens en la bóveda.
- Parser, formulario, motion, páginas de caso.
- Instalar fuentes de pago; usar las disponibles vía `next/font` o equivalente ya permitido por el stack.

## Criterio de aceptación

- [x] `globals.css` (o el mecanismo actual de tokens) refleja canvas, ink, muted, line, accent y danger de `Sistema-Diseno.md`.
- [x] Titulares y cuerpo usan las familias normativas del sistema (o el sustituto documentado en Notas de cierre si `next/font` no ofrece Inter Display / Newsreader).
- [x] La portada sigue listando `featured` del mock, uno por fila, sobre fondo papel; contraste de texto ≥ 4.5:1 sobre el canvas.
- [x] No reintroduce bento ni la paleta cobre/oscuro anterior.
- [x] `npm run verify` termina en cero.

## Archivos permitidos

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- `src/components/layout/**`

## Archivos prohibidos

- `src/lib/**`
- `src/motion/**`
- `src/actions/**`
- `src/types/contracts.ts`
- `src/mocks/**`
- `brain/**`
- `package.json`
- `package-lock.json`
- `scripts/**`
- `.cursor/**`
- `eslint.config.mjs`

## Contratos afectados

- `ProjectCaseStudy` — solo lectura. Si el tipo no alcanza, el resultado es Devuelto al Orquestador.

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

- Portada y tokens P1 en CSS; Inter Display sustituido por Inter vía `next/font` (Newsreader + JetBrains Mono sí).

## ADR generado

`Ninguna.` salvo un cambio estructural: librería o dependencia relevante; patrón de estado, datos o autenticación; contrato público; carpetas o límite de módulo; decisión de no hacer algo, y por qué.

- Ninguna.
