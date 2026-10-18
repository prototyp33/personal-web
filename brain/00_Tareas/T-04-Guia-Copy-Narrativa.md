---
id: T-04
titulo: "Guía de copy con narrativa de casos"
rol_asignado: copywriter
estado: completado
aislamiento: serie
dependencias: []
contexto_lectura:
  - "brain/04_Contenido/Guia-Estilo-Copy.md"
  - "brain/04_Contenido/Guia-Estilo-Copy-propuesta.md"
  - "brain/02_Specs-Frontend/Narrativa-Casos.md"
  - "brain/01_Arquitectura/Registro-ADR.md"
primer_archivo: "brain/04_Contenido/Guia-Estilo-Copy.md"
archivos_permitidos:
  - "brain/04_Contenido/Guia-Estilo-Copy.md"
  - "brain/04_Contenido/Guia-Estilo-Copy-propuesta.md"
archivos_prohibidos:
  - "src/**"
  - "brain/00_Tareas/**"
  - "brain/01_Arquitectura/**"
  - "brain/02_Specs-Frontend/**"
  - "brain/03_Specs-Backend/**"
  - "brain/04_Contenido/Casos-Estudio/**"
  - "package.json"
  - "package-lock.json"
  - "scripts/**"
  - ".cursor/**"
  - "eslint.config.mjs"
contratos: []
comando_verificacion: "npm run verify"
---

# T-04 — Guía de copy con narrativa de casos

## Objetivo

`Guia-Estilo-Copy.md` incorpora la voz y el orden de [Narrativa-Casos](../02_Specs-Frontend/Narrativa-Casos.md) **dentro** de los tres bloques del parser (ADR-015). Queda `estado: bloqueado`. La propuesta se marca como absorbida. No escribe casos todavía.

Avanza E1 sin cerrarla.

Fuera de alcance:

- Archivos en `Casos-Estudio/`.
- Cambiar `contracts.ts`, el mock o `Esquema-Datos.md`.
- Figuras interactivas o campos TL;DR tipados.

## Criterio de aceptación

- [x] Siguen siendo obligatorios y en este orden: `## Problema`, `## Arquitectura`, `## Métricas de Impacto`.
- [x] La guía exige titular-resultado (verbo + cifra de negocio) en `title` / portada del caso, y TL;DR narrativo repartido en esos tres bloques (problema + lo que hice yo; enfoque/decisiones; resultado con baseline).
- [x] Orden de métricas: negocio → sistema → modelo; plantillas de frase alineadas con la propuesta; proyección no se escribe como resultado.
- [x] Exige declarar límites/autoría dentro del copy permitido (sin inventar encabezados nuevos del parser).
- [x] Frontmatter: `rol: copywriter`, `estado: bloqueado`, resumen actualizado.
- [x] `Guia-Estilo-Copy-propuesta.md` indica que ADR-015 la absorbió en lo aplicable y ya no manda.
- [x] `npm run verify` termina en cero.

## Archivos permitidos

- `brain/04_Contenido/Guia-Estilo-Copy.md`
- `brain/04_Contenido/Guia-Estilo-Copy-propuesta.md`

## Archivos prohibidos

- `src/**`
- `brain/00_Tareas/**`
- `brain/01_Arquitectura/**`
- `brain/02_Specs-Frontend/**`
- `brain/03_Specs-Backend/**`
- `brain/04_Contenido/Casos-Estudio/**`
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

- Guía de copy con narrativa en tres bloques (ADR-015); la propuesta queda como historial.

## ADR generado

`Ninguna.` salvo un cambio estructural: librería o dependencia relevante; patrón de estado, datos o autenticación; contrato público; carpetas o límite de módulo; decisión de no hacer algo, y por qué.

- Ninguna.
