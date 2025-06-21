import React from "react";

export default function SearchBar({ busqueda, setBusqueda }) {
  return (
    <input
      type="text"
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      placeholder="🔍 Buscar restaurante"
      className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
