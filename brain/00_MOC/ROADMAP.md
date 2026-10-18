---
tipo: moc
rol: orquestador
estado: bloqueado
resumen: Épicas del portfolio. Un ticket no mueve una épica; lo hace el orquestador al abrirla o /destilar al cerrarla.
---

# Roadmap

Trazabilidad del grafo: cada ticket cerrado debe aparecer aquí con wikilink `[[T-NN-…]]`. Un nodo verde suelto = falta enlace en este mapa o en el [[CHANGELOG]].

## Completadas

- **E0 — Enjambre de contexto.** Bóveda, contratos, reglas por rol y comandos slash. Sin interfaz ni servidor.
  - Tickets: [[T-06-Superficies-y-Rutas|T-06]], [[T-07-README-e-INDEX|T-07]]

## En curso

- Ninguna. Una épica pasa aquí cuando existe al menos un ticket `en_progreso` que la nombra.

## Pendientes

- **E1 — Voz y casos.** Guía aplicada a los primeros Markdown de `Casos-Estudio/` (`onspot`, `onspot-ml`, `vivienda-barcelona`).
  - Prep: [[T-04-Guia-Copy-Narrativa|T-04]]. Falta ticket de casos.
- **E2 — Datos.** Parser de Markdown/MDX hacia `ProjectCaseStudy` y Server Action de contacto.
  - Parser: [[T-02-Parser-Obsidian-MDX|T-02]]. Falta Server Action y cablear UI al parser.
- **E3 — Layout.** Páginas y componentes con el sistema de diseño.
  - Base/tokens: [[T-01-Setup-Layout-Base|T-01]], [[T-03-Sistema-Diseno-P1|T-03]], [[T-05-Layout-Tokens-P1|T-05]]. Faltan `/casos/[slug]` y resto de superficies.
- **E4 — Motion.** Movimiento en `src/motion/`, según las reglas de animación.
- **E5 — Calidad.** Pasada de accesibilidad, SEO técnico, rendimiento y tipado estricto.

No abras una épica pendiente sin un ticket en `brain/00_Tareas/`.
