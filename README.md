# Recetapps 🍳

Gestor de recetas de cocina desarrollado como proyecto evaluado final.

## 🎓 Contexto Académico

Este proyecto corresponde al trabajo de la semana 8 evaluado para la asignatura **DESARROLLO FRONTEND II**.

**Objetivo:** Desarrollar una aplicación de página única (SPA) utilizando React, aplicando conceptos avanzados de componentes, *hooks*, enrutamiento y gestión de estado.

## 🚀 Descripción

Recetapps es una aplicación web que permite a los usuarios explorar, visualizar y crear recetas de cocina. La aplicación ofrece una interfaz moderna y responsiva, diseñada para proporcionar una excelente experiencia de usuario.

El proyecto simula una API real utilizando **MSW (Mock Service Worker)**, permitiendo testear funcionalidades de red y manejo de datos asíncronos sin depender de un backend real, incluso en el despliegue en producción.

## 🛠 Tecnologías Utilizadas

*   **Core:** React 19
*   **Build Tool:** Vite
*   **Estilos:** Tailwind CSS 3
*   **Enrutamiento:** React Router DOM 7
*   **HTTP Client:** Axios
*   **Mocking:** Mock Service Worker (MSW)
*   **Testing:** Jest, React Testing Library, Cypress
*   **CI/CD:** GitHub Actions & GitHub Pages

## ✨ Funcionalidades Principales

1.  **Catálogo de Recetas:** Visualización de un listado de recetas disponibles con información resumen (tiempo de preparación, dificultad).
2.  **Detalle de Receta:** Vista detallada de cada receta que muestra ingredientes, pasos de preparación e información nutricional.
3.  **Creación de Recetas:** Formulario interactivo para agregar nuevas recetas al sistema (persistencia simulada).
4.  **Filtrado y Búsqueda:** Capacidad para filtrar recetas por dificultad o buscar por nombre (si implementado).
5.  **Diseño Responsivo:** Adaptable a dispositivos móviles y escritorio.

## 💻 Instalación y Ejecución Local

Sigue estos pasos para correr el proyecto en tu máquina local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/LeaGuty/recetapps.git
    cd recetapps
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

## 🧪 Tests

Para ejecutar las pruebas unitarias y de integración:

```bash
npm run test
```

Para ver el reporte de cobertura:

```bash
npm run test:coverage
```

## 🌍 Despliegue

La aplicación se encuentra desplegada y accesible públicamente en GitHub Pages:

🔗 **[Ver Recetapps Online](https://leaguty.github.io/recetapps/)**
