---
rol: copywriter
estado: bloqueado
resumen: Narrativa de caso en tres bloques del parser. Titular-resultado, métricas con baseline y autoría. ADR-015.
---

# Guía de estilo

## Quién habla

Perfil híbrido: ingeniería de datos e IA, producto y negocio. El sitio enseña cómo un análisis cambia una decisión de producto o de operación. No es un currículum de herramientas ni una landing de consultoría.

- Español, primera persona del singular.
- Presente para el oficio. Pasado para el caso.
- Una tecnología entra en la frase solo si cambió el coste, el plazo, el riesgo o la cifra.
- Prohibido: «apasionado», «innovador», «solución integral», «sinergia», «cutting-edge», «robusto» y «escalable» sin un número al lado.

## Caso de estudio

El parser exige exactamente estos tres encabezados, en este orden. Mapean a `problem`, `approach` y `outcome`. No se inventan encabezados nuevos (`## Límites`, `## TL;DR`, etc.): ese contenido va **dentro** de estos bloques (ADR-015).

```markdown
## Problema
## Arquitectura
## Métricas de Impacto
```

### Titular y resumen (frente YAML)

- `titulo`: **titular-resultado** — verbo + cifra de negocio (o el cambio observable más claro). No un nombre de producto solo.
- `resumen`: dos frases como máximo; no repite el título. Encaja problema → resultado en escaneo rápido.

### TL;DR narrativo (repartido en los tres bloques)

No hay campo TL;DR tipado. El lector debe poder reconstruir en la primera lectura:

| Pregunta | Dónde va |
| --- | --- |
| Problema (quién, coste, por qué ahora) | **Problema** |
| Lo que hice yo | **Problema** (al final) o arranque de **Arquitectura** |
| Enfoque y decisiones (X frente a Y porque Z) | **Arquitectura** |
| Resultado con baseline | **Métricas de Impacto** |

1. **Problema.** Quién lo sufría, qué decisión estaba atascada, qué restricción había y qué aporté yo.
2. **Arquitectura.** Qué se construyó, qué se descartó (2–3 trade-offs), volúmenes o restricciones si importan. La tecnología es etiqueta secundaria.
3. **Métricas de Impacto.** Orden: **negocio → sistema → modelo**. Toda cifra lleva baseline, periodo o n, y método. Si la cifra no existe, se dice el antes y el después sin inventarla. Una proyección no se escribe como resultado. Estimación se declara. Bajo NDA, forma relativa.

**Plantillas**

- Negocio: `[Verbo] un X % [métrica] frente a [baseline], medido [periodo] en [ámbito] mediante [método].`
- Sistema: `Latencia p95 / coste / adopción: A → B (−X %).`
- Modelo: `[Métrica] = V (N casos); baseline = B; azar = R.`

### Límites y autoría (sin encabezados nuevos)

Dentro de **Métricas de Impacto** (o al cierre de **Arquitectura** si encaja mejor): qué no está validado, qué falló, y qué fue mío frente al equipo. Sin esa declaración el caso no está listo.

## Portada y contacto

- La frase de portada dice el oficio y el tipo de problema.
- Etiquetas del formulario: «Nombre», «Correo», «Mensaje».
- El error nombra el campo y el límite.
