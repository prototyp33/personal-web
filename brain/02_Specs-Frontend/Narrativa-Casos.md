---
rol: design-system
estado: borrador
resumen: Caso Data/ML en <60 s, plantillas de métricas, variantes y wireframe P1+P3. Origen Grok fase 2.
---

# Narrativa de casos

Origen: `brain/99_Borradores/Design reseearch fase 2.md` (15 oct 2026). Continúa P1+P3 de [Investigacion-Portfolios](Investigacion-Portfolios.md). Guide bloqueada: [Guia-Estilo-Copy](../04_Contenido/Guia-Estilo-Copy.md). Ampliación editorial: [Guia-Estilo-Copy-propuesta](../04_Contenido/Guia-Estilo-Copy-propuesta.md). Tokens: [Sistema-Diseno-propuesta](Sistema-Diseno-propuesta.md).

## Evidencia (con límites)

- No hay estudio publicado de reclutadores de datos/ML midiendo portfolios. «<60 s» es **objetivo de diseño**, no hecho medido.
- Apoyos: Vasilev/Presentum (~55 s, diseñadores), Storyline 2026 (63 % decide en ≤3 min; pesa más la decisión que la calidad sola), NN/g (10 s críticos), Ladders (currículos, 7,4 s).

## Consecuencias defendibles

1. Problema + resultado en la primera pantalla (10 s).
2. Convence el resultado y la decisión; la técnica justifica después.
3. Nada esencial depende de tocar una figura.
4. El caso funciona en móvil sin perder el TL;DR.

## Orden dominante

**Resultado/tesis → contexto de negocio → qué se midió y contra qué → cómo (arquitectura + alternativas) → resultados con baseline → límites → qué sigue.**

## Presupuesto de tiempo (objetivo)

| Ventana | Debe ocurrir |
| --- | --- |
| 0–10 s | Problema, para quién, resultado (titular + métricas) |
| 10–30 s | Qué hice yo + seriedad del resultado (TL;DR, figura, baseline) |
| 30–60 s | Decisión clave y trade-off (decisiones + arquitectura miniatura) |
| 2–10 min | Datos, método, evaluación, límites, enlaces |

## Above the fold

**Obligatorio:** tipo y rol, titular-resultado, TL;DR de 4 líneas, tira de métricas.  
**Deseable en desktop:** borde superior de la figura-resumen.  
**Prohibido arriba:** logos de stack, vídeo autoplay, hero decorativo que empuje el TL;DR.

| Pieza | Contenido |
| --- | --- |
| Cabecera | Migas, tipo, año, rol, duración, equipo |
| Titular-resultado | Verbo + cifra de negocio |
| TL;DR | Problema · Lo que hice yo · Enfoque · Resultado |
| Tira de métricas | 3–4 cifras: negocio, sistema/adopción, modelo(s) con baseline |
| Figura-resumen | Estática: antes/después, mapa en 3 pasos o pipeline con escala |

## Métricas

Orden: **negocio → sistema → modelo**. Toda cifra lleva baseline, periodo/n y método. Estimación se declara. NDA → forma relativa.

**Plantillas**

- Negocio: `[Verbo] un X % [métrica] frente a [baseline], medido [periodo] en [ámbito] mediante [A/B \| antes/después \| holdout].`
- Sistema: `Latencia p95 A → B (−X %) …` / `Coste inferencia €A → €B por 1k predicciones.`
- Modelo: `[Métrica] = V en N casos; baseline = B; azar/ingenua = R.`
- Geo: cobertura A→B con criterio de calidad; error por celda H3 rX.
- NDA: mejora significativa comparable a [referencia interna]; absolutos confidenciales.
- Consultoría: en N semanas, de A a B; decisión desbloqueada.

## Variantes por tipo

| | ML predictivo | Geoespacial | Consultoría IA |
| --- | --- | --- | --- |
| Figura-resumen | Antes/después o coste por umbral | 3 mapas: puntos → celdas → coropleta | Línea temporal con hitos |
| Interactiva | Slider umbral → precisión/recall → € | Resolución H3 o capa antes/después | Taxonomía de errores con conteos |
| Decisión típica | Simple vs complejo; calibración | Grid vs polígonos admin | Qué no construir; medir antes |

## Lectura profunda

Contexto → éxito/restricciones → datos → arquitectura → 2–3 decisiones → figura interactiva (estático legible) → resultados → límites → aprendizajes → créditos → CTA.

## Wireframe (retícula P1)

- Lectura ~680 px; metadatos en mono a la izquierda; figuras más anchas.
- Barra fina con regla 1 px; cabecera de caso + titular + TL;DR + tira en el primer viewport.
- Cifras del wireframe original son **marcadores**, no datos de Adrian.

## Anti-patrones

Caso sin cifra; modelo sin baseline; mapa sin número; depender de hover/slider; >3 casos flojos; ocultar límites; no declarar autoría; stack logos above the fold; vídeo autoplay.
