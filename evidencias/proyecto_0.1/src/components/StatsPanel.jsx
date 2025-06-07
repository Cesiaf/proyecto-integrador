function StatsPanel({ productos, show }) {
  if (!productos.length) return null;

  // Agrupar productos por categoría
  const porCategoria = productos.reduce((acc, p) => {
    acc[p.category] = acc[p.category] || [];
    acc[p.category].push(p);
    return acc;
  }, {});

  // Precio promedio general
  const precioPromedioGeneral = (
    productos.reduce((sum, p) => sum + p.price, 0) / productos.length
  ).toFixed(2);

  // Promedio de rating general
  const ratingPromedioGeneral = (
    productos.reduce((sum, p) => sum + p.rating, 0) / productos.length
  ).toFixed(2);

  // Productos con stock > 50 y rating > 4.5
  const productosStockRating = productos.filter(
    (p) => p.stock > 50 && p.rating > 4.5
  ).length;

  // Estadísticas por categoría
  const statsPorCategoria = Object.entries(porCategoria).map(([cat, arr]) => {
    const precioProm = (
      arr.reduce((sum, p) => sum + p.price, 0) / arr.length
    ).toFixed(2);
    const precioMax = Math.max(...arr.map((p) => p.price));
    const precioMin = Math.min(...arr.map((p) => p.price));
    const ratingProm = (
      arr.reduce((sum, p) => sum + p.rating, 0) / arr.length
    ).toFixed(2);
    return {
      categoria: cat,
      cantidad: arr.length,
      precioProm,
      precioMax,
      precioMin,
      ratingProm,
    };
  });

  const masCaro = productos.reduce((a, b) => (a.price > b.price ? a : b));
  const masBarato = productos.reduce((a, b) => (a.price < b.price ? a : b));
  const conTituloLargo = productos.filter((p) => p.title.length > 20).length;
  const total = productos.reduce((sum, p) => sum + p.price, 0);
  const promedioDescuento = (
    productos.reduce((sum, p) => sum + p.discountPercentage, 0) /
    productos.length
  ).toFixed(2);

  return (
    <div
      className={`
        bg-white/80 dark:bg-gray-900/80 p-9 mb-4 rounded-2xl shadow-2xl shadow-black/30
        text-gray-900 dark:text-white transition-all duration-500 overflow-hidden
        ${show ? "max-h-[1000px]" : "max-h-0 opacity-0"}
      `}
    >
      <p>
        <strong className="text-yellow-700 dark:text-yellow-300">
          Más caro:
        </strong>{" "}
        {masCaro.title} (${masCaro.price})
      </p>
      <p>
        <strong className="text-green-700 dark:text-green-300">
          Más barato:
        </strong>{" "}
        {masBarato.title} (${masBarato.price})
      </p>
      <p>
        <strong className="text-pink-700 dark:text-pink-200">
          Títulos {">"} 20 caracteres:
        </strong>{" "}
        {conTituloLargo}
      </p>
      <p>
        <strong className="text-orange-700 dark:text-orange-200">
          Total precios:
        </strong>{" "}
        ${total}
      </p>
      <p>
        <strong className="text-cyan-700 dark:text-cyan-200">
          Prom. descuento:
        </strong>{" "}
        {promedioDescuento}%
      </p>
      <hr className="my-2 border-gray-300 dark:border-gray-500" />
      <p>
        <strong className="text-blue-700 dark:text-blue-300">
          Precio promedio general:
        </strong>{" "}
        ${precioPromedioGeneral}
      </p>
      <p>
        <strong className="text-blue-700 dark:text-blue-300">
          Promedio rating general:
        </strong>{" "}
        {ratingPromedioGeneral}
      </p>
      <p>
        <strong className="text-purple-700 dark:text-purple-300">
          Productos con stock &gt; 50 y rating &gt; 4.5:
        </strong>{" "}
        {productosStockRating}
      </p>
      <hr className="my-2 border-gray-300 dark:border-gray-500" />
      <div>
        <strong className="text-yellow-700 dark:text-yellow-200">
          Estadísticas por categoría:
        </strong>
        <ul className="ml-4 list-disc">
          {statsPorCategoria.map((stat) => (
            <li key={stat.categoria} className="mb-2">
              <span className="font-semibold">{stat.categoria}:</span>
              <span className="ml-2">Cantidad: {stat.cantidad}, </span>
              <span>Precio promedio: ${stat.precioProm}, </span>
              <span>Precio máx: ${stat.precioMax}, </span>
              <span>Precio mín: ${stat.precioMin}, </span>
              <span>Prom. rating: {stat.ratingProm}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StatsPanel;
