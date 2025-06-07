import React from "react";

function SearchBar({ value, onChange }) {
  return (
    <input
      className="border p-2 m-4 focus:outline-none focus:ring-1 focus:ring-purple-400 transition"
      type="text"
      placeholder="Buscar..."
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchBar;
