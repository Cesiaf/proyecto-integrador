import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import StatsPanel from './components/StatsPanel';

function App() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [showStats, setShowStats] = useState(false);

  const filtrados = productos.filter(p =>
    p.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProductos(res.data.products))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-30 pb-40">
      <div className="max-w-6xl mx-auto w-full">
      <h1 className="text-base font-bold mb-6 pt-16 text-center text-white font-serif">
        Catálogo de Productos
      </h1>       
      <input className="border p-2 m-4 focus:outline-none focus:ring-1 focus:ring-purple-400 transition"
          type="text"
          placeholder="Buscar..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
        <button
          className="border px-4 py-2 rounded bg-gray-100 mb-4 
          active:scale-95 transition shadow-md shadow-black/30"
          onClick={() => setShowStats(s => !s)}
        >
          {showStats ? 'Ocultar estadísticas' : 'Mostrar estadísticas'}
        </button>
        {<StatsPanel productos={filtrados} show={showStats} />}
        <ProductList productos={filtrados} />
      </div>
    </div>
  );
}

export default App;