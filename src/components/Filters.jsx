import React from "react";

export default function Filters({ ciudad, setCiudad, tipo, setTipo }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-4">
      <select
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
        className="flex-1 p-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
      >
        <option value="">🌍 Todas las ciudades</option>
        <option value="Bogotá">Bogotá</option>
        <option value="Medellín">Medellín</option>
      </select>

      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        className="flex-1 p-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
      >
        <option value="">🍽️ Todos los tipos</option>
        <option value="Italiana">Italiana</option>
        <option value="Mexicana">Mexicana</option>
        <option value="Japonesa">Japonesa</option>
      </select>
    </div>
  );
}
