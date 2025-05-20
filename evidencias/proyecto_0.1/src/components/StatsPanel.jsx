function StatsPanel({ productos, show }) {
    if (!productos.length) return null;

    const masCaro = productos.reduce((a, b) => a.price > b.price ? a : b);
    const masBarato = productos.reduce((a, b) => a.price < b.price ? a : b);
    const conTituloLargo = productos.filter(p => p.title.length > 20).length;
    const total = productos.reduce((sum, p) => sum + p.price, 0);
    const promedioDescuento = (productos.reduce((sum, p) => sum + p.discountPercentage, 0) / productos.length).toFixed(2);

    return (
      <div
        className={`
          bg-gray-1000/30 p-9 mb-4 rounded-2xl shadow-2xl shadow-black/30  text-white transition-all duration-500 overflow-hidden
          ${show ? 'max-h-96': 'max-h-0 opacity-0'}
        `}
      >
        <p><strong className="text-yellow-300">Más caro:</strong> {masCaro.title} (${masCaro.price})</p>
        <p><strong className="text-green-300">Más barato:</strong> {masBarato.title} (${masBarato.price})</p>
        <p><strong className="text-pink-200">Títulos {'>'} 20 caracteres:</strong> {conTituloLargo}</p>
        <p><strong className="text-orange-200">Total precios:</strong> ${total}</p>
        <p><strong className="text-cyan-200">Prom. descuento:</strong> {promedioDescuento}%</p>
      </div>
    );
}

export default StatsPanel;