---
tipo: moc
rol: orquestador
estado: bloqueado
resumen: Bitácora de tickets cerrados; solo el orquestador escribe en /destilar.
---

# Changelog

Bitácora de tickets cerrados. No es un ADR. La escribe el orquestador en `/destilar`, una viñeta por ticket, a partir de `## Notas de cierre`. Los agentes no la leen al arrancar.

Cada viñeta de ticket lleva wikilink para el grafo de auditoría. Ver [[Manual-Operativo-Enjambre]].

- **E0.** El relevo único se sustituye por tickets. No hay aprendizaje de implementación: aún no hay código de producto.
- **[[T-01-Setup-Layout-Base|T-01]].** Layout base de la portada.
- **[[T-02-Parser-Obsidian-MDX|T-02]].** Parser `getCaseStudies` aceptado con scope tras baseline git; la portada sigue en el mock.
- **[[T-03-Sistema-Diseno-P1|T-03]].** `Sistema-Diseno.md` pasa a P1 papel (ADR-014); la propuesta queda jubilada en `99_Borradores/` y ya no manda.
- **[[T-04-Guia-Copy-Narrativa|T-04]].** Guía de copy con narrativa en tres bloques (ADR-015); la propuesta queda jubilada en `99_Borradores/`.
- **[[T-05-Layout-Tokens-P1|T-05]].** Portada y tokens P1 en CSS; Inter Display sustituido por Inter vía `next/font` (Newsreader + JetBrains Mono sí).
- **[[T-06-Superficies-y-Rutas|T-06]].** Nota de superficies: `/`, `/casos/[slug]`, contacto en ancla; mock hoy y parser al cerrar E2.
- **[[T-07-README-e-INDEX|T-07]].** README de repo e INDEX con Superficies-y-Rutas; investigación marcada como historial.
- **Ops.** Manual operativo del enjambre (Obsidian=`brain/`, Cursor=raíz, Node 22, ciclo de 6 pasos); README e INDEX enlazados.
- **Ops.** Propósito de `brain/`: contexto mínimo, máquina de estados, CMS headless (`Casos-Estudio` → `getCaseStudies`).
- **Ops.** Estructura limpia de la bóveda: manual → `06_Especialistas/`; investigación y `*-propuesta` absorbidas → `99_Borradores/`; ROADMAP con wikilinks a tickets.
- **Ops.** Frontmatter YAML: esquema A (enjambre) vs B (casos → parser español); plantilla de ticket con `tipo`/`epica`/`resumen`; sin hashtags sueltos.
- **Ops.** Grafo Obsidian calibrado como radar de auditoría (`brain/.obsidian/graph.json` local, fuera de git).
- **Ops.** Tres automatizaciones: `/destilar` exige `[[wikilinks]]`; `vault-check` en `npm run verify`; bookmarks nativos Obsidian (sin plugins).
