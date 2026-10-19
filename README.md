# Visión Clara — Template de Óptica

Landing page multipágina para ópticas, construida con **HTML + Tailwind CSS + JavaScript nativo**. Diseño profesional, animaciones fluidas y datos mockeados listos para personalizar.

## 🚀 Inicio rápido

Solo abre `index.html` en tu navegador. No requiere build step ni dependencias locales (Tailwind y fuentes se cargan vía CDN).

```bash
# Opción 1: Abrir directamente
Doble clic en index.html

# Opción 2: Servidor local (recomendado)
python -m http.server 8000
# o
npx serve .
```

Luego visita `http://localhost:8000`.

## 📁 Estructura

```
optica-01/
├── index.html                  # Pantalla de inicio
├── nosotros.html               # Sobre nosotros
├── servicios.html              # Nuestros servicios
├── precios.html                # Planes y precios
├── galeria.html                # Galería con filtros + lightbox
├── horario-clases.html         # Horario de clases (terapia visual)
├── contacto.html               # Contacto + formulario + mapa
├── privacidad.html             # Políticas de privacidad
├── terminos.html               # Términos y condiciones
├── README.md
│
└── assets/
    ├── css/
    │   └── styles.css          # Tema, animaciones y componentes custom
    ├── js/
    │   ├── data.js             # 📦 TODOS los datos mockeados
    │   ├── components.js       # Inyección de navbar y footer
    │   ├── animations.js       # IntersectionObserver + contadores
    │   ├── main.js             # Render dinámico de secciones
    │   └── contact.js          # Validación y envío del formulario
    └── img/
        └── (vacío - usa imágenes externas)
```

## 🎨 Personalización

### 1. Cambiar la marca y datos

Edita **`assets/js/data.js`**. Es un único objeto `window.MOCK` con toda la información:

```js
window.MOCK = {
  brand: { name: 'Tu óptica', tagline: '...' },
  nav: [...],
  hero: { ... },
  services: [...],
  pricing: { tiers: [...], extras: [...] },
  gallery: [...],
  team: [...],
  testimonials: [...],
  schedule: { classes: [...] },
  contact: { phone, email, address, ... },
  hours: [...],
  history: [...],
  values: [...],
  brands: [...],
  faq: [...]
}
```

Cambia textos, imágenes (URLs), precios, horarios, etc. La web se actualiza automáticamente.

### 2. Cambiar la paleta de colores

Edita las variables CSS en **`assets/css/styles.css`** (`:root`) y la config de Tailwind en cada HTML:

```css
:root {
  --color-primary: #0ea5e9;
  --color-primary-dark: #0369a1;
  --color-secondary: #06b6d4;
  --color-dark: #0c4a6e;
  --color-light: #f0f9ff;
  --color-accent: #facc15;
}
```

Y en cada `<script>tailwind.config</script>` (en los HTML):

```js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: { /* tus colores */ }
      }
    }
  }
}
```

### 3. Reemplazar imágenes

Las imágenes vienen de **Unsplash** por defecto. Puedes:

- Reemplazar las URLs en `data.js` por tus propias imágenes.
- O descargar las imágenes y servirlas localmente desde `assets/img/`.

Las URLs siguen el patrón:
```
https://images.unsplash.com/photo-{ID}?w={ancho}&auto=format&fit=crop&q=80
```

### 4. Añadir/quitar páginas de navegación

Edita el array `nav` en `data.js`. El navbar y footer se regeneran automáticamente en todas las páginas.

### 5. Personalizar textos legales

Edita directamente `privacidad.html` y `terminos.html`. Ambos tienen:
- Sidebar con TOC automático
- Scroll-spy
- Estilos optimizados para lectura larga

## ✨ Características

- **Multi-página** (9 HTML separados) con navbar/footer compartidos
- **Tailwind CSS via CDN** (Play CDN, sin build step)
- **JS nativo** — sin frameworks ni librerías externas
- **Animaciones nativas** con `IntersectionObserver`
- **Contadores animados** con `requestAnimationFrame`
- **Lightbox nativo** con `<dialog>` HTML5
- **Filtros de galería** sin dependencias
- **Formulario con validación** JS nativa (no backend)
- **Diseño responsive** mobile-first
- **SEO básico** (meta tags, Open Graph, semantic HTML)
- **Accesibilidad** (aria-labels, focus visible, contraste WCAG)
- **Reduced motion** respetado
- **Lazy loading** en imágenes
- **Favicon SVG inline** (data URI)

## 🧩 Stack técnico

| Capa | Tecnología |
|------|------------|
| Markup | HTML5 semántico |
| Estilos | Tailwind CSS 3 (CDN) + CSS custom |
| Lógica | JavaScript ES6+ nativo |
| Animaciones | CSS transitions + IntersectionObserver |
| Iconos | SVG inline |
| Imágenes | Unsplash (URL) / configurables |
| Fuentes | Google Fonts (Inter, Playfair Display) |

## 📦 Sin build step

Este template está pensado para ser **fácilmente editable**:

- ✅ Abre `index.html` directamente en el navegador y funciona.
- ✅ Sin `node_modules`, sin compiladores, sin configuración.
- ✅ Cambias algo en `data.js` y se refleja en toda la web.
- ✅ Si quieres desplegar: sube todos los archivos a cualquier hosting estático (Netlify, Vercel, GitHub Pages, S3, etc.).

## 🛠️ Para producción (opcional)

Si quieres migrar a un build real con Tailwind compilado:

```bash
npm init -y
npm install -D tailwindcss
npx tailwindcss init
```

Configura `tailwind.config.js` para escanear todos los `.html` y compila:

```bash
npx tailwindcss -i assets/css/styles.css -o assets/css/output.css --watch
```

Y reemplaza el CDN por `<link rel="stylesheet" href="assets/css/output.css">`.

## 📞 Datos de contacto mockeados

- **Marca:** Visión Clara
- **Dirección:** Av. Providencia 123, Providencia, Santiago, Chile
- **Teléfono:** +56 2 2345 6789
- **WhatsApp:** +56 9 1234 5678
- **Email:** hola@visionclara.cl

Los contactos son ejemplos de Chile y deben reemplazarse por los datos reales del negocio antes de publicar. Edita `data.js` para actualizar la página de contacto, el mapa, el pie de página y los enlaces de llamada.

Los precios son referenciales en pesos chilenos (CLP), no una conversión de moneda. Se guardan como números enteros y se muestran con separador de miles chileno (por ejemplo, $89.900).

## 📸 Créditos de imágenes

Las imágenes del template son de [Unsplash](https://unsplash.com) — fotógrafos que las hicieron gratuitas bajo la licencia Unsplash:

- `photo-1574258495973-f010dfbb5371` — Optometrista
- `photo-1587825140708-dfaf72ae4b04` — Recepción óptica
- `photo-1572635196237-14db3eb47945` — Gafas de sol
- `photo-1559839734-2b71ea197ec2` — Equipo médico
- y otros (ver `data.js` para todas las URLs)

Reemplázalas por tus propias imágenes antes de usar en producción.

## 📄 Licencia

Este template se entrega tal cual, para uso libre en proyectos comerciales y personales. Las imágenes de Unsplash mantienen sus respectivas licencias.
