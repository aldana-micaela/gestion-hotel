# 🏨 Proyecto Web - Gestión Hotelera

Este proyecto consiste en una aplicación web estática para simular la gestión de un hotel. Ofrece funcionalidades como registro de usuarios, búsqueda de habitaciones, reservas, pagos y un sistema de reclamos. Desarrollado como trabajo académico, el diseño del sitio se organizó en múltiples vistas específicas y con estilos individuales por componente.

## 🧠 Tecnologías y conceptos aplicados
- HTML5 – Estructura de las páginas (index.html, registro.html, login.html, busqueda.html, etc.)
- CSS3 – Estilos personalizados y por componente (registro.css, pago.css, style-footer.css, etc.)
- Diseño modular – Separación clara de contenido, estilo y estructura por página
- Formularios web – Para registro, login, pagos y reclamos
- Carrito de reservas – Simulación de funcionalidad tipo ecommerce
- Usabilidad y diseño – Distribución clara con encabezado, pie de página y menú de navegación
- Selenium (archivo .side) – Automatización o testeo de interfaz con Selenium IDE

## ✨ Características del sitio

- Página de inicio (`index.html`)
- Registro de usuarios (`registro.html`)
- Inicio de sesión (`login.html`)
- Búsqueda de habitaciones (`busqueda.html`)
- Carrito de reserva y detalles de pago (`carrito.html`, `pago.html`)
- Sistema de reclamos (`reclamos.html`)
- Encabezado y pie de página reutilizables
- Estilos personalizados por vista (`registro.css`, `style-main.css`, etc.)
- Tests automáticos con Selenium IDE (`HAT.side`)

## 🛠️ Tecnologías utilizadas

- **HTML5** – Estructura de cada vista
- **CSS3** – Estilos personalizados, separados por función
- **Usabilidad** – Navegación clara y visual coherente
- **Automatización** – Pruebas mediante archivo `.side` con Selenium IDE

## 📂 Estructura del proyecto

```text
gestion-hotel/
│
├── html/
│   ├── index.html
│   ├── registro.html
│   ├── login.html
│   ├── busqueda.html
│   ├── carrito.html
│   ├── pago.html
│   └── reclamos.html
│
├── css/
│   ├── style.css
│   ├── style-header.css
│   ├── style-footer.css
│   ├── registro.css
│   ├── login.css
│   ├── pago.css
│   ├── reclamos.css
│   └── ...
│
├── icons/
│   └── button.png
│
├── HAT.side                # Archivo de automatización Selenium IDE
└── README.md
```

## 🔧 Cosas por mejorar
- Implementar backend con PHP, Python o Node.js para funcionalidad real.
- Validaciones de formulario más robustas con JavaScript.
- Conexión a base de datos para persistencia de usuarios y reservas.
- Responsividad para dispositivos móviles.
- Integrar pasarela de pagos simulada (ej: Mercado Pago sandbox).

## 👩‍💻 Autoría
Aldana Micaela filiberto, Juliana Nuñez, Gastón villalba y Leandro Franco, estudiantes de Licenciatura en Sistemas

---
Este sitio fue desarrollado como parte de una práctica académica enfocada en la estructuración de sitios web informativos y funcionales para contextos reales.
