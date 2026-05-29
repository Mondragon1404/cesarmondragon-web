# Brandbook — César Mondragón

> Versión 1.0 · Mayo 2026

---

## 1. Posicionamiento

### Statement

> Para fundadores y empresas que quieren una marca que posicione y un digital que venda — no solo que se vea bien — **César Mondragón** es el diseñador estratégico que une branding, UX/UI e IA en un sistema probado. A diferencia de una agencia o un freelancer genérico, César entrega coherencia completa: desde la identidad visual hasta la automatización de procesos.

### Matriz de posicionamiento

| Bloque | Definición |
|---|---|
| Categoría | Diseñador estratégico (branding + digital + IA) |
| Audiencia | Fundadores y PYMEs que necesitan marca + presencia digital coherente |
| Enemigo | Agencias caras sin visión de negocio / freelancers aislados (solo logo o solo web) |
| Promesa | Una marca que posiciona y un digital que convierte |
| Mecanismo | Sistema AIMA: diseño estratégico + automatización + IA en fases claras |
| Prueba | Proyectos: Faneti, Highclass, Volzari, Dulcinea |

---

## 2. Naming

- **Nombre personal:** César Mondragón — autoridad y trazabilidad directa
- **Marca corta:** CM — para aplicaciones reducidas (favicon, firma)
- **Método propio:** Sistema AIMA — diferenciador clave, nombrar siempre en mayúsculas

---

## 3. Tono de voz

### Ejes (escala 1-5)

- Formal **1** ←→ **3** Coloquial — directo pero profesional
- Serio **1** ←→ **2** Humorístico — sin humor forzado
- Respetuoso **2** ←→ **3** Irreverente — honesto, sin rodeos
- Técnico **2** ←→ **4** Divulgativo — explica sin jerga innecesaria

### Principios de voz

1. **Habla de resultados, no de procesos.** No "integración de herramientas de IA", sino "menos tiempo en tareas repetitivas".
2. **Sé concreto.** Si prometes algo, ponle un número o un ejemplo real.
3. **Nunca suenes a agencia.** Sin "soluciones integrales", "sinergia", "360°" ni "innovador".

### Vocabulario

**Sí usar:** posiciona, convierte, sistema, método, probado, claro, estrategia, marca, resultado, concreto, eficiente, directo

**No usar:** disruptivo, innovador, sinérgico, integral, escalable (sin contexto), sostenible (como comodín), transformación digital, solución, ecosistema

### Ejemplos antes/después

| Contexto | Antes | Después |
|---|---|---|
| Landing | "Soluciones de branding integrales y escalables" | "Una marca que te diferencia desde el primer día" |
| Servicio | "Automatización de flujos de trabajo con IA" | "Pongo la IA a trabajar en tu negocio para que tú no tengas que hacerlo manualmente" |
| Error 404 | "Ha ocurrido un error. Vuelva a intentarlo." | "Esta página no existe — pero tu próximo proyecto puede." |

---

## 4. Sistema visual

### Paleta

| Token | HEX | Uso |
|---|---|---|
| `--color-red-600` | `#A61C1C` | Acento primario, énfasis, CTA |
| `--color-red-800` | `#8B1717` | Hover, estados activos |
| `--color-black` | `#0A0A0A` | Texto principal, fondos oscuros |
| `--color-neutral-600` | `#666666` | Texto secundario (WCAG AA ✓ 5.5:1) |
| `--color-neutral-100` | `#E5E5E5` | Bordes, divisores |
| `--color-neutral-50` | `#F5F5F5` | Fondos alternativos |
| `--color-white` | `#FFFFFF` | Fondo base |

> **Regla de contraste:** nunca usar un gris más claro que `#666666` sobre fondo blanco para texto de cuerpo. `#999999` solo para labels decorativos no esenciales.

### Tipografía

| Familia | Uso | Carga |
|---|---|---|
| **Fraunces** (serif variable) | Títulos de display, hero, secciones | Google Fonts |
| **Inter** (sans variable) | Cuerpo, UI, navegación, labels | Google Fonts |

**Regla:** Máximo 2 familias. Nunca mezclar una tercera sin justificación.

**Pesos de display (Fraunces):** 700, 900 — opsz automático según tamaño
**Pesos de cuerpo (Inter):** 300 (texto largo), 400 (base), 500 (énfasis suave), 600 (semibold), 700 (bold)

### Escala tipográfica (ratio 1.25 — Major Third)

Ver `tokens.css` para valores completos.

### Espaciado

Escala base 4px. Ver `tokens.css` para valores completos.

### Iconografía

Sin familia de iconos definida en v1.0. En v2.0 adoptar **Lucide** (MIT, SVG, coherente con Inter).
Mientras tanto: solo Unicode semántico (↗ para "abrir/ir", + para "expandir", × para "cerrar"). **No mezclar familias.**

### Estilo de imagen

Fotografía de producto / mockup de marca — fondo neutro o negro.
Sin ilustraciones ni 3D. Consistencia editorial: colores apagados o contraste alto.

---

## 5. Logo y marca

- **Logo principal:** logotipo "CM" en SVG (`assets/logo.svg`)
- **Uso mínimo:** 24px de altura
- **Zona de exclusión:** equivalente a la altura de la "C" a cada lado
- **Fondo negro:** logo en blanco
- **Fondo blanco:** logo en negro

### Usos incorrectos

- No rotar
- No añadir sombra o degradado
- No usar sobre fondos de color distinto a negro o blanco sin aprobar
- No estirar ni distorsionar

---

## 6. Checklist de aplicación

- [x] Statement de posicionamiento definido
- [x] Paleta con contraste WCAG AA verificado
- [x] 2 familias tipográficas con licencia clara (Google Fonts — SIL Open Font)
- [x] Tokens CSS exportables (`brand/tokens.css`)
- [x] Brandbook en Markdown, versionable en Git
- [ ] Ejemplos visuales correcto/incorrecto (pendiente diseño)
- [ ] Adoptar Lucide como familia de iconos en v2.0
- [ ] Definir paleta de fotografía con ejemplos reales de proyectos
