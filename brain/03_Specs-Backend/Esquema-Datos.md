---
rol: backend
estado: bloqueado
resumen: Modelos publicados, lectura local con gray-matter y contrato de la Server Action de contacto.
---

# Esquema de datos

Los tipos normativos están en `src/types/contracts.ts`. Esta nota fija el origen de cada modelo. Si un campo cambia, primero cambia el contrato en un ticket del orquestador.

## Origen de cada modelo

| Tipo | Origen en esta fase |
| --- | --- |
| `ProjectCaseStudy` | `brain/04_Contenido/Casos-Estudio/<slug>.md` o `.mdx` |
| `ExperienceItem` | Reservado. No crear el archivo hasta un ticket |
| `SkillCategory` | Reservado. Misma regla que la experiencia |
| `ContactSubmission` | Cuerpo del formulario hacia la Server Action. No se guarda |

## CMS en Markdown

El lector es `gray-matter` 4.0.3, en `src/lib`, sobre archivos de `brain/04_Contenido`. No se añade otro parser. El nombre del archivo, sin extensión, es el `slug`. Solo minúsculas, números y guiones. La redacción por defecto es `.md`. `.mdx` solo entra si el ticket lo lista en `archivos_permitidos`. El cuerpo MDX no se ejecuta como componente en esta fase.

Frente YAML:

```yaml
titulo: string          # -> title
resumen: string         # -> summary
rol: string             # -> role
anio: number            # -> year
etiquetas: string[]     # -> tags
imagen: string          # -> coverImage, opcional
destacado: boolean      # -> featured
orden: number           # -> order
enlaces:                # -> links, opcional
  sitio: string         # -> links.live
  repo: string          # -> links.repo
```

Cuerpo, con estos encabezados exactos y en este orden:

```markdown
## Problema
## Arquitectura
## Métricas de Impacto
```

Esas secciones rellenan `problem`, `approach` y `outcome`. Los encabezados son los de la guía de copy. No se aceptan los nombres antiguos «Enfoque» y «Resultado».

### Parseo

- UTF-8. Frente YAML obligatorio. Claves desconocidas se ignoran.
- Falta de `titulo`, `resumen`, `rol`, `anio`, `orden` o de una sección: error de build.
- `destacado` ausente vale `false`. `etiquetas` ausente vale `[]`.
- `anio` es un entero de cuatro cifras. El listado sale por `orden` ascendente y, a igualdad, por `slug`.
- El parser devuelve `ProjectCaseStudy`. Ninguna página lee el archivo por su cuenta.
- En `.mdx` no hay componentes permitidos en esta fase. Un import o un JSX desconocido falla el build. Ampliar la lista exige un ADR y un ticket.

## Server Actions

Acción prevista: `submitContact(input: ContactSubmission)`.

Los límites salen de `CONTACT_LIMITS`:

- `name`: entre `nameMin` y `nameMax`, sin espacios extremos.
- `email`: una dirección con forma válida.
- `message`: entre `messageMin` y `messageMax`.
- `company`: si trae texto, la acción responde éxito y no procesa el mensaje.

Resultado:

```ts
{ ok: true } | { ok: false; field?: "name" | "email" | "message"; message: string }
```

El `message` de error está en español y nombra el campo. No hay base de datos. La acción no importa componentes, CSS ni tokens.
