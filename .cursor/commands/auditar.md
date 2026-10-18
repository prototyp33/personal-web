# Auditar

Chat de QA, con `@06-auditor-qa`. No implementes nada en esta pestaña.

1. Lee `.cursor/rules/06-auditor-qa.mdc`, `brain/01_Arquitectura/Registro-ADR.md` y `brain/05_Calidad/Checklist-QA-SEO.md`.
2. Pide la épica o los tickets (`T-01` … `T-04`) si no vienen en el mensaje. Lee solo esos tickets.
3. Revisa el diff de esos cambios contra `src/types/contracts.ts` y las ADR aceptadas.
4. Busca código muerto, inconsistencias de tipos (`any`, tipos paralelos, casts forzados) y fallos de accesibilidad del checklist.
5. No edites `src/`, no crees tickets y no marques la épica como completa.
6. Devuelve la lista de hallazgos. Cada línea lleva archivo, qué rompe y por qué. Lo que no esté roto no se menciona.

El orquestador, en su pestaña, convierte esa lista en tickets. Este chat se cierra después del informe.
