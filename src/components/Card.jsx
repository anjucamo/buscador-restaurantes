import React from "react";

export default function Card({ restaurante }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition hover:scale-105 duration-300">
      <img
        src={restaurante.imagen}
        alt={restaurante.nombre}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{restaurante.nombre}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">📍 {restaurante.ciudad}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">⭐ {restaurante.puntos}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">🍽️ {restaurante.tipo}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {restaurante.descripcion}
        </p>
      </div>
    </div>
  );
}
