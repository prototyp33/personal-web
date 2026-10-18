---
id: T-06
titulo: "Superficies y rutas previstas"
rol_asignado: orquestador
estado: completado
aislamiento: serie
dependencias: []
contexto_lectura:
  - "brain/01_Arquitectura/Diseno-Sistema.md"
  - "brain/03_Specs-Backend/Esquema-Datos.md"
  - "brain/05_Calidad/Checklist-QA-SEO.md"
primer_archivo: "brain/01_Arquitectura/Superficies-y-Rutas.md"
archivos_permitidos:
  - "brain/01_Arquitectura/Superficies-y-Rutas.md"
archivos_prohibidos:
  - "src/**"
  - "brain/00_Tareas/**"
  - "brain/02_Specs-Frontend/**"
  - "brain/03_Specs-Backend/**"
  - "brain/04_Contenido/**"
  - "brain/05_Calidad/**"
  - "package.json"
  - "package-lock.json"
  - "scripts/**"
  - ".cursor/**"
  - "eslint.config.mjs"
contratos: []
comando_verificacion: "npm run verify"
---

# T-06 — Superficies y rutas previstas

## Objetivo

Existe `brain/01_Arquitectura/Superficies-y-Rutas.md`, bloqueada, que fija las rutas públicas previstas, el origen de datos (mock hoy / parser al cerrar E2) y lo que queda fuera hasta ticket (motion, OG, sitemap).

Avanza la base documental de E3. No implementa rutas ni componentes.

Fuera de alcance:

- `src/**`, CSS, motion, casos Markdown.
- Enviar correo real (sigue pendiente de ADR).
- Actualizar `INDEX.md` (T-07).

## Criterio de aceptación

- [x] La nota documenta `/`, `/casos/[slug]` y el contacto como ancla en portada.
- [x] Distingue mock actual frente a parser de `Casos-Estudio/` cuando E2 cierre.
- [x] Remite OG/sitemap/robots al checklist QA y motion a `Reglas-Motion.md`; no los implementa.
- [x] Frontmatter: `rol: orquestador`, `estado: bloqueado`, resumen actualizado.
- [x] `npm run verify` termina en cero.

## Archivos permitidos

- `brain/01_Arquitectura/Superficies-y-Rutas.md`

## Archivos prohibidos

- `src/**`
- `brain/00_Tareas/**`
- `brain/02_Specs-Frontend/**`
- `brain/03_Specs-Backend/**`
- `brain/04_Contenido/**`
- `brain/05_Calidad/**`
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

- Nota de superficies: `/`, `/casos/[slug]`, contacto en ancla; mock hoy y parser al cerrar E2.

## ADR generado

`Ninguna.` salvo un cambio estructural: librería o dependencia relevante; patrón de estado, datos o autenticación; contrato público; carpetas o límite de módulo; decisión de no hacer algo, y por qué.

- Ninguna.
