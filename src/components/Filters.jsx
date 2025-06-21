import React from "react";

export default function Filters({ ciudad, setCiudad, tipo, setTipo }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <select
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      >
        <option value="">📍 Ciudad</option>
        <option value="Bogotá">Bogotá</option>
        <option value="Medellín">Medellín</option>
      </select>

      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      >
        <option value="">🍽️ Tipo</option>
        <option value="Italiana">Italiana</option>
        <option value="Mexicana">Mexicana</option>
        <option value="Japonesa">Japonesa</option>
      </select>
    </div>
  );
}
