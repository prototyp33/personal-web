# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16.4.1, React 19.3.1, TypeScript 6.0.3 y Tailwind 4.3.3, ya presentes en el repositorio. Sin analítica ni cambios de despliegue, DNS u hosting.

## Users

Quien abre la home quiere saber quién es Adrian y si su trabajo encaja: una persona que evalúa colaborar o contratar, en una primera visita, casi siempre desde el escritorio y también desde el móvil. Inferido del encargo (portfolio personal); el mensaje no nombró un público distinto.

## Product Purpose

La home presenta a Adrian Javier Iraegui, su oficio y tres proyectos públicos, y ofrece un camino de contacto real. El éxito es que esa visita entienda el rol, abra un repositorio y no encuentre datos inventados.

## Positioning

Analista de datos y negocio que publica el trabajo (dashboards y modelos de ocupación de aparcamiento en Barcelona) en repositorios abiertos, en lugar de casos anonimizados o métricas de cliente.

## Operating Context

Sitio estático de una sola home. El visitante llega, lee y sale hacia GitHub. No hay formulario, sesión ni panel.

## Capabilities and Constraints

- Una home responsive. En 390px el bento pasa a una columna.
- Hechos permitidos: nombre, Barcelona, la bio pública de GitHub y las descripciones públicas de los tres repos nombrados.
- Prohibido inventar métricas, clientes, testimonios o citas.
- LinkedIn y correo no constan: quedan como TODO en la configuración, sin URL falsa.
- El retrato es un gráfico abstracto hasta que haya una foto. El sitio de sustitución es `portrait.src` en `src/content/site.ts`.
- No se copia el nombre, el texto ni las fotos de la plantilla Bentolio.
- El enjambre del repo exige tickets para el trabajo interno; este encargo pide la home y un pull request directamente. Las specs bloqueadas de `brain/` no se reescriben en este cambio.

## Brand Commitments

- Nombre público: Adrian Javier Iraegui (sin acento, como en GitHub y en el encargo).
- Bio pública, en inglés, tal como está en GitHub.
- Estructura vinculante: bento de Bentolio (barra con nombre y Projects / About / Contact, tarjeta de titular con itálica y negrita, flor lineal, retrato, columna de proyectos con previa en el primero, bio, tarjeta de acento «Contact me», franja de redes).
- El color de acento no es el salmón de la plantilla: tiene que leerse como el sitio de Adrian.
- Tipografía: sans geométrica libre cercana a Gilroy. Se usa Urbanist, autoalojada con `next/font`.

## Evidence on Hand

- Perfil: https://github.com/prototyp33 — «Data & Business Analyst. Grad in Management & Tech, skilled in Python, and AI-driven process optimization. Bridging the gap between data and business strategy.» Ubicación: Barcelona. Correo público: ninguno.
- https://github.com/prototyp33/barcelona-housing-demographics-analyzer — «Open-source dashboard to analyze the relationship between demographic evolution and housing prices in Barcelona.»
- https://github.com/prototyp33/OnSpotML — «Machine Learning project for parking prediction in Barcelona.»
- https://github.com/prototyp33/OnSpot-Predictions — «A predictive model for parking occupancy in Barcelona, leveraging advanced machine learning techniques with features like event schedules, traffic density, and nearby attractions.»
- No hay foto autorizada, ni LinkedIn, ni correo. No se muestran seguidores, estrellas ni métricas de modelo.

## Product Principles

- Solo hechos comprobables.
- El trabajo público es la prueba; el adorno no sustituye a un proyecto.
- Un archivo editable concentra nombre, bio, proyectos y redes.
- La home se lee entera en un viewport de escritorio y se apila en el móvil sin perder enlaces.

## Accessibility & Inclusion

Landmarks semánticos, texto alternativo, foco visible y contraste de texto suficiente sobre las tarjetas rosa y sobre la tarjeta de acento. El idioma de la home es inglés (`lang="en"`), porque la bio y las descripciones públicas están en inglés. Inferido: el encargo no pidió traducción.
