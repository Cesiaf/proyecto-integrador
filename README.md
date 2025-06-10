# 📦 Catálogo de Productos - React + Vite + Tailwind + Axios

Este proyecto es un catálogo interactivo de productos construido con React, Vite, Tailwind CSS y Axios. Permite consultar productos desde una API pública, filtrarlos, ordenarlos, visualizar estadísticas dinámicas y gráficos, y alternar entre modo claro/oscuro.

## 🚀 Tecnologías usadas

- ⚛️ **React + Vite**
- 🎨 **Tailwind CSS**
- 🌐 **Axios**
- 📊 **Recharts** (para gráficos)
- 💡 **API utilizada:** [https://dummyjson.com/products](https://dummyjson.com/products)

## 📋 Requisitos previos

Antes de instalar y ejecutar este proyecto, se de tener instalado:

- **Node.js** (versión 18.x o superior recomendada)  
  Descarga desde: https://nodejs.org/
- **npm** (incluido con Node.js)
- (Opcional) **Git** para clonar el repositorio  
  Descarga desde: https://git-scm.com/

## 🧰 Instalación y ejecución del proyecto

1. **Clona el repositorio o descarga el proyecto.**

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Ejecuta el proyecto localmente:**
   ```bash
   npm run dev
   ```

4. Abre tu navegador en `http://localhost:5173/` (o el puerto indicado por Vite).

## 🧠 Funcionalidades implementadas

✅ Consulta de productos desde la API pública.  
✅ Visualización dinámica de productos en tarjetas.  
✅ Filtro de búsqueda por nombre.  
✅ Filtro avanzado por categoría y ordenamiento (precio/rating).  
✅ Paginación de resultados (8 productos por página).  
✅ Estadísticas dinámicas y panel de gráficos (barras, líneas, pie chart).  
✅ Componentes reutilizables (`ProductList`, `ThemeToggle`, `StatsPanel`, `ChartsPanel`, `AdvancedFilter`, `Pagination`).  
✅ Alternancia de tema claro/oscuro con persistencia.  
✅ Estilos aplicados con Tailwind y animaciones CSS.  
✅ Exportación de productos filtrados a JSON y CSV.

## 📊 Estadísticas implementadas

- Producto más caro y más barato (título + precio)
- Cantidad de títulos largos (>20 caracteres)
- Total sumado de precios
- Promedio de descuento (%)
- Panel de gráficos: 
  - Cantidad por categoría (barras)
  - Evolución de precios (líneas)
  - Proporción de stock (pie)

Estadísticas y gráficos se actualizan automáticamente según los filtros y la búsqueda.

## 🧩 Estructura de componentes

- **`App.jsx`**  
  Componente principal. Maneja el estado global de productos, filtros, paginación, tema, mensajes y coordina la renderización del catálogo y paneles.

- **`ProductList.jsx`**  
  Recibe la lista de productos a mostrar. Presenta cada producto en una tarjeta responsive.

- **`StatsPanel.jsx`**  
  Calcula y muestra estadísticas de los productos filtrados.

- **`ChartsPanel.jsx`**  
  Panel de gráficos dinámicos según los productos filtrados.

- **`AdvancedFilter.jsx`**  
  Permite filtrar por categoría y ordenar por precio o rating.

- **`SearchBar.jsx`**  
  Barra de búsqueda por nombre.

- **`Pagination.jsx`**  
  Navegación de páginas de productos.

- **`ThemeToggle.jsx`**  
  Alterna el modo claro/oscuro.

## 🎨 Estilos y animaciones

- Tailwind 4.1.7 configurado correctamente.
- Animaciones personalizadas, transiciones suaves, y efectos de hover.
- Sección de estadísticas y gráficos con diseño destacado.
- Responsive para distintos tamaños de pantalla.

## ✅ Validaciones

- Si la búsqueda está vacía, se muestran todos los productos.
- El filtrado es dinámico y no destructivo.
- Estadísticas y gráficos reflejan siempre el estado de los productos filtrados.
- Mensaje amigable si no se encuentran productos.

## ✨ Autor

- Cesia Fiorella Cáceres Giménez

