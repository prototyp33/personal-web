---
rol: orquestador
estado: bloqueado
resumen: RAG, MCP y Grok viven fuera de este portfolio; repo independiente ai-knowledge-repo. ADR-003 no cambia.
---

# Decisión — Knowledge repo independiente (RAG / MCP / Grok)

## Contexto y problema

Se evaluó construir un índice RAG local sobre la bóveda Obsidian, exponerlo a Cursor mediante MCP y usar Grok como motor de razonamiento con function calling. El objetivo sería consultar notas con citas y, con confirmación humana, crear o actualizar documentación.

Este workspace es el **portfolio personal**: Next.js, bóveda `brain/` como contexto del enjambre y trabajo por tickets. El roadmap activo es **E1–E5** (voz, datos, layout, motion, QA).

[ADR-003](Registro-ADR.md) fija el modelo de contenido del sitio: Markdown/MDX en la bóveda, sin CMS ni base de datos. Un índice vectorial podría servir como herramienta de consulta en el futuro, pero **no** debe sustituir ese modelo editorial.

Mezclar en este mismo repositorio el producto portfolio con un stack de embeddings, vector DB, servidor MCP y agente Grok diluiría el alcance, chocaría con el stack fijado en [Diseño del sistema](Diseno-Sistema.md) y abriría tickets ajenos a E1–E5.

## Decisión

1. **No** se implementa RAG, MCP, embeddings ni integración con Grok en este portfolio.
2. **No** se abre épica ni tickets para ese módulo aquí.
3. El módulo RAG / MCP / Grok vivirá en un **repositorio independiente** llamado `ai-knowledge-repo`.
4. [ADR-003](Registro-ADR.md) **no se modifica**: el contenido publicable del sitio sigue siendo Markdown/MDX en `brain/`, sin CMS ni base de datos.
5. El roadmap **E1–E5** no se altera por esta decisión.

## Alternativas consideradas

| Alternativa | Motivo de rechazo o aplazamiento |
| --- | --- |
| Integrar RAG/MCP/Grok en este monorepo | Fuera del stack y de E1–E5; acopla operación de IA al ciclo de releases del portfolio. |
| Sustituir el modelo editorial por un vector store | Contradice ADR-003; el sitio necesita notas editables y versionables, no solo fragmentos embebidos. |
| Épica nueva en este repo «después de E5» sin repo aparte | Posible más adelante solo si se cumplen los criterios de reconsideración; por defecto se prefiere el repo independiente. |
| No documentar nada y aparcar el tema | Deja la decisión implícita; los agentes podrían reabrir el alcance en chats futuros. |

## Consecuencias

- Este repo sigue centrado en el portfolio y en el enjambre de tickets sobre `brain/` y `src/`.
- Cualquier trabajo de indexación, búsqueda híbrida, MCP o agente Grok se planifica y ejecuta en `ai-knowledge-repo`, no aquí.
- La bóveda `brain/` permanece fuente de verdad del **contexto de agentes del portfolio** y del **contenido editorial**; no se convierte en índice vectorial de este proyecto.
- No hay cambios de código, dependencias ni scripts en este repositorio por esta decisión.
- Una futura herramienta de consulta puede **leer** la bóveda sin vivir dentro del árbol del portfolio (véase interfaz futura).

## Interfaz futura con `ai-knowledge-repo`

El nuevo repositorio podrá consumir esta bóveda (u otra) **sin acoplarse al portfolio**:

- Variable de entorno: `KNOWLEDGE_VAULT_PATH` — ruta absoluta o montada al directorio de notas Markdown (por ejemplo, el `brain/` de este repo, o un vault externo).
- El portfolio **no** importa paquetes, procesos ni índices de `ai-knowledge-repo`.
- `ai-knowledge-repo` **no** escribe en `src/` de este portfolio ni altera contratos, mocks o tickets.
- Lectura y búsqueda automáticas en el knowledge repo; creación/edición/borrado de notas solo con confirmación humana (política del knowledge repo, no de este).

Contrato mínimo esperado en el knowledge repo (fuera de este alcance):

```text
KNOWLEDGE_VAULT_PATH → ingesta → índice local → MCP (search / get_note) → agente opcional (Grok)
```

## Criterios para reconsiderar la integración en el portfolio

Reabrir la integración **dentro** de este repositorio solo si se cumplen **varios** de estos puntos y el orquestador lo registra con una ADR nueva (sin reescribir ADR-003):

1. E1–E5 están cerradas y el portfolio está en mantenimiento estable.
2. Hay un caso de producto claro en el **sitio público** (no solo productividad del autor en Cursor) que exija búsqueda semántica embebida.
3. El coste de mantener dos repos supera el acoplamiento (p. ej. la misma bóveda debe servirse en build time al visitante).
4. Existe un ADR que delimite el módulo (carpetas, dependencias, qué queda fuera del bundle del portfolio) y un ticket con scope lock.
5. La integración no introduce CMS ni base de datos como fuente de verdad del contenido editorial; el vector store, si existe, sigue siendo índice derivado.

Mientras no se den, la respuesta por defecto es: **repo independiente `ai-knowledge-repo`**.
