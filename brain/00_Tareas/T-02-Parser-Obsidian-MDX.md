---
id: T-02
titulo: "Parser local de casos Markdown/MDX"
rol_asignado: backend
estado: pendiente
aislamiento: serie
dependencias: []
primer_archivo: "src/lib/content/get-case-studies.ts"
contexto_lectura:
  - "brain/03_Specs-Backend/Esquema-Datos.md"
  - "src/types/contracts.ts"
archivos_permitidos:
  - "src/lib/content/**"
archivos_prohibidos:
  - "src/components/**"
  - "src/app/**"
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

# T-02 — Parser local de casos Markdown/MDX

## Objetivo

`src/lib/content/` exporta una función que lee `brain/04_Contenido/Casos-Estudio/` con `gray-matter` 4.0.3 y devuelve `ProjectCaseStudy[]`. Un caso inválido hace fallar esa lectura. La portada sigue importando el mock.

El trabajo de parseo ya puede existir en el árbol: este ticket se reabrió tras devolución por falta de `.git`. **Antes de ejecutarlo, el repo debe tener git** (`git init` y un commit base); sin diff, `npm run scope` no acepta la entrega (ADR-012).

Avanza E2 y no la cierra.

Fuera de alcance:

- La Server Action de contacto.
- Sustituir el mock de la portada.
- Escribir `.md` o `.mdx`. Este ticket solo autoriza a leerlos.
- Experiencia, habilidades y `submitContact`.
- Ampliar `ProjectCaseStudy` (ADR-015).

## Criterio de aceptación

- [ ] La función vive solo en `src/lib/content/` y devuelve `ProjectCaseStudy[]`.
- [ ] El lector es el `gray-matter` ya instalado. No se añade otro parser ni otra dependencia.
- [ ] El `slug` es el nombre del archivo, sin extensión. El frente YAML y los encabezados `## Problema`, `## Arquitectura` y `## Métricas de Impacto` se mapean como dice `Esquema-Datos.md` a `problem`, `approach` y `outcome`.
- [ ] Carpeta vacía o inexistente: devuelve `[]`.
- [ ] Falta `titulo`, `resumen`, `rol`, `anio`, `orden` o una de las tres secciones: la función lanza un error con el `slug`.
- [ ] `destacado` ausente vale `false`. `etiquetas` ausente vale `[]`. Claves desconocidas se ignoran.
- [ ] El listado sale por `order` ascendente y, a igualdad, por `slug`.
- [ ] Un `.mdx` con import o JSX lanza error. No hay componentes permitidos.
- [ ] `src/app/page.tsx` no existe o, si T-01 ya lo creó, sigue importando el mock.
- [ ] `npm run scope -- brain/00_Tareas/T-02-Parser-Obsidian-MDX.md` termina en cero.
- [ ] `npm run verify` termina en cero.

## Archivos permitidos

- `src/lib/content/**`

## Archivos prohibidos

- `src/components/**`
- `src/app/**`
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

- Parser `getCaseStudies` aceptado con scope tras baseline git; la portada sigue en el mock.

## ADR generado

`Ninguna.` salvo un cambio estructural: librería o dependencia relevante; patrón de estado, datos o autenticación; contrato público; carpetas o límite de módulo; decisión de no hacer algo, y por qué.

- Ninguna.
