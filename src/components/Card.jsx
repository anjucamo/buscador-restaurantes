import React from "react";

export default function Card({ restaurante }) {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-2xl shadow-xl p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <h2 className="text-xl font-bold mb-2">{restaurante.nombre}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-1">📍 Ciudad: <span className="font-medium">{restaurante.ciudad}</span></p>
      <p className="text-gray-700 dark:text-gray-300 mb-1">🍽️ Tipo: <span className="font-medium">{restaurante.tipo}</span></p>
      <p className="text-yellow-500 font-semibold">⭐ Puntos: {restaurante.puntos}</p>
    </div>
  );
}
