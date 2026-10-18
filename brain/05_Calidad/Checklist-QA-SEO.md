---
rol: qa
estado: bloqueado
resumen: Umbral de accesibilidad, SEO, rendimiento, tipado y código muerto. El auditor informa; no edita el producto.
---

# Checklist de calidad

El auditor no inventa alcance y no edita el producto. Revisa el diff de la épica contra esta lista y devuelve cada fallo con archivo y motivo. El orquestador lo convierte en tickets.

## Accesibilidad

- [ ] `html` con `lang="es"`.
- [ ] Un solo `h1` por página. Los encabezados no se saltan niveles.
- [ ] Contraste de texto al menos 4.5:1 sobre `--color-canvas`.
- [ ] Foco visible de 2 px en `--color-accent`. El foco no se elimina.
- [ ] Cada control tiene etiqueta visible. El error de formulario nombra el campo.
- [ ] Las imágenes informativas tienen `alt` en español. Las decorativas van con `alt=""`.
- [ ] El recorrido completo funciona con teclado.
- [ ] Hay regiones `header`, `main` y `footer`.

## SEO técnico

- [ ] `<title>` y meta description únicos, en español, escritos con la guía de copy.
- [ ] URL canónica de la página.
- [ ] Open Graph con título, descripción e imagen.
- [ ] `sitemap.xml` y `robots.txt` coherentes con las rutas públicas.
- [ ] Un caso no destacado no se esconde de los buscadores salvo que el ticket lo pida.

## Rendimiento

- [ ] Fuentes con `next/font`, sin salto de layout.
- [ ] Cada imagen declara tamaño o relación de aspecto.
- [ ] El candidato a LCP no espera a una animación de entrada.
- [ ] No hay animaciones fuera de [Reglas de motion](../02_Specs-Frontend/Reglas-Motion.md). El auditor las señala y no las reescribe.

## Tipado

- [ ] TypeScript en `strict`. Sin `any`, sin `ts-ignore`, sin `ts-expect-error` huérfano.
- [ ] Los datos de página usan los tipos de `src/types/contracts.ts`. No hay interfaces paralelas.
- [ ] El parser no entrega un caso a medias: lo inválido falla el build.

## Código muerto

- [ ] No quedan importaciones, variables ni exportaciones sin uso.
- [ ] No hay un cast o un `any` para silenciar un tipo del contrato.

