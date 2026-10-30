# CHANGELOG — Landing OF3256 «Das ultimative Schattenarbeit & Inneres Kind Arbeitsbuch» (DACH)

- Proyecto: `/workspace/SOMBRAS-DACH/landing/` (`index.html`, `css/styles.css`, `img/`, favicons, `src/`, `capturas/`)
- Original intacto, para comparar: `/workspace/SOMBRAS-DACH/landing-original/index.html`
- Base del encargo: orden de David del 30/10/2026 y revisión `/workspace/reportes/revision-landing-sombras-2026-10-30.md`
- Estado: **solo archivos locales**. No se desplegó a Cloudflare, no se tocó GitHub ni Hotmart y no se subió nada.

> **Design system aplicado:** se aplicó el DESIGN SYSTEM APROBADO por David (30/10/2026), `/workspace/design-system-ref/DESIGN-SYSTEM-APROBADO-ATLAS.md`. Se usaron sus tokens (`--brand #002718`, sand, CTA `#00922D`, warning solo para estrellas y regalos), las tipografías Montserrat 700/800 (H1/H2 en mayúsculas) e Inter 400–700, el padding de sección 64/80/96, el contenedor de 1152 px, los radios 14/18/22/999, las sombras soft/card/cta, el botón pill verde con 3 microgarantías, la pill de confianza, las cards, los testimonios, la oferta destacada, el sello de garantía, el FAQ en acordeón y el footer brand-dark. Se tomó **solo como referencia visual**: no se copiaron textos ni imágenes de la fuente. El header NO es sticky. — aprobado por David 30/10/2026

Cada entrada indica **qué / dónde / por qué**. Todas están **aprobadas por David 30/10/2026**.

## Punto 4 — Bonos y cifras
| Qué | Dónde | Por qué |
|---|---|---|
| Los 4 bonos inventados (Notfall-Leitfaden, Audio, Heilsätze, Toolkit) se reemplazan por 4 bonos **reales y entregables**: B1 «Der 90-Tage-Plan zur Schatten-Integration» (PDF aparte de 3 págs., 19,00 €); B2 «Tägliche Praxis-Vorlagen» (en el libro, S. 106–109, 15,00 €); B3 «Die 50 kraftvollsten Affirmationen» (en el libro, S. 116–117, 14,00 €); B4 «Glaubenssatz-Transformations-Matrix & Grenzen-Planer» (en el libro, S. 111–112, 12,00 €) | Nueva sección «Deine 4 Boni im Wert von 60 €», desglose de la oferta y FAQ 1 | Revisión #4: bonos inexistentes y parecidos a los bumps. Ahora cada bono existe y ninguno se parece a un bump. — aprobado por David 30/10/2026 |
| Libro 37,00 € + Boni 60,00 € = **Gesamtwert (Buch + 4 Boni) 97,00 €**; precio 19,90 €; ahorro 77,10 € («über 75 %») | Intro de la oferta, desglose, banda de ahorro y hero («4 Gratis-Boni · im Wert von 60 €») | Revisión #5: «Boni im Gesamtwert von 97 €» era falso. — aprobado por David 30/10/2026 |
| El 97,00 € ya **no** se muestra tachado ni como «statt 97,00 €» (barra superior); queda solo como «Gesamtwert» | Barra superior y oferta | Design system Atlas: «sin ancla tachada que el contrato no sostenga». Además, en DACH un precio tachado se lee como precio anterior. — aprobado por David 30/10/2026 |

## Punto 5 — Un solo nombre y un solo mockup
| Qué | Dónde | Por qué |
|---|---|---|
| El nombre único «Das ultimative Schattenarbeit & Inneres Kind Arbeitsbuch» aparece en `<title>`, la meta description, og:/twitter:, la pill del hero, H2, la oferta, el footer y el © | Toda la página | Revisión #6: había 3 nombres distintos. — aprobado por David 30/10/2026 |
| Se eliminan «Basic Edition», «Premium Bundle», «Master-Ausgabe» y el libro físico de tapa dura | Hero y oferta | Revisión #6. — aprobado por David 30/10/2026 |
| Mockup único: la portada real (`img/cover.webp`, 800 px, 73 KB) dentro de un **marco de tablet en CSS** con barra de visor PDF «Arbeitsbuch.pdf · Seite 1 / 130». Mismo componente en el hero y en la oferta | Hero y oferta | Comunica que es un PDF digital y no un envío físico. — aprobado por David 30/10/2026 |
| ⚠ La portada impresa dice «DAS SCHATTENARBEIT & INNERES KIND ARBEITSBUCH» (le falta «ultimative») y «Tiefenpsychologische» en mayúscula | `img/cover.webp` (de `producto-principal.png`) | No se retocó la portada. Queda pendiente para David (ver abajo). |

## Punto 6 — 90-Tage-Plan y copia del índice
| Qué | Dónde | Por qué |
|---|---|---|
| Nuevo PDF «Der 90-Tage-Plan zur Schatten-Integration» (3 págs. A4: 3 fases, foco semanal, mini-ritual diario, tracker), con referencias a páginas reales del índice | `/workspace/SOMBRAS-DACH/entregables/90-Tage-Plan-Schattenarbeit.pdf` (fuente: `entregables/src/90-Tage-Plan.html`) | Hace real el Bonus 1. — aprobado por David 30/10/2026 |
| Copia del índice con nota de versión, Anhang A (90-Tage-Plan) y Anhang B (tabla de bonos 37 + 60 = 97 / 19,90 / 77,10) | `/workspace/SOMBRAS-DACH/docs/INDICE-MAESTRO-130-PAGINAS-actualizado.md` (el original no se tocó) | Trazabilidad. — aprobado por David 30/10/2026 |

## Punto 7 — Módulos según el índice y fuera bumps
| Qué | Dónde | Por qué |
|---|---|---|
| Rangos de páginas reales: Teil 1 S. 1–20, Modul I 21–45, Modul II 46–75, Modul III 76–105, Modul IV 106–130 | Sección «Dein 5-Stufen-Weg» | Revisión #7. — aprobado por David 30/10/2026 |
| Se corrige «5 Kindheitswunden (… Ungerechtigkeit)» por **4 Ur-Wunden** (S. 7). Se quitan Archetypen-Rad, 21-Tage-Trigger-Tracker, Vergebungs-Ritual für Eltern y Re-Elterung. Se añaden Dialog der zwei Hände (S. 60), Vergebungs-Ritual für dich selbst (S. 68), Archetypen-Modell, 10 Notfall-Werkzeuge y 3-Minuten-Reset (todos del índice). El 90-Tage-Plan se presenta solo como bono PDF | Módulos | Revisión #7: no prometer herramientas que el libro no tiene. — aprobado por David 30/10/2026 |
| Galería: se quita la imagen «S. 60 Archetypen-Rad» (no está en el índice). La página del «Dialog» se retocó de «SEITE 78» a «SEITE 60» | Galería | Revisión #7. — aprobado por David 30/10/2026 |
| **Sección de bumps eliminada entera**, sin ninguna mención a Order Bump, Notfall-Kit, Impulskarten, Brief-Ritual, Komplett-Bundle o Meditationen (tampoco en el desglose ni en el FAQ) | Antigua sección «Im Checkout optional zubuchbar» | Orden de David (no mencionar bumps en la landing). Revisión #8 queda superada. — aprobado por David 30/10/2026 |

## Puntos 8–9 — Erratas en alemán y técnico
| Qué | Dónde | Por qué |
|---|---|---|
| Erratas corregidas: 130-Seiten-Arbeitsbuch, 90-Tage-Plan, „Nein“ (comillas alemanas en la card de People-Pleasing), «130 angeleitete Seiten», «als beschreibbares PDF», Re-Elterung → Reparenting, «C. G. Jung» | Textos | Revisión #9. Los testimonios NO se tocaron (siguen con 'Nein' y «Seite 78» tal cual). — aprobado por David 30/10/2026 |
| UTMify: se mantiene el **pixel** y **un solo** script de UTMs (el ofuscado con `data-utmify-prevent-subids`). Se eliminó el `<script src="https://cdn.utmify.com.br/scripts/utms/latest.js" async defer>` plano | `<head>` | Revisión #10: el script estaba duplicado. — aprobado por David 30/10/2026 |
| JS de reenvío de UTMs: **copiado verbatim, sin cambios** | Final del `<body>` | Orden de no tocarlo. El riesgo `off=` queda anotado en pendientes. — aprobado por David 30/10/2026 |
| Se añadieron og:type/url/title/description/image (`https://schattenarbeit-buch.pages.dev/img/og.jpg`, 1200×630, nueva en estilo Atlas), twitter:card summary_large_image, canonical `https://schattenarbeit-buch.pages.dev/` y favicon (`favicon.ico` 16/32/48, png 32/192 y apple-touch-icon) con `<link rel="icon">` | `<head>` y raíz | Revisión #10. — aprobado por David 30/10/2026 |
| Tailwind CDN + config inline eliminados. CSS compilado y minificado con Tailwind 3.4.17 (`css/styles.css`, ~22 KB). Reconstrucción: `python3 src/build.py` | `<head>` y `src/` | Revisión #10. — aprobado por David 30/10/2026 |
| **Cuenta regresiva eliminada** (HTML y script) | Barra superior | Revisión #12: se reiniciaba sola. — aprobado por David 30/10/2026 |
| **Toast de compradores eliminado** (HTML y script). Eran nombres y tiempos simulados por JS, sin datos reales | Antes abajo a la izquierda | Design system Atlas («toast solo con datos reales; si no hay feed fiable, desactivado») y regla del Cerebro (no notificaciones simuladas). Es reversible si David tiene un feed real. — aprobado por David 30/10/2026 |

## Extra a / b — Diseño
| Qué | Dónde | Por qué |
|---|---|---|
| Barra superior estática (`position: static`, verificado), sin cuenta regresiva; botón pequeño solo en desktop. **Ningún elemento fijo en móvil** (lo único fijo es el lightbox mientras está abierto) | Barra superior | Extra a. — aprobado por David 30/10/2026 |
| Galería en 2 columnas (móvil) y 3 (desktop), con el badge «S. X», el título y el subtítulo **debajo** de la imagen (no tapan el título impreso); zoom/lightbox (`<dialog>`) con imagen grande al hacer clic y miniaturas de 640 px (38–83 KB) | Galería | Revisión #11 y Extra b. Se eligió una grid y no el marquee del Atlas porque la orden pide 2–3 columnas con zoom. — aprobado por David 30/10/2026 |
| Alt en alemán en todas las imágenes; `img/` pesa 1,1 MB en total; lazy-load bajo el pliegue; preload de la portada | Todas las imágenes | Extra b. — aprobado por David 30/10/2026 |
| Ritmo de secciones: barra brand → hero blanco → problema blanco (cards sand con triángulo ámbar) → cita brand → solución sand → galería brand → módulos blanco → testimonios sand → bonos brand → oferta blanco (card destacada brand) → garantía sand (sello «7 Tage Garantie») → FAQ blanco → CTA final brand → footer brand-dark | Toda la página | Atlas §mapa por secciones; nunca dos bandas brand seguidas (salvo CTA final + footer, como en la referencia). — aprobado por David 30/10/2026 |

## Ronda 2 — revisión independiente v2 (aprobado por David 30/10/2026)

### B2 — Portada oficial «Das ultimative …» (aprobado por David 30/10/2026)
- `img/cover-ultimative.webp` sale de `producto-principal-ultimative.png` (1080², sin editar) con la misma lógica que el cover anterior: 800×800 WebP, q76, method 6, LANCZOS. El marco de tablet es CSS, no forma parte de la imagen.
- El nombre nuevo sirve de cache-busting. Se borró `img/cover.webp`. Usan la imagen nueva el hero, la tarjeta de oferta y el `preload` del head.
- `img/og.jpg` se regeneró: 1200×630, el mismo diseño y la portada nueva. Titular «Das ultimative Schattenarbeit & Inneres Kind Arbeitsbuch».

### I1 — Fuentes autoalojadas (DSGVO) (aprobado por David 30/10/2026)
- En `fonts/` van los woff2 latin de @fontsource 5 (licencia OFL incluida): Inter 400/600/700 y Montserrat 700/800. Son los pesos que usa el CSS; no hay 500.
- `@font-face` con `font-display:swap` en `src/input.css`, más `preload` de Montserrat 800 e Inter 400.
- Se eliminaron el preconnect y el stylesheet de Google Fonts. `grep googleapis|gstatic` en index.html y CSS da 0, y en red no hay peticiones de fuentes externas.

### I2 — Sin logística como argumento (aprobado por David 30/10/2026)
- Micro-garantías del hero: «130 geführte Seiten · Für Tablet & Druck · 7-Tage-Garantie». Antes: SSL / Sofortiger Download / 7-Tage-Zufriedenheitsgarantie.
- CTA de checkout: «Jetzt Arbeitsbuch sichern»; en móvil, «Jetzt sichern · 19,90 €». **Solo cambió el texto interior.** El `href`, `target` y `data-utmify-checkout` siguen idénticos.
- CTA del hero: «Jetzt Arbeitsbuch sichern · 19,90 €» (móvil «Jetzt sichern · 19,90 €»).
- Nota de oferta: «Sofortige Auslieferung per E-Mail…» pasa a «Digitales PDF mit 130 Seiten + 4 Boni – zum Ausfüllen am Tablet oder zum Ausdrucken.»
- FAQ 1: «Du erhältst sofort nach dem Kauf einen Download-Link…» pasa a «Nach dem Kauf erhältst du das Arbeitsbuch als hochauflösende PDF-Datei.»
- Se mantienen a propósito (no son entrega inmediata o son NO TOCAR):
  - «sofort anwendbare tägliche Praxis» (beneficio de uso);
  - «lösen sofort intensive emotionale Reaktionen» (problema);
  - «sofortige körperliche Entspannung» (testimonio);
  - «Klarna (Rechnung / Sofort)» y «Klarna Sofortüberweisung» (nombres de medios de pago);
  - «unverzüglich dein Geld zurück» (reembolso de la garantía de 7 días).

### M2 — Alemán y links legales (aprobado por David 30/10/2026)
- Correcciones de texto:
  - «Unsere strikte 7-Tage-…» → «Unsere 7-Tage-Zufriedenheitsgarantie»;
  - «Der unerbittliche Innere Kritiker» → «innere Kritiker»;
  - «Wöchentlicher Schatten-Tracker» → «wöchentlicher» (Modul IV y Bonus 2);
  - «Macht des Nein» → «des Neins».
- Sin cambios: el nombre del producto (sin guiones), los testimonios, el rating, los claims, Klarna y los `href="#"` legales.
- Los links legales tienen un área táctil de 44 px de alto (`inline-flex`, `min-height:44px`, padding lateral). El aspecto es el mismo; solo crece el interlineado al hacer wrap en móvil.

### M3 — CTA en móvil (aprobado por David 30/10/2026)
- `.btn` usa `font-size: clamp(.875rem, 3.6vw, 1rem)`: 14,04 px a 390 y 16 px en desktop. Alto de 50 px en móvil y 56 px en desktop.
- Textos cortos en móvil (`sm:hidden` / `hidden sm:inline`) para no tener overflow: «Jetzt sichern · 19,90 €» y «Alle 130 Seiten freischalten». Verificado: `scrollWidth <= clientWidth` en los 4 CTA.

### M4 — HTML (aprobado por David 30/10/2026)
- `#lightbox-img` lleva `src` con un GIF transparente en data URI. El lightbox sigue abriendo la imagen de 1055 px correcta (lb.js).
- Las muestras 02, 04 y 27 tenían `height="906"` y el tamaño real es 640×905; ya están corregidas. 01, 60 y el bonus ya estaban bien.

### Verificación ronda 2 (30/10/2026)
- grep de prohibidos (order bump, bump, Basic Edition, Premium Bundle, Notfall-Kit, Impulskarten, Komplett, Meditation, Zusatzpaket, line-through): 0.
- sha256 de los 3 scripts verbatim: idénticos al original. Hay un solo loader de UTMs, y en red `utms/latest.js` se pide 1 sola vez.
- Anchor de checkout idéntico.
- `scrollWidth == clientWidth` en 390 y 1440.
- Peticiones de fuentes: solo `localhost/fonts/*.woff2`.
- Capturas en `capturas/`, sobrescritas y revisadas.

## Ronda 3: orden final de David 30/10/2026 05:45 — la landing mantiene la promesa del 90-Tage-Plan como PDF aparte, sin plazo; el PDF se produce en ~48 h (brief); cosméticos aplicados

- **90-Tage-Plan (aprobado por David 30/10/2026).** La corrección de las 05:43 (quitar «separates PDF») quedó anulada por la orden de las 05:45 y se revirtió. Las cinco zonas tienen otra vez el texto literal de la ronda 2:
  - nota bajo los módulos («als separates Bonus-PDF»);
  - subtítulo de los bonos («Bonus 1 ist ein separates PDF…»);
  - tarjeta del Bonus 1 (imagen de vista previa, tag «Separates PDF · 3 Seiten» y texto original);
  - desglose «(separates PDF)»;
  - FAQ 1.
- **Imagen del Bonus 1.** Se había borrado `img/bonus-90-tage-plan.webp` en el paso anulado. Se recreó desde la página 1 de `entregables/90-Tage-Plan-Schattenarbeit.pdf` (pdftoppm a 150 dpi, LANCZOS) en WebP de 440×622.
- **Bonos y valores sin cambios.** Siguen los 4 bonos con los mismos títulos y orden: 19 + 15 + 14 + 12 = 60 €, total 97,00 €, 19,90 € y ahorro de 77,10 €.
- **Sin plazos ni fechas en la página.** El grep de «48 Stunden», «Stunden», «bald», «demnächst», «in Kürze», «folgt», «nachgeliefert», «in Vorbereitung» y «sobald» da 0.
- **Footer en móvil sin «•» huérfano (aprobado por David 30/10/2026).** Se quitaron los `<span>•</span>` del HTML.
  - En móvil los links se reparten con `flex-wrap`, sin separadores.
  - Desde 640 px, en una sola fila, el separador se pinta con `.legal__a + .legal__a::before` y solo va entre ítems.
  - Los links siguen en `#` y miden 44 px de alto.
- **«Zum Angebot» en desktop (aprobado por David 30/10/2026).** `.btn-sm` tiene ahora `min-height:44px` (antes 34 px); el destino sigue siendo `#kaufbereich`. El padding de la barra baja a `sm:py-2`, así que su alto total queda en 61 px, prácticamente igual que antes.
- **Verificación:**
  - sin overflow en 390 y 1440;
  - anchor de checkout idéntico;
  - los 3 scripts verbatim con el mismo sha256 que el original;
  - grep de prohibidos y de googleapis/gstatic: 0;
  - CTAs de móvil a 50 px de alto y 14 px de texto;
  - lightbox OK;
  - tarjetas de bonos en desktop de 543 px las cuatro; en móvil la 1 mide 487 px (imagen y texto más largo) y las otras 395 px.
- **Capturas.** Se regeneraron las 4 full/above-fold y se añadieron `capturas/landing-desktop-1440-bonos.png` y `capturas/landing-mobile-390-bonos.png`.

## Ronda 4 — mockups 3D (aprobado por David 30/10/2026 09:28)

Orden de David: «El Hero siempre debe ser 1 sola imagen, mockups de los productos, hecha con GPT. Los bonos necesitan su propia imagen mockup … mockups 3D siempre. Lo mismo con la oferta: una imagen cuadrada que muestre toda la oferta en 1 solo mockup».

- **Hero = 1 solo mockup 3D.** Fuera las 2 hojas de muestra inclinadas y el marco de tablet CSS con la portada. Ahora hay una sola `img/mockup-hero.webp` (900×900, `fetchpriority="high"`, preload en `<head>`, alt alemán). Mide 326 px en 390 y 440 px en desktop (ajuste final: antes 560 px), con esquinas redondeadas y sombra, sin marcos 2D. Se fue también el rótulo «Arbeitsbuch.pdf · Seite 1 / 130» del visor CSS.
- **Un mockup 3D por bono**, en la misma tarjeta y el mismo orden: `mockup-bonus1.webp` (90-Tage-Plan), `mockup-bonus2.webp` (Tägliche Praxis-Vorlagen), `mockup-bonus3.webp` (50 Affirmationen), `mockup-bonus4.webp` (Glaubenssatz-Matrix & Grenzen-Planer). Son cuadrados 900×900, `loading="lazy"`, con alt alemán. Las páginas «S. 106–109 / 116–117 / 111–112» quedan como etiqueta sobre la imagen. Fuera la vista plana del Bonus 1 y los iconos de los bonos 2–4.
- **Oferta = mockup 1:1** `mockup-oferta.webp`, con el libro y los 4 bonos en una sola imagen. Reemplaza el marco de tablet `tablet--sm`. Mide 356 px en desktop (2 columnas iguales) y 286 px en móvil.
- **og.jpg nuevo** (1200×630, hecho con Pillow): mockup-hero centrado sobre verde marca, con el nombre «Das ultimative Schattenarbeit & Inneres Kind» a la izquierda y «130 A4-Seiten · 4 Gratis-Boni · PDF» a la derecha.
- **Borrados (sin uso):** `img/bonus-90-tage-plan.webp` y `img/cover-ultimative.webp`. Las sample-page-* se quedan porque las usa la galería «Beispielseiten», que no se tocó.
- **CSS:** fuera `.hero-stage`, `.hero-page*`, `.tablet*` y `.bonus__media--icon`. Nuevos: `.hero-mockup`, `.bonus__page`, `.offer__mockup`.
- **Origen de las imágenes:** las 6 imágenes mockup-* (y por lo tanto og.jpg) están **generadas con IA (GPT)**. Los originales están en `../mockups-3d/*-original.jpg`. Son ilustrativas: muestran objetos físicos (libro de tapa dura, cuaderno, mazo de cartas), aunque el producto es un PDF digital.
- **Sin cambios:** textos visibles, precios (60 / 97,00 / 77,10 / 19,90 €, valores de cada bono), garantía de 7 días, links legales, UTMify (hashes idénticos), Klarna, href del checkout `…off=5ql0a5p8…`. El diff de texto visible solo muestra la salida de «Arbeitsbuch.pdf / Seite 1 / 130» (×2, rótulo del marco de tablet). Los alt cambiaron.
- **Ajuste final (30/10/2026 09:38):** `mockup-bonus4.webp` y `mockup-oferta.webp` se reemplazaron por versiones cuyo texto dice el nombre completo «GLAUBENSSATZ-TRANSFORMATIONS-MATRIX & GRENZEN-PLANER», igual que la landing. El alt de la oferta ahora nombra los 4 boni completos. El hero bajó a 440 px en desktop; aun así, la CTA del hero en 1440×900 queda en y≈1144–1200 px, fuera del primer pantallazo. En ese pantallazo se ve «Zum Angebot» del topbar (y 8–52 px).
- **Alt «digital» (30/10/2026 09:43, hallazgo ALTA de la revisión independiente v4):** los alt del hero, los 4 bonos y la oferta ya no nombran objetos físicos («gedrucktes Heft», «Kartenset», «Notizbuch»…). Ahora dicen «3D-Mockup … als digitales PDF», «(separates digitales PDF)» en el Bonus 1 y «(digitales PDF, im Arbeitsbuch enthalten)» en los Bonos 2–4. Solo cambiaron los alt: diff de texto visible = 0, href y scripts idénticos.
- **Verificación:** 0 overflow en 390×844 y 1440×900, 0 recursos 404, 4 tarjetas de bonos de igual alto en desktop (599 px) y grep de prohibidos/plazos = 0. Las capturas están en `/workspace/SOMBRAS-DACH/capturas/landing-*`.

## Verificación (30/10/2026)
- Grep en `index.html`: 0 apariciones de Order Bump, Basic Edition, Premium Bundle, Master-Ausgabe, Notfall-Kit, Impulskarten, Brief-Ritual, Komplett-Bundle, Meditation, Re-Elterung, countdown, tailwindcss.com, «statt 97», line-through y toast. El 97,00 € solo aparece como «Gesamtwert (Buch + 4 Boni)».
- Link de checkout idéntico al original: `https://pay.hotmart.com/D108259009E?off=5ql0a5p8&checkoutMode=10` (1 vez, con `target="_self"` y `data-utmify-checkout="true"`).
- Pixel, script de UTMs y JS de reenvío presentes byte a byte. El script plano no está. Total de `<script>`: 4 (pixel, UTMs, lightbox, reenvío).
- Capturas en `capturas/`: full page 390×844 y 1440×900, above-the-fold de ambas y lightbox abierto. Se revisaron a ojo. scrollWidth = viewport (sin scroll horizontal). Las 10 imágenes cargan en local y todas tienen alt.
- Los únicos errores de consola son de UTMify intentando enviar a `localhost:3001` (pasa al servirlo en localhost). No es un fallo de la página.

## NO TOCAR (para Antigravity)
- Fila de pagos «Klarna (Rechnung / Sofort) • PayPal • Kreditkarte • Apple Pay • SEPA» y el FAQ de Klarna (texto literal).
- El desfase anuncio vs. landing (H1 y los «4 Schatten» del anuncio). El H1 se mantiene literal.
- Links legales del footer (`href="#"`) y «Widerrufsbelehrung (7 Tage)».
- Claims, testimonios (incl. 'Nein' y «Seite 78»), rating «4.9 / 5 • Über 4.800 Leser…», «Verifizierte Käufe…» y disclaimers.
- Link de checkout y sus atributos.
- Pixel UTMify, script UTMify con `data-utmify-prevent-subids` y JS de reenvío de UTMs (verbatim en `src/scripts-verbatim/`).
- Garantía: exactamente 7 días.
- PDF de bienvenida (no se tocó).

## Pendientes y decisiones para David
1. **Subir el 90-Tage-Plan definitivo a Hotmart cuando exista; hasta entonces la landing promete algo que aún no se entrega: NO activar tráfico/publicar sin decisión de Alfred.** (El PDF de `entregables/` es un borrador de 3 págs.; el definitivo se produce en ~48 h según el brief.) Texto original: Hoy el comprador solo recibe el PDF de bienvenida, y la landing promete el Bonus 1 como PDF aparte.
2. ~~**Portada sin «ultimative»**~~ → resuelto en la landing (B2, ronda 2); la portada oficial nueva todavía lleva «Tiefenpsychologische» en mayúscula, se usó sin editar. Texto original: y con «Tiefenpsychologische» en mayúscula. Conviene rehacer la portada (y el producto en Hotmart) con el nombre único.
3. **Riesgo de doble conteo de bonos:** los Boni 2–4 están dentro del libro (en la landing dice «Im Arbeitsbuch enthalten» con páginas). Si se quiere evitar cualquier objeción, habría que producirlos como PDFs aparte o bajar el Gesamtwert.
4. **Riesgo `off=` en el JS de reenvío:** usa `searchParams.set`, así que si el anuncio trae `off=` o `checkoutMode=` pisaría la oferta 5ql0a5p8. No se tocó, por orden. Recomendación: excluir esas claves del reenvío.
5. **PDF de bienvenida** (revisión #13): paginación rota, nombre «Das Große…», «80-tägige Begleitung» y una lista de bonos/bumps que no cuadra. No se tocó, por orden. Rehacerlo y alinearlo con esta landing.
6. **Testimonio #1 dice «Seite 78»**, pero el Dialog está en S. 60 según el índice. No se tocó (NO TOCAR); decide David.
7. **Rating y «4.800 Leser»:** el Atlas pide solo datos reales y verificables. Se mantienen (NO TOCAR); confirmar que tienen respaldo.
8. **Klarna en el checkout con bumps** (revisión #1) y **links legales `#`** (revisión #3): siguen abiertos, fuera de alcance.
9. ~~Fuentes desde Google Fonts~~ → resuelto: autoalojadas (I1, ronda 2). Texto original: Fuentes Montserrat/Inter cargadas desde Google Fonts (como la referencia). Para DSGVO estricta se pueden alojar en local.
10. El PDF del 90-Tage-Plan conserva su estilo propio (verde/dorado, Cormorant/Jakarta) y no se pasó al Atlas, que es un sistema para la página de venta. Se puede pasar si David lo quiere.
11. **B1/B2 en Hotmart (lo hace Alfred):** subir el 90-Tage-Plan definitivo cuando exista (ver punto 1), y renombrar el producto, el checkout y su imagen a «Das ultimative …».
12. **PDF de bienvenida sin corregir:** nombre «Das Große…», bonos y paginación. No se tocó.
13. **Banner del checkout con el nombre corto:** el checkout de Hotmart sigue con «Das Schattenarbeit & Inneres Kind Arbeitsbuch» hasta que se haga el punto 11.
