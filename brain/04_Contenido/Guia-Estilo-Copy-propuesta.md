---
rol: orquestador
estado: borrador
resumen: Absorbida en lo aplicable por ADR-015. T-04 actualiza la guía; sin ampliar el contrato.
---

# Guía de estilo · propuesta

**ADR-015:** el contrato sigue en tres bloques. T-04 mete la narrativa en [Guia-Estilo-Copy.md](Guia-Estilo-Copy.md). TL;DR tipado y figura interactiva siguen fuera.

## Tensión con lo bloqueado

La guía actual exige solo tres bloques para el parser:

```markdown
## Problema
## Arquitectura
## Métricas de Impacto
```

La investigación pide un **titular-resultado**, un **TL;DR de cuatro líneas** y secciones posteriores (datos, trade-offs, límites, autoría) que hoy no caben en el contrato `ProjectCaseStudy` sin ADR + cambio de `contracts.ts`.

## Qué se puede adoptar sin tocar el parser

- Titular del caso = verbo + cifra de negocio (sigue siendo `title` / `resumen`).
- En **Problema**: quién, coste, por qué ahora + «lo que hice yo».
- En **Arquitectura**: pipeline, volúmenes, 2–3 decisiones «elegí X frente a Y porque Z».
- En **Métricas de Impacto**: negocio primero, luego sistema, luego modelo con baseline; una proyección no se escribe como resultado (ya está en la guía).

## Qué exige contrato / ADR

| Pieza | Motivo |
| --- | --- |
| TL;DR estructurado (4 campos) | Hoy no hay claves dedicadas |
| Tira de métricas tipadas (negocio / sistema / modelo) | El mock puede anticiparlo; el parser no |
| Secciones Límites, Aprendizajes, Créditos | Fuera del esquema de tres bloques |
| Figura interactiva + fallback estático | Contenido MDX / componente; ticket aparte |

## Plantilla de métrica (copy)

Reglas: baseline + periodo/n + método; estimación declarada; NDA en relativo.

- Negocio: `[Verbo] un X % [métrica] frente a [baseline], medido [periodo] en [ámbito] mediante [método].`
- Sistema: `Latencia p95 / coste / adopción: A → B (−X %).`
- Modelo: `[Métrica] = V (N casos); baseline = B; azar = R.`
- Geo: cobertura o error por celda con criterio de calidad.
- Consultoría: `En N semanas, de A a B; decisión desbloqueada: …`

Detalle y variantes: [Narrativa-Casos](../02_Specs-Frontend/Narrativa-Casos.md).

## Variantes por tipo

- Predictivo: coste de error en € o tiempo junto al umbral.
- Geoespacial: secuencia puntos → celdas → coropleta; nunca mapa sin número.
- Consultoría IA: cliente nombrable si se puede; taxonomía de errores con conteos.

## Siguiente paso

Si se adopta la narrativa completa: ADR + ticket de contrato/mock, luego ticket `copywriter` que actualice la guía bloqueada y los casos.
