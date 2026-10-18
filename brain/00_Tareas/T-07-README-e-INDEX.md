---
id: T-07
titulo: "README e índice de la bóveda"
rol_asignado: orquestador
estado: completado
aislamiento: serie
dependencias:
  - T-06
primer_archivo: "README.md"
contexto_lectura:
  - "brain/00_MOC/INDEX.md"
  - "brain/00_MOC/ROADMAP.md"
  - "brain/01_Arquitectura/Diseno-Sistema.md"
archivos_permitidos:
  - "README.md"
  - "brain/00_MOC/INDEX.md"
archivos_prohibidos:
  - "src/**"
  - "brain/00_Tareas/**"
  - "brain/01_Arquitectura/**"
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

# T-07 — README e índice de la bóveda

## Objetivo

Existe un `README.md` en la raíz del repo (español, corto) y `brain/00_MOC/INDEX.md` enlaza Superficies-y-Rutas y aclara que la voz normativa es la guía de copy, no las notas de investigación.

Documentación meta de la opción 1. No escribe casos ni CSS.

Fuera de alcance:

- `Casos-Estudio/`, `src/**`, ADR nuevas.
- Crear `Superficies-y-Rutas.md` (ya T-06).

## Criterio de aceptación

- [x] `README.md` describe el portfolio, Node `>=20.9.0`, `npm run verify`, que el contexto durable es `brain/` y el trabajo entra por tickets; enlaza INDEX y roadmap.
- [x] `INDEX.md` enlaza Superficies-y-Rutas y el README.
- [x] En «Investigación ingerida», INDEX aclara que tras T-04 la voz normativa es la guía de copy; Narrativa y propuestas son historial de investigación.
- [x] `npm run verify` termina en cero.

## Archivos permitidos

- `README.md`
- `brain/00_MOC/INDEX.md`

## Archivos prohibidos

- `src/**`
- `brain/00_Tareas/**`
- `brain/01_Arquitectura/**`
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

- README de repo e INDEX con Superficies-y-Rutas; investigación marcada como historial.


## ADR generado

`Ninguna.` salvo un cambio estructural: librería o dependencia relevante; patrón de estado, datos o autenticación; contrato público; carpetas o límite de módulo; decisión de no hacer algo, y por qué.

- Ninguna.
