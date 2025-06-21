import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm, darkMode }) {
  return (
    <input
      type="text"
      placeholder="Buscar..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className={`w-full p-2 rounded border ${
        darkMode
          ? "bg-gray-900 text-white border-gray-700 placeholder-gray-400"
          : "bg-gray-100 text-black border-gray-300 placeholder-gray-600"
      }`}
    />
  );
}
