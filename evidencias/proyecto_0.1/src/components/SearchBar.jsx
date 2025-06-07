import React from "react";

function SearchBar({ value, onChange, className }) {
  return (
    <input
      className={`border p-2 focus:outline-none focus:ring-1 focus:ring-purple-400 transition text-black dark:text-white ${
        className || ""
      }`}
      type="text"
      placeholder="Buscar..."
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchBar;
