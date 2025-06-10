import React from "react";

function AdvancedFilter({
  categorias,
  categoriaSeleccionada,
  onCategoriaChange,
  orden,
  onOrdenChange,
}) {
  return (
    <>
      {/* Filtro por categoría */}
      <select
        className="h-10 border rounded px-3 py-2"
        value={categoriaSeleccionada}
        onChange={(e) => onCategoriaChange(e.target.value)}
      >
        <option value="">Todas las categorías</option>
        {categorias.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
      {/* Ordenamiento */}
      <select
        className="h-10 border rounded px-3 py-2"
        value={orden}
        onChange={(e) => onOrdenChange(e.target.value)}
      >
        <option value="">Ordenar por...</option>
        <option value="precio-asc">Precio: menor a mayor</option>
        <option value="precio-desc">Precio: mayor a menor</option>
        <option value="rating-asc">Rating: menor a mayor</option>
        <option value="rating-desc">Rating: mayor a menor</option>
      </select>
    </>
  );
}

export default AdvancedFilter;
