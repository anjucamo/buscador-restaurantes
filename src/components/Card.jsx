import React from "react";
import { StarIcon, MapPinIcon, TagIcon } from "@heroicons/react/24/solid";

export default function Card({ restaurante }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-105 duration-300">
      <img
        src={restaurante.imagen}
        alt={restaurante.nombre}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1 text-black dark:text-white">{restaurante.nombre}</h3>
        <p className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-1">
          <MapPinIcon className="h-4 w-4 mr-1 text-red-500" />
          {restaurante.ciudad}
        </p>
        <p className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-1">
          <TagIcon className="h-4 w-4 mr-1 text-green-500" />
          {restaurante.tipo}
        </p>
        <p className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
          <StarIcon className="h-4 w-4 mr-1 text-yellow-400" />
          {restaurante.puntos}
        </p>
      </div>
    </div>
  );
}
