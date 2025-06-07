import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import StatsPanel from './components/StatsPanel';

function App() {
  // Estado para almacenar la lista de productos obtenidos de la API
  const [productos, setProductos] = useState([]);
  // Estado para el texto de búsqueda ingresado por el usuario
  const [busqueda, setBusqueda] = useState("");
  // Estado para mostrar u ocultar el panel de estadísticas
  const [showStats, setShowStats] = useState(false);

  // Filtra los productos según el texto de búsqueda (case-insensitive)
  const filtrados = productos.filter((p) =>
    p.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Efecto que se ejecuta una sola vez al montar el componente
  // Realiza una petición GET a la API para obtener los productos
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProductos(res.data.products))
      .catch((err) => console.error(err));
  }, []);

  return (
    // Contenedor principal con estilos de Tailwind CSS
    <div className="min-h-screen flex items-center justify-center px-30 pb-40">
      <div className="max-w-6xl mx-auto w-full">
        {/* Título del catálogo */}
        <h1 className="text-base font-bold mb-6 pt-16 text-center text-white font-serif">
          Catálogo de Productos
        </h1>
        {/* Input para búsqueda de productos */}
        <input
          className="border p-2 m-4 focus:outline-none focus:ring-1 focus:ring-purple-400 transition"
          type="text"
          placeholder="Buscar..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        {/* Botón para mostrar/ocultar el panel de estadísticas */}
        <button
          className="border px-4 py-2 rounded bg-gray-100 mb-4 
          active:scale-95 transition shadow-md shadow-black/30"
          onClick={() => setShowStats((s) => !s)}
        >
          {showStats ? "Ocultar estadísticas" : "Mostrar estadísticas"}
        </button>
        {/* Panel de estadísticas, visible según el estado showStats */}
        {<StatsPanel productos={filtrados} show={showStats} />}
        {/* Mensaje de advertencia si no hay productos filtrados */}
        {filtrados.length === 0 && busqueda.trim() !== "" && (
          <div className='text-center text-red-500 font-semibold my-4'>
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