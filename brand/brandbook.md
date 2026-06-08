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

| Token | rem | px aprox | Uso |
|---|---|---|---|
| `--text-xs` | 0.64rem | ~10px | Microcopy, badges, timestamps |
| `--text-sm` | 0.8rem | ~13px | Labels, captions, texto de soporte |
| `--text-base` | 1rem | 16px | Cuerpo de texto, párrafos, UI general |
| `--text-lg` | 1.25rem | ~20px | Lead/intro, citas cortas |
| `--text-xl` | 1.563rem | ~25px | Subtítulos de sección (H3) |
| `--text-2xl` | 1.953rem | ~31px | Títulos de sección (H2) |
| `--text-3xl` | 2.441rem | ~39px | Títulos de página (H1 en móvil) |
| `--text-4xl` | 3.052rem | ~49px | Hero headings (H1 en desktop) |
| `--text-5xl` | 3.815rem | ~61px | Display puro — portadas, números grandes |

**Regla de familia:** `--text-xl` hacia arriba → Fraunces (serif). `--text-lg` hacia abajo → Inter (sans).

**Line-height recomendado:** Display (`4xl`–`5xl`) → 1.1. Títulos (`2xl`–`3xl`) → 1.2. Cuerpo (`base`–`lg`) → 1.6–1.7.

### Espaciado

Escala base 4px. Referencia semántica:

| Token | Valor | Uso típico |
|---|---|---|
| `--space-1` | 4px | Separación interna mínima (icon + texto) |
| `--space-2` | 8px | Padding de badge, gap entre items inline |
| `--space-3` | 12px | Padding interno de botón (eje vertical) |
| `--space-4` | 16px | Padding de componentes (cards, inputs) |
| `--space-6` | 24px | Gap entre elementos de formulario, margin entre párrafos |
| `--space-8` | 32px | Padding de sección pequeña, separación entre bloques |
| `--space-10` | 40px | Margen entre secciones en móvil |
| `--space-12` | 48px | Padding vertical de sección en móvil |
| `--space-16` | 64px | Padding de sección en desktop |
| `--space-20` | 80px | Separación entre secciones grandes |
| `--space-24` | 96px | Padding hero en desktop |
| `--space-30` | 120px | Máximo — espaciado de hero muy abierto |

**Regla:** Nunca usar valores arbitrarios. Si ningún token encaja, revisar si el diseño es correcto antes de crear un valor nuevo.

### Colores de estado

| Token | HEX | Uso |
|---|---|---|
| `--color-success` | `#10B981` | Confirmaciones, formularios válidos, éxito de acción |
| `--color-warning` | `#F59E0B` | Alertas suaves, advertencias no críticas |
| `--color-error` | `#EF4444` | Errores de validación, acciones destructivas |
| `--color-info` | `#3B82F6` | Mensajes informativos, tooltips |

**Regla:** Los colores de estado solo aparecen en contexto funcional (feedback de formulario, notificaciones). Nunca usarlos como decorativos ni como sustituto del rojo de marca.

### Tokens semánticos (alias)

Los alias son la capa que se usa en código, no los valores hexadecimales directos. Garantizan que dark mode y futuros cambios de paleta no requieran tocar componente a componente.

| Alias | Resuelve a | Qué representa |
|---|---|---|
| `--color-primary` | `--color-red-600` | Acento principal, CTA |
| `--color-primary-hover` | `--color-red-800` | Estado hover del primario |
| `--color-text` | `#0A0A0A` | Texto principal |
| `--color-text-muted` | `#666666` | Texto secundario, placeholders, captions |
| `--color-bg` | `#FFFFFF` | Fondo base de la página |
| `--color-border` | `#E5E5E5` | Bordes de cards, inputs, divisores |

**Regla:** En componentes, siempre usar el alias (`--color-text`) nunca el hex directo ni el token de paleta (`--color-neutral-950`).

### Border radius

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | 4px | Badges, tags, tooltips |
| `--radius-md` | 8px | Inputs, botones (por defecto) |
| `--radius-lg` | 12px | Cards, modales, dropdowns |
| `--radius-xl` | 16px | Cards destacadas, banners |
| `--radius-full` | 9999px | Pills, avatares circulares |

**Estilo de marca:** El sistema es funcional pero no redondeado en exceso. `--radius-md` es el valor por defecto para la mayoría de elementos interactivos.

### Sombras

| Token | Uso |
|---|---|
| `--shadow-sm` | Elevación mínima — inputs en focus, separación sutil |
| `--shadow-md` | Cards, dropdowns en reposo |
| `--shadow-lg` | Cards en hover, paneles flotantes |
| `--shadow-xl` | Modales, drawers, overlays |

**Regla:** Las sombras deben comunicar elevación, no decoración. Evitar `--shadow-xl` en elementos que no sean capas superiores reales (modal, overlay).

### Motion

| Token | Valor | Uso |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Todas las transiciones de UI |
| `--duration-fast` | 0.2s | Hover, focus, micro-interacciones |
| `--duration-base` | 0.3s | Aperturas de dropdown, cambios de estado |
| `--duration-slow` | 0.5s | Animaciones de entrada de sección, modales |

**Regla:** Siempre usar `--ease-out`. Nunca `linear` para interacciones de usuario. Respetar `prefers-reduced-motion` deshabilitando transiciones no esenciales.

### Z-index

| Token | Valor | Capa |
|---|---|---|
| `--z-base` | 0 | Contenido estático |
| `--z-dropdown` | 100 | Dropdowns, tooltips |
| `--z-sticky` | 200 | Headers fijos, barras de navegación |
| `--z-overlay` | 300 | Fondos de modal (backdrop) |
| `--z-modal` | 400 | Modales, drawers |
| `--z-toast` | 500 | Notificaciones toast |
| `--z-cursor` | 9999 | Cursor personalizado |

### Dark mode

Los tokens semánticos cambian automáticamente con `[data-theme="dark"]`. Los únicos que varían:

| Alias | Light | Dark |
|---|---|---|
| `--color-text` | `#0A0A0A` | `#FFFFFF` |
| `--color-text-muted` | `#666666` | `#999999` |
| `--color-bg` | `#FFFFFF` | `#0A0A0A` |
| `--color-border` | `#E5E5E5` | `#222222` |

**Regla:** El rojo de marca (`--color-primary`) no cambia entre modos. Las imágenes y fotografías no requieren tratamiento especial — el estilo de fondo neutro/negro funciona en ambos modos.

---

### Iconografía

Sin familia de iconos definida en v1.0. En v2.0 adoptar **Lucide** (MIT, SVG, coherente con Inter).
Mientras tanto: solo Unicode semántico (↗ para "abrir/ir", + para "expandir", × para "cerrar"). **No mezclar familias.**

### Paleta de fotografía

El sistema visual de César usa tres tipos de imagen con reglas distintas. No mezclar estilos entre tipos.

---

#### Tipo A — Mockup de proyecto (portfolio)

Es la imagen principal de cada caso de estudio. Muestra el entregable en contexto de uso real.

**Referencia:** `proyecto-branding-faneti.webp`, `proyecto-uxui-highclass.webp`, `proyecto-shopify-volzari.webp`, `proyecto-landing-dulcinea.webp`

**Reglas:**
- Fondo: blanco o neutro muy claro (`#F5F5F5` máx). Nunca fondo oscuro ni de color.
- Composición: múltiples dispositivos en grid (laptop + móvil como mínimo; añadir tablet si el proyecto lo justifica).
- Paleta del mockup: respeta los colores del cliente, no imponer el rojo de marca CM.
- Ratio: 16:9 landscape para tarjetas de proyecto en web.
- Calidad: mínimo 1400px de ancho. Sin compresión visible.
- Tratamiento de color: sin filtros ni LUT. Colores fieles al entregable real.

**No hacer:**
- Fondos de pantalla o texturas detrás del mockup.
- Dispositivos con marcos excesivamente exagerados o irreales.
- Añadir el logo CM sobre la imagen del proyecto — la autoría va en el caption.
- Stock de dispositivos con pantallas en blanco — siempre mostrar el trabajo real.

---

#### Tipo B — Retrato personal

Foto de César como diseñador. Transmite autoridad técnica, no corporativismo.

**Referencia:** `foto-cesar-mondragon.webp`

**Características del estilo establecido:**
- Contexto: espacio de trabajo real visible (pantallas con trabajo activo, setup técnico).
- Ropa: negro preferiblemente — coherente con la identidad de marca oscura.
- Pose: mirada directa a cámara. Natural, "en el trabajo", no posado de estudio.
- Iluminación: cálida (lámpara de escritorio) + luz de pantallas. No flash de estudio frío.
- Fondo: desenfocado pero con información visible (herramientas, pantallas, contexto real).
- Colores dominantes del fondo: negro, azul de pantallas, madera cálida.

**Nuevas fotos deben mantener:**
- Misma temperatura de color cálida-neutra.
- Ropa oscura (negro o gris oscuro).
- Setup visible como contexto, no fondo neutro liso.
- Formato vertical (portrait) para hero/about. Horizontal (landscape) para banners.

---

#### Tipo C — Proceso y behind the scenes

Imágenes de trabajo en progreso: flujos de automatización, wireframes, sistemas de diseño. Úselas para contenido de redes o artículos.

**Reglas:**
- Capturas de pantalla de herramientas reales (Figma, n8n, Notion, etc.) — sin mockear.
- Resolución suficiente para que el contenido de la pantalla sea legible.
- Fondo: la propia interfaz de la herramienta. No componer sobre fondo externo.
- No oscurecer ni añadir overlay — si el contenido es sensible, recortar antes de capturar.

---

#### Lo que nunca entra en el sistema

- Stock photos de personas desconocidas representando "clientes" o "equipos".
- Ilustraciones o imágenes 3D generadas (ya cubierto en sección anterior).
- Imágenes con texto sobreimpreso en tipografía ajena al sistema (sin Inter ni Fraunces).
- Filtros Instagram, viñetas, efectos de luz artificiosos.
- Fondos de color saturado detrás de cualquier tipo de imagen.

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
- [x] Escala tipográfica documentada con uso semántico
- [x] Escala de espaciado documentada con uso semántico
- [x] Colores de estado y alias semánticos documentados
- [x] Border radius, sombras, motion y z-index documentados
- [x] Dark mode documentado
- [ ] Ejemplos visuales correcto/incorrecto (pendiente diseño)
- [ ] Adoptar Lucide como familia de iconos en v2.0
- [x] Definir paleta de fotografía con ejemplos reales de proyectos (Tipo A/B/C)
