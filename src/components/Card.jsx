import React from "react";

export default function Card({ restaurant, darkMode }) {
  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-lg border ${
        darkMode
          ? "bg-gray-900 text-white border-gray-700 hover:bg-gray-800"
          : "bg-white text-black border-gray-200 hover:bg-gray-100"
      } transition transform hover:scale-[1.01]`}
    >
      <div className="h-40 bg-cover bg-center" style={{
        backgroundImage: `url('https://source.unsplash.com/400x300/?restaurant,food')`
      }}></div>

      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">{restaurant.name}</h2>
          <span className="text-xs bg-yellow-400 text-black font-semibold px-2 py-1 rounded-full">
            {restaurant.points} ⭐
          </span>
        </div>

        <p className="text-sm text-gray-400 italic mt-1">
          {restaurant.city} • {restaurant.foodType}
        </p>

        <p className="text-sm mt-2">{restaurant.description}</p>

        <button
          className={`mt-3 px-4 py-1 text-sm rounded-full font-medium ${
            darkMode ? "bg-blue-600 hover:bg-blue-500" : "bg-blue-500 hover:bg-blue-400"
          } text-white`}
        >
          Ver más
        </button>
      </div>
    </div>
  );
}
