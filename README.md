

# 📦 Catálogo de Productos - React + Vite + Tailwind + Axios

Este proyecto forma parte de la **Evidencia 01**, cuyo objetivo es configurar un entorno moderno utilizando React con Vite, Tailwind CSS y Axios. Se realiza fetching de productos desde una API pública y se visualizan junto con estadísticas dinámicas.

## 🚀 Tecnologías usadas

⚛️ React + Vite
    
🎨 Tailwind CSS
    
🌐 Axios
    
💡 API utilizada: [https://dummyjson.com/products](https://dummyjson.com/products)
    

## 🧰 Instalación y ejecución del proyecto

1.  **Clona el repositorio o descomprime la carpeta del proyecto.**
    
2.  **Instala las dependencias**:
    
    ```bash
    npm install
    
    ```
    
3.  **Ejecuta el proyecto localmente**:
    
    ```bash
    npm run dev
    
    ```
    
4.  Abre tu navegador en `http://localhost:5173/` (puede variar el puerto).

 ## 🧠 Funcionalidades implementadas

✅ Fetching de productos desde `https://dummyjson.com/products`  con Axios.
    
✅ Visualización dinámica de productos en tarjetas.
    
✅ Filtro de búsqueda por nombre.
    
✅ Estadísticas basadas en productos filtrados.
    
✅ Componentes reutilizables (`ProductList`  y `StatsPanel`).
    
✅ Estilos aplicados con Tailwind CSS.
    
✅ Animaciones al mostrar productos y estadísticas.
    
## 📊 Estadísticas implementadas

En la sección de estadísticas se muestran datos dinámicos generados a partir de los productos filtrados:

🟡 **Producto más caro** (título + precio)
    
🟢 **Producto más barato** (título + precio)
    
💖 **Cantidad de títulos con más de 20 caracteres**
    
🧮 **Total de precios sumados**
    
📉 **Promedio de descuento (%)**
    

Estas estadísticas se actualizan automáticamente al buscar productos por su título.

## 🧩 Estructura de componentes

El proyecto está dividido en componentes reutilizables:

### `App.jsx`

-   Componente principal.
    
-   Usa `useEffect` y `useState` para hacer el fetching de la API con Axios.
    
-   Controla el estado de los productos y el filtro de búsqueda.
    
-   Incluye botón para mostrar/ocultar estadísticas.
    

### `ProductList.jsx`

-   Recibe la lista de productos como `props`.
    
-   Muestra los productos en tarjetas (`card`) usando clases de Tailwind.
    
-   Diseño responsive usando grillas (`grid-cols-2` y `md:grid-cols-4`).
    

### `StatsPanel.jsx`

-   Recibe los productos filtrados como `props`.
    
-   Calcula y muestra estadísticas dinámicas.
    
-   Incluye animaciones y fondo diferenciado para destacar la sección.

## 🎨 Estilos y animaciones

-   Tailwind está configurado correctamente (ver clases como `text-center`, `grid`, `shadow`, etc.).
    
-   Se incluyeron estilos personalizados como `.animate-fadeIn`.
    
-   La sección de estadísticas tiene fondo, sombra y transición (`transition-all`, `shadow-2xl`).
    
-   Las tarjetas de producto tienen efecto hover y animación al aparecer (`hover:scale-105`, `group-hover:rotate-3`).


## ✅ Validaciones

-   Cuando el campo de búsqueda está vacío, se muestran **todos los productos** sin errores.
    
-   El filtrado es **dinámico y no destructivo**.
    
-   Las estadísticas se basan en los productos **actualmente filtrados**, no en toda la lista.
    
## ✨ Autor

-   Cesia Fiorella Cáceres Giménez
    
