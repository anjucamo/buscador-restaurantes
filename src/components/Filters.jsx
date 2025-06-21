import React from "react";

export default function Filters({ city, setCity, rating, setRating, foodType, setFoodType, darkMode }) {
  const base = "flex-1 p-2 rounded border";

  const style = darkMode
    ? "bg-gray-900 text-white border-gray-700"
    : "bg-gray-100 text-black border-gray-300";

  return (
    <div className="flex flex-col md:flex-row gap-2 mt-4">
      <select value={city} onChange={(e) => setCity(e.target.value)} className={`${base} ${style}`}>
        <option value="">Ciudad</option>
        <option value="Bogotá">Bogotá</option>
        <option value="Medellín">Medellín</option>
        <option value="Cali">Cali</option>
      </select>

      <select value={rating} onChange={(e) => setRating(e.target.value)} className={`${base} ${style}`}>
        <option value="">Puntos</option>
        <option value="5">5 estrellas</option>
        <option value="4">4 estrellas</option>
        <option value="3">3 estrellas</option>
      </select>

      <select value={foodType} onChange={(e) => setFoodType(e.target.value)} className={`${base} ${style}`}>
        <option value="">Comida</option>
        <option value="Italiana">Italiana</option>
        <option value="Mexicana">Mexicana</option>
        <option value="Japonesa">Japonesa</option>
      </select>
    </div>
  );
}
