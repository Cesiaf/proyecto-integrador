import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggle = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    className={`
      relative flex items-center w-16 h-9 rounded-full p-1 border-2
      transition-colors duration-300
      ${theme === "dark"
        ? "bg-gradient-to-r from-gray-700 to-gray-900 border-gray-600"
        : "bg-gradient-to-r from-yellow-200 to-yellow-400 border-yellow-300"}
      shadow-inner
    `}
    style={{ outline: "none" }}
  >
    {/* Slider */}
    <span
      className={`
        absolute top-1 left-1 w-7 h-7 rounded-full shadow-lg flex items-center justify-center
        transition-transform duration-300
        ${theme === "dark"
          ? "translate-x-7 bg-gray-800"
          : "translate-x-0 bg-white"}
      `}
      style={{
        boxShadow: theme === "dark"
          ? "0 2px 8px 0 rgba(0,0,0,0.5)"
          : "0 2px 8px 0 rgba(255,193,7,0.3)"
      }}
    >
      {theme === "dark" ? (
        <MoonIcon className="w-5 h-5 text-yellow-300" />
      ) : (
        <SunIcon className="w-5 h-5 text-yellow-500" />
      )}
    </span>
    {/* Espacio para accesibilidad */}
    <span className="sr-only">
      {theme === "dark" ? "Modo oscuro" : "Modo claro"}
    </span>
  </button>
);

export default ThemeToggle;