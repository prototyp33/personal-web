---
rol: orquestador
estado: borrador
resumen: Absorbida por ADR-014. T-03 reescribe Sistema-Diseno.md; esta nota deja de mandar al cerrarlo.
---

# Sistema de diseño · propuesta

**ADR-014 aceptada.** T-03 aplica P1+P3 en [Sistema-Diseno.md](Sistema-Diseno.md). Hasta que T-03 cierre, esta nota es solo referencia de valores.

## Tensión con lo bloqueado

| Bloqueado hoy | Investigación recomienda |
| --- | --- |
| Campo oscuro `#12110f`, acento cobre `#e08a45` | Base **P1 papel** `#F4F1EA` / tinta `#161513` / acento `#2F5BFF`; oscuro opcional |
| Fraunces + Figtree + IBM Plex Mono | Inter Display/Inter + Newsreader + JetBrains Mono (o Söhne + Signifier + mono) |
| Portada: nombre + frase + casos featured en fila | Laboratorio: secciones tipo Today/Now/Projects; 2–3 ensayos estrella |
| Spring 300/30 como único gesto | Mantener spring; P3 añade un control interactivo por caso, con estado estático por defecto |

## Dirección a validar

1. **Base P1 · Cuaderno de laboratorio** — columna de lectura, tipografía de tres voces, figuras honestas (calibración, antes/después), craft log opcional.
2. **Casos estrella P3 · Explicable** — un control por caso (umbral, resolución espacial, taxonomía de errores) sin que el TL;DR dependa de él.
3. **P2 · Consola** — aparcada salvo pivot a perfil infra/producto puro.

## Tokens P1 (propuestos)

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-canvas` | `#F4F1EA` | Papel |
| `--color-ink` | `#161513` | Texto |
| `--color-muted` | `#6B6760` | Meta |
| `--color-line` | `#E2DDD2` | Reglas 1 px |
| `--color-accent` | `#2F5BFF` | Enlaces y estado |
| `--color-danger` | `#C2412D` | Error / regresión |
| Oscuro opcional | `#121110` / `#EDEAE3` | Si se mantiene modo noche |

Tipografía propuesta: Inter Display + Inter + Newsreader Italic + JetBrains Mono. Escala de 2–3 tallas máximo.

## Tokens P2 (solo si se elige consola)

Off-black `#08090A`, superficies `#0F1011`, bordes blanco ~8 %, Geist Sans/Mono, acento ok `#4CC38A`. Alto riesgo de genérico.

## Tokens P3 (ensayos)

Fondo `#FBFBFA`, tinta `#0F2B3D`, categóricos fijos por disciplina (teal / ámbar / magenta / índigo). IBM Plex Sans/Mono + Source Serif 4.

## Motion

Conservar el spring bloqueado y `prefers-reduced-motion`. No adoptar parallax, scroll continuo ni bento animado. Micro-interacciones de caso: ver [Narrativa-Casos](Narrativa-Casos.md).

## Siguiente paso

Orquestador: ADR de adopción (o rechazo parcial) y ticket que desbloquee/reescriba `Sistema-Diseno.md` y, si aplica, `Reglas-Motion.md`.
