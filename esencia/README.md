# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
/mi-app
  /public
    - index.html      # Archivo HTML principal
  /src
    /api
      - auth.js        # Funciones para login, registro y autenticación
      - users.js       # Funciones para gestionar usuarios
      - config.js      # Configuración general de la API (baseURL, headers, etc.)
    /assets
      - images         # Para imágenes o recursos estáticos
    /components
      - Header.jsx     # Componente de encabezado
      - Footer.jsx     # Componente de pie de página
      - AuthComponent.jsx # Componente para el formulario de login
    /hooks
      - useAuth.js     # Hook personalizado para gestionar el estado de autenticación
    /pages
      - Home.jsx       # Página principal
      - Login.jsx      # Página de login que usa AuthComponent
      - Dashboard.jsx  # Página de usuario autenticado
    /styles
      - tailwind.css   # Archivos de configuración de TailwindCSS
    /utils
      - apiUtils.js    # Funciones auxiliares para hacer llamadas a la API
    /App.jsx
    /index.js
