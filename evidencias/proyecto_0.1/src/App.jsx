import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import StatsPanel from "./components/StatsPanel";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import AdvancedFilter from "./components/AdvancedFilter";
import ChartsPanel from "./components/ChartsPanel";

// Exportar productos a JSON
function exportToJSON(data, filename = "productos.json") {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// Exportar productos a CSV
function exportToCSV(data, filename = "productos.csv") {
  if (!data.length) return;
  const keys = Object.keys(data[0]);
  const csv = [
    keys.join(","),
    ...data.map(row => keys.map(k => `"${row[k]}"`).join(","))
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function App() {
  // Estado para almacenar la lista de productos obtenidos de la API
  const [productos, setProductos] = useState([]);
  // Estado para mostrar u ocultar el panel de estadísticas
  const [showStats, setShowStats] = useState(false);
  // Estado para la búsqueda
  const [busqueda, setBusqueda] = useState("");
  // Estado para el tema (claro/oscuro)
  const [theme, setTheme] = useState("light");
  // Estado para la categoría seleccionada
  const [categoria, setCategoria] = useState("");
  // Estado para el orden seleccionado
  const [orden, setOrden] = useState("");
  // Estado para mensajes de éxito/error
  const [mensaje, setMensaje] = useState(null);

  // Obtener categorías únicas
  const categorias = Array.from(new Set(productos.map((p) => p.category)));

  // Filtrado y ordenamiento combinados
  const filtrados = productos
    .filter((p) => p.title.toLowerCase().includes(busqueda.toLowerCase()))
    .filter((p) => (categoria ? p.category === categoria : true))
    .sort((a, b) => {
      if (orden === "precio-asc") return a.price - b.price;
      if (orden === "precio-desc") return b.price - a.price;
      if (orden === "rating-asc") return a.rating - b.rating;
      if (orden === "rating-desc") return b.rating - a.rating;
      return 0;
    });

  // Inicializar tema desde localStorage o preferencia del sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));
  }, []);

  // Aplicar clase de tema al html y guardar en localStorage
  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("dark", "light");
    html.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Alternar tema claro/oscuro
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // Obtener productos de la API al montar el componente
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProductos(res.data.products))
      .catch((err) => setMensaje("Error al cargar productos."));
  }, []);

  // Limpiar mensaje después de 3 segundos
  useEffect(() => {
    if (mensaje) {
      const timer = setTimeout(() => setMensaje(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [mensaje]);

  return (
    <div className="min-h-screen flex items-center justify-center px-30 pb-40 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto w-full">
        {/* Toggle de tema */}
        <div className="bg-white dark:bg-gray-900 px-4 py-4 space-y-4 text-indigo-600 dark:text-indigo-200">
          <div className="pt-2 flex justify-end">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
        {/* Título del catálogo */}
        <h1 className="text-base font-bold mb-6 pt-16 text-center font-serif">
          Catálogo de Productos
        </h1>
        {/* Mensaje de éxito/error */}
        {mensaje && (
          <div className="mb-4 text-center text-green-600 dark:text-green-300 font-semibold">
            {mensaje}
          </div>
        )}
        {/* Contenedor flex para búsqueda, filtro y botón */}
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <SearchBar
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="h-10 flex-1 min-w-[200px]"
          />
          <AdvancedFilter
            categorias={categorias}
            categoriaSeleccionada={categoria}
            onCategoriaChange={setCategoria}
            orden={orden}
            onOrdenChange={setOrden}
          />
          <button
            className="h-10 border px-4 py-2 rounded bg-gray-100 dark:bg-gray-800
            active:scale-95 transition shadow-md shadow-black/30 flex items-center"
            onClick={() => setShowStats((s) => !s)}
          >
            {showStats ? "Ocultar estadísticas" : "Mostrar estadísticas"}
          </button>
        </div>
        {/* Botones de exportación */}
        <div className="flex gap-2 mb-4">
          <button
            className="border px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600"
            onClick={() => {
              try {
                exportToJSON(filtrados);
                setMensaje("¡Exportación a JSON exitosa!");
              } catch {
                setMensaje("Error al exportar a JSON.");
              }
            }}
          >
            Exportar JSON
          </button>
          <button
            className="border px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => {
              try {
                exportToCSV(filtrados);
                setMensaje("¡Exportación a CSV exitosa!");
              } catch {
                setMensaje("Error al exportar a CSV.");
              }
            }}
          >
            Exportar CSV
          </button>
        </div>
        {/* Panel de estadísticas, visible según el estado showStats */}
        <StatsPanel productos={filtrados} show={showStats} />
        {/* Panel de gráficos, visible según el estado showStats */}
        {showStats && <ChartsPanel productos={filtrados} />}
        {/* Mensaje de advertencia si no hay productos filtrados */}
        {filtrados.length === 0 && busqueda.trim() !== "" && (
          <div className="text-center text-red-500 font-semibold my-4">
            No se encontraron productos que coincidan con "{busqueda}".
          </div>
        )}
        {/* Lista de productos filtrados */}
        <ProductList productos={filtrados} />
      </div>
    </div>
  );
}

export default App;