import React from "react";

export default function SearchBar({ busqueda, setBusqueda }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="🔍 Buscar restaurante..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      />
    </div>
  );
}
