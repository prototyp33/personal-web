---
titulo: Unifiqué recepción y clasificación de facturas con estados auditables hasta A3 ECO
resumen: En Solfico las facturas llegaban por canales distintos y se clasificaban a mano antes del cierre. Diseñé un flujo de captura, reglas verificables, OCR y cola de excepciones para menos trabajo repetitivo y trazabilidad por documento.
rol: Diseño del flujo de automatización contable
anio: 2025
orden: 1
etiquetas:
  - automatización
  - OCR
  - contabilidad
  - A3 ECO
destacado: true
---

## Problema

En la operativa contable diaria de Solfico, las facturas llegaban por correo, documentos digitales y papel digitalizado, y había que revisarlas, clasificarlas y prepararlas para A3 ECO. Biloop cubría parte del OCR, pero la clasificación inicial, la asignación a centro o cliente y las excepciones seguían siendo manuales.

El cuello de botella no era solo abrir cada archivo: faltaba un flujo único y trazable. Cada factura podía quedar en estados distintos —recibida, digitalizada, pendiente de revisión, contabilizada o con incidencia— sin ver con claridad el volumen pendiente, los errores recurrentes ni la carga real antes del cierre mensual.

Los criterios repetitivos (abrir, identificar centro, decidir carpeta, mover a mano) generaban lentitud, clasificaciones inconsistentes y poca capacidad de auditar qué había pasado con cada documento. Propuse y diseñé el flujo de recepción, clasificación y preparación de facturas para atacar ese cuello de botella.

## Arquitectura

Diseñé un flujo en tres capas: captura automática, clasificación asistida y gestión de excepciones. La tecnología asume lo repetitivo; las personas conservan el control en casos ambiguos o de mayor riesgo.

El recorrido parte del correo o del documento recibido, extrae adjuntos y aplica reglas auditables para centro, proveedor, tipo de documento o referencia interna. Cuando hace falta, el OCR extrae campos; después el sistema clasifica, deposita en la ubicación correcta y registra el estado.

Prioricé reglas claras y verificables, OCR como apoyo y una cola humana de excepciones, en lugar de depender solo de IA. El objetivo era trazabilidad, control contable y adopción: el equipo debía poder explicar por qué un documento se clasificó de una forma y corregir fallos sin perder visibilidad.

Comparé Power Platform (natural si el entorno ya vive en Microsoft 365, Outlook y SharePoint) frente a n8n (más flexible para integraciones y orquestación). La recomendación dependía del stack real; el principio era el mismo: automatizar el recorrido del documento sin sustituir la validación humana donde aporta valor.

Retos que condicionaron el diseño: formatos y calidad variables —campos críticos, validaciones por proveedor o tipo, y deriva a revisión humana con baja confianza o datos incompletos, para que el error no llegue en silencio al archivo o a la contabilidad—; y clasificación por centro con estados explícitos (recibido, digitalizado, OCR procesado, pendiente de revisión, contabilizado, incidenciado) y registro de cada cambio.

Autoría: el diseño del flujo, las reglas, el modelo de estados y la comparación de plataformas son míos. La implantación en el entorno productivo y las cifras del piloto quedan por cerrar con el equipo de Solfico.

## Métricas de Impacto

Impacto esperado (aún no medido en piloto; no se presenta como resultado):

- Negocio: menos tiempo en abrir, revisar, clasificar y mover cada factura; menos errores de clasificación por centro, proveedor o tipo.
- Sistema: estado claro por documento y visión del volumen pendiente antes de cada cierre mensual o trimestral.
- Control: recorrido auditable desde la recepción hasta contabilización o incidencia; tasa de casos derivados a revisión humana como indicador de confianza del OCR y de las reglas.

Baseline pendiente de piloto (completar antes de publicar como caso cerrado):

| Métrica | Antes | Después | Resultado |
| --- | --- | --- | --- |
| Tiempo medio por factura | — | — | — |
| Facturas procesadas por semana | — | — | — |
| Errores de clasificación | — | — | — |
| Facturas pendientes antes del cierre | — | — | — |
| Casos a revisión humana | — | — | — |

Límites: sin esas cifras el caso describe el diseño y el enfoque, no un resultado de negocio validado. Una proyección no sustituye la medición.
