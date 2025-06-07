// components/ThemeToggle.jsx

import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

/*ThemeToggle (Componente de botón para alternar entre los temas claro y oscuro.)*/
const ThemeToggle = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    className={`
            flex items-center w-14 h-8 rounded-full p-1 transition-colors duration-300
            ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}
        `}
  >
    {/* Indicador deslizante con ícono de tema */}
    <span
      className={`
                flex items-center justify-center w-6 h-6 rounded-full shadow-md transform
                transition-transform duration-300
                ${
                  theme === "dark"
                    ? "translate-x-6 bg-yellow-400"
                    : "translate-x-0 bg-white"
                }
            `}
    >
      {theme === "dark" ? (
        // Ícono de luna para modo oscuro
        <MoonIcon className="w-5 h-5 text-gray-800" />
      ) : (
        // Ícono de sol para modo claro
        <SunIcon className="w-5 h-5 text-yellow-400" />
      )}
    </span>
  </button>
);

export default ThemeToggle;
