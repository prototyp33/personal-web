# Informe de estado — Portfolio personal

| Campo | Valor |
| --- | --- |
| Fecha | 2026-10-18 |
| Rama | `main` (única) |
| Remote | Ninguno configurado |
| Commits | 10 |
| `npm run verify` | Pasa (typecheck + eslint estricto) |
| Árbol de trabajo | Sucio (entregables T-06/T-07 sin commit) |
| Versión package | `0.0.0` |

Este documento sirve como contexto para otros modelos de IA y como briefing para stakeholders. La fuente normativa del enjambre sigue siendo `brain/`; este informe no sustituye ADR ni tickets.

---

## 1. Resumen ejecutivo

El proyecto es un **portfolio personal** en Next.js con contenido editorial en una bóveda Obsidian (`brain/`) y un sistema de trabajo multi-agente («enjambre») basado en tickets atómicos.

**Madurez:** fundación sólida (proceso, contratos, diseño, parser, portada mínima). **Producto público incompleto:** no hay casos en Markdown, no hay página de detalle, no hay contacto funcional, no hay motion ni pasada de calidad, no hay deploy ni remote.

| Dimensión | Estado |
| --- | --- |
| Organización / proceso (E0) | Completo |
| Contenido editorial (E1) | Guía lista; carpeta de casos vacía |
| Datos / backend (E2) | Parser listo; UI aún en mock; sin Server Action |
| Layout / UI (E3) | Portada + tokens P1; rutas previstas sin implementar |
| Motion (E4) | Spec bloqueada; sin código |
| Calidad (E5) | Checklist bloqueado; sin auditoría de épica |

**Veredicto para stakeholders:** el equipo puede construir con reglas claras y stack fijado; el sitio todavía no es un portfolio publicable.

---

## 2. Qué es el proyecto

### Propósito
Sitio personal que muestra oficio (datos / IA / producto), casos de estudio y un canal de contacto. El contenido publicable vive en Markdown dentro de `brain/04_Contenido/Casos-Estudio/`.

### Modelo operativo («enjambre»)
- Contexto durable en `brain/` (mapa: `brain/00_MOC/INDEX.md`).
- Trabajo solo mediante tickets `brain/00_Tareas/T-*.md` (plantilla fija).
- Roles con reglas en `.cursor/rules/` y comandos slash en `.cursor/commands/` (`/orquestar`, `/ejecutar-ticket`, `/auditar`, `/destilar`, `/crear-agente`, `/ingerir`).
- Scope lock automatizado: `npm run scope -- <ticket>` compara el diff con `archivos_permitidos`.
- Orquestador: único que crea tickets y edita `src/types/contracts.ts` + `src/mocks/portfolio.mock.ts`.
- Ejecutores: no planifican el siguiente ticket; máximo dos intentos de `verify`.

### Fuera de alcance (documentado)
RAG, MCP, embeddings y Grok **no** se implementan aquí; van a un repo independiente `ai-knowledge-repo` (`brain/01_Arquitectura/Decision-Knowledge-Repo-Independiente.md`). ADR-003 (Markdown sin CMS/DB) no cambia.

---

## 3. Roadmap de épicas

Fuente: `brain/00_MOC/ROADMAP.md` (estado `bloqueado`).

| Épica | Nombre | Estado roadmap | Realidad observada |
| --- | --- | --- | --- |
| E0 | Enjambre de contexto | Completada | Cumplido |
| E1 | Voz y casos | Pendiente | Guía + narrativa absorbidas (T-04/ADR-015); **0 archivos** en `Casos-Estudio/` |
| E2 | Datos | Pendiente | Parser `getCaseStudies` (T-02) hecho; portada **sigue importando el mock**; sin Server Action de contacto |
| E3 | Layout | Pendiente | Portada base (T-01) + tokens P1 (T-05); sin `/casos/[slug]` |
| E4 | Motion | Pendiente | `Reglas-Motion.md` bloqueada; no existe `src/motion/` |
| E5 | Calidad | Pendiente | Checklist QA bloqueado; sin `/auditar` de épica |

El roadmap marca «En curso: Ninguna» porque no hay ticket `en_progreso`. Aun así hay avance parcial en E1–E3 vía tickets cerrados.

---

## 4. Inventario de tickets

Todos los tickets existentes están en `estado: completado`. No hay `pendiente`, `en_progreso`, `devuelto` ni `bloqueado` en tickets.

| ID | Título | Rol | Commit | Notas |
| --- | --- | --- | --- | --- |
| T-01 | Layout base de la portada | ui-layout | Sí | Primera UI |
| T-02 | Parser local Markdown/MDX | backend | Sí | `src/lib/content/get-case-studies.ts` |
| T-03 | Sistema de diseño P1 papel | design-system | Sí | ADR-014 |
| T-04 | Guía de copy con narrativa | copywriter | Sí | ADR-015 |
| T-05 | Layout con tokens P1 | ui-layout | Sí | Inter Display → Inter vía `next/font` |
| T-06 | Superficies y rutas previstas | orquestador | **No** | Archivos untracked / modificados |
| T-07 | README e INDEX | orquestador | **No** | README untracked; INDEX modificado |

### Working tree actual (relevante)

```
 M brain/00_MOC/INDEX.md
 M brain/01_Arquitectura/CHANGELOG.md
?? README.md
?? brain/00_Tareas/T-06-Superficies-y-Rutas.md
?? brain/00_Tareas/T-07-README-e-INDEX.md
?? brain/01_Arquitectura/Decision-Knowledge-Repo-Independiente.md
?? brain/01_Arquitectura/Superficies-y-Rutas.md
```

**Acción recomendada:** destilar/commitear T-06 y T-07 antes de abrir trabajo nuevo en serie.

---

## 5. Stack y calidad técnica

Versiones fijadas sin rangos (ADR-006 / `package.json`):

| Paquete | Versión |
| --- | --- |
| next | 16.4.1 |
| react / react-dom | 19.3.1 |
| typescript | 6.0.3 |
| tailwindcss (+ `@tailwindcss/postcss`) | 4.3.3 |
| framer-motion | 14.3.0 |
| lucide-react | 1.57.0 |
| gray-matter | 4.0.3 |

- Node: `>=20.9.0` (`.nvmrc` presente).
- Scripts: `verify`, `typecheck`, `lint:strict`, `scope`.
- **No** hay scripts `dev` / `build` / `start` en `package.json` (aunque existe artefactos `.next/` → se ha construido/corrido en algún momento).
- TypeScript `strict`; ESLint con `eslint-config-next` (Next 16 ya no trae `next lint`).
- `npm run verify`: **OK** en la fecha del informe.

### Tamaño aproximado del código de producto

| Ruta | LOC (aprox.) |
| --- | --- |
| `src/lib/content/get-case-studies.ts` | 291 |
| `src/mocks/portfolio.mock.ts` | 113 |
| `src/types/contracts.ts` | 111 |
| `src/app/globals.css` | 61 |
| `src/app/layout.tsx` | 45 |
| `src/app/page.tsx` | 29 |
| Header / Footer | 7 + 7 |
| **Total `src/`** | **~664** |

Carpetas previstas aún vacías o inexistentes: `src/motion/`, `src/actions/`, páginas bajo `src/app/casos/`.

---

## 6. Arquitectura de producto

### Contratos (`src/types/contracts.ts`)
Única fuente de tipos (ADR-002):

- `ProjectCaseStudy` — caso con `problem` / `approach` / `outcome` (mapeo editorial Problema / Arquitectura / Métricas de Impacto).
- `ExperienceItem`, `SkillCategory` — tipados; sin páginas aún.
- `ContactSubmission` + `CONTACT_LIMITS` — para futura Server Action.
- ADR-015: **no** ampliar el contrato del caso en esta fase (sin TL;DR tipado ni métricas estructuradas extra).

### Origen de datos

| Fase | Origen |
| --- | --- |
| Hoy (UI) | `src/mocks/portfolio.mock.ts` |
| Tras cablear E2 | `getCaseStudies()` leyendo `brain/04_Contenido/Casos-Estudio/` |

Regla: un solo origen a la vez; no mantener mock y parser en paralelo en la misma superficie.

### Parser (`getCaseStudies`)
- Lee `.md` / `.mdx` con `gray-matter`.
- Exige frontmatter y tres secciones de cuerpo.
- Rechaza MDX con imports/JSX de componentes.
- Carpeta destino hoy: solo `.gitkeep` → lista vacía si se invocara.

### Superficies y rutas (`Superficies-y-Rutas.md`)

| Ruta | Estado |
| --- | --- |
| `/` | Existe (portada mínima) |
| `/casos/[slug]` | Prevista, sin página |
| `/#contacto` | Prevista (ancla), sin formulario |

### Dirección visual (ADR-014)
- Base **P1 · Cuaderno de laboratorio**: papel `#F4F1EA`, tinta, acento azul `#2F5BFF`.
- Tipografía: Inter / Newsreader / JetBrains Mono (spec menciona Inter Display; T-05 usó Inter por disponibilidad en `next/font`).
- Ensayos **P3** para casos estrella (futuro).
- **P2 Consola** descartada.

---

## 7. Contenido y voz

- Guía normativa: `brain/04_Contenido/Guia-Estilo-Copy.md` (`bloqueado`).
- Narrativa de casos: `brain/02_Specs-Frontend/Narrativa-Casos.md` (borrador de investigación; absorbida en lo aplicable).
- Mock seed: OnSpot, OnSpot ML (featured), Vivienda Barcelona; experiencia Grifols, etc.
- **Ningún caso editorial publicado** en Markdown.

---

## 8. Decisiones ADR (resumen)

Registro completo: `brain/01_Arquitectura/Registro-ADR.md` (15 entradas aceptadas).

| Rango | Tema |
| --- | --- |
| ADR-001–005 | Bóveda, contratos, MD sin CMS, specs bloqueadas, trabajo por tickets |
| ADR-006–008 | Scope, mock gemelo, stack fijado, separación orquestador/ejecutor, verify×2, QA de épica |
| ADR-009–013 | `/ingerir`, plantilla de ticket, ADR ≠ bitácora, scope en diff, serie/worktree |
| ADR-014 | Dirección visual P1 + P3 |
| ADR-015 | Tres bloques de caso; no ampliar contrato |

Changelog (bitácora menor): `brain/01_Arquitectura/CHANGELOG.md`.

---

## 9. Estructura del repositorio

```text
.
├── README.md                 # Entrada humana (untracked a fecha del informe)
├── INFORME-ESTADO.md         # Este documento
├── package.json              # Stack fijado, verify/scope
├── brain/                    # Contexto durable + contenido editorial
│   ├── 00_MOC/               # INDEX, ROADMAP
│   ├── 00_Tareas/            # Tickets T-01…T-07 + plantilla
│   ├── 01_Arquitectura/      # ADR, diseño sistema, superficies, changelog
│   ├── 02_Specs-Frontend/    # Diseño, motion, investigación
│   ├── 03_Specs-Backend/     # Esquema de datos
│   ├── 04_Contenido/         # Guía copy + Casos-Estudio/ (vacío)
│   ├── 05_Calidad/           # Checklist QA/SEO
│   └── 06_Especialistas/     # Spec design-system
├── src/
│   ├── app/                  # layout, page, globals.css
│   ├── components/layout/    # SiteHeader, SiteFooter
│   ├── lib/content/          # Parser
│   ├── mocks/                # Semilla de contrato
│   └── types/                # contracts.ts
├── scripts/scope-check.mjs
└── .cursor/rules|commands/   # Enjambre
```

Ignorados relevantes: `brain/99_Borradores/`, `brain/.obsidian/`, carpeta anidada `Personal website/` (vault Obsidian local).

---

## 10. Riesgos y deudas

1. **Git dirty post T-06/T-07** — entregables «completados» no versionados; rompe la regla «un ticket, un commit» hasta destilar.
2. **Sin remote** — sin backup/colaboración/CI.
3. **Parser vs UI** — capacidad backend sin cablear; riesgo de divergencia mock ↔ Markdown.
4. **Casos vacíos** — E1 es el cuello de botella de valor percibido.
5. **Tipografía** — desajuste menor Inter Display (spec) vs Inter (implementación).
6. **Scripts de app** — falta documentar/añadir `dev`/`build` en `package.json` si se quiere onboarding estándar (requeriría ticket de orquestador: toca `package.json`).
7. **Artefacto Obsidian anidado** — carpeta `Personal website/` en la raíz (gitignored); ruido local.

---

## 11. Próximos pasos recomendados (orden)

Para humanos / orquestador (`[0] Orquestador` + `/orquestar`):

1. **Cerrar el ciclo git de T-06/T-07** (commit + árbol limpio).
2. **Abrir E1** — tickets copywriter para redactar casos reales en `Casos-Estudio/`.
3. **Completar E2** — Server Action de contacto; ticket UI para sustituir mock por `getCaseStudies` cuando haya contenido.
4. **E3** — `/casos/[slug]`, ancla `#contacto`, pulido de portada.
5. **E4** — wrappers en `src/motion/` según `Reglas-Motion.md`.
6. **E5** — `/auditar` + SEO técnico del checklist.
7. **Infra** — remote, CI `verify`, deploy (p. ej. Vercel) cuando el producto sea enseñable.

---

## 12. Instrucciones rápidas para otro modelo de IA

```text
1. Responder en español.
2. Antes de actuar: leer brain/00_MOC/INDEX.md y brain/01_Arquitectura/Registro-ADR.md.
3. Sin ticket T-*.md del orquestador: no implementar producto; pedir /orquestar.
4. No leer brain/99_Borradores/** ni brain/.obsidian/**.
5. Solo editar archivos_permitidos del ticket; npm run scope debe pasar.
6. contracts.ts y portfolio.mock.ts: solo orquestador.
7. Una ADR aceptada no se deshace desde un ticket de implementación.
8. verify falla 2 veces → devolver ticket; no reset --hard.
9. Roadmap actual: E0 hecha; E1–E5 pendientes (avance parcial en diseño/parser/portada).
10. Este INFORME-ESTADO.md es snapshot; si choca con un ADR o ticket, manda el ADR/ticket.
```

---

## 13. Historial git reciente (contexto)

```
1bc7477 fix(T-02): marcar criterios y estado completado
13654f6 docs(changelog): anotar cierre de T-02
b32b191 feat(T-02): aceptar el parser local de casos
09b793b docs(changelog): anotar cierre de T-05
8af5bf4 feat(T-05): aplicar tokens P1 en la portada
2f6f69b docs(changelog): anotar cierre de T-04
5bab494 feat(T-04): narrativa de casos dentro de los tres bloques
e1469cf feat(T-03): adoptar sistema de diseño P1 papel
5439b15 chore: ignorar borradores y bóveda Obsidian anidada
02a0906 chore: baseline del portfolio
```

---

*Fin del informe. Generado por inspección local del repositorio el 2026-10-18.*
