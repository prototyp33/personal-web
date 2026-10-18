# Ingerir

Estructura material crudo en la bóveda. Corre como orquestador. Escribe ya y cierra con un resumen. No implementa producto.

1. Si no hay material adjunto ni rutas bajo `brain/99_Borradores/`, pide qué ingerir y detente.
2. Lee `brain/00_MOC/INDEX.md`, `brain/01_Arquitectura/Registro-ADR.md` y solo las notas de `02_Specs-Frontend/` o `04_Contenido/` que vayas a tocar. Excepción: puedes leer los archivos de `99_Borradores` que el mensaje nombre o adjunte. No leas el resto de esa carpeta.
3. Clasifica: investigación o sistema visual → `brain/02_Specs-Frontend/`; voz, casos o guía editorial → `brain/04_Contenido/`. Si no encaja en ninguna, para y dilo.
4. Destila. No copies el crudo entero. Frontmatter con `rol`, `estado` y `resumen`. Enlaza el origen en una línea.
5. Escribe ya:
   - nota nueva o fusión en una existente con `estado: borrador`;
   - si choca con `estado: bloqueado`, no la reescribas: crea o actualiza la hermana `*-propuesta.md` y anótalo en el resumen;
   - si aparece una nota durable nueva, enlázala en `INDEX.md`.
6. Prohibido: `src/**`, tickets, `Registro-ADR.md`, `01_Arquitectura/**` (salvo que el material sea arquitectura y el usuario lo pida), y borrar `99_Borradores` sin decirlo en el resumen.
7. Cierra en español: rutas creadas o editadas, propuestas pendientes de ADR/ticket, y si el origen en borradores puede borrarse.
