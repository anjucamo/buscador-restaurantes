import React, { useState } from "react";

export default function RestaurantDetail({ restaurant, onBack, darkMode }) {
  const [review, setReview] = useState("");

  const handleSendReview = () => {
    alert(`Tu reseña fue enviada: ${review}`);
    setReview("");
  };

  const baseBox = `p-4 rounded mb-4 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`;

  return (
    <div className="p-4">
      <button onClick={onBack} className="mb-4 text-blue-400 underline">
        ← Volver
      </button>

      <h2 className="text-2xl font-bold mb-2">{restaurant.name}</h2>

      <p className="mb-2 text-sm italic text-gray-400">
        {restaurant.city} - {restaurant.points} ⭐
      </p>

      <p className="mb-4 text-sm">{restaurant.description}</p>

      <div className={baseBox}>
        <p className="mb-2 font-semibold">Carta (PDF):</p>
        <iframe
          src={restaurant.cartaPdf}
          className="w-full h-64 border rounded"
          title="Carta del restaurante"
        ></iframe>
      </div>

      <div className={baseBox}>
        <p className="mb-2 font-semibold">Escribe tu reseña:</p>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className={`w-full p-2 rounded border ${
            darkMode
              ? "bg-black text-white border-gray-600"
              : "bg-white text-black border-gray-300"
          }`}
          rows={4}
        />
        <button
          onClick={handleSendReview}
          className={`mt-2 px-4 py-2 rounded ${
            darkMode ? "bg-blue-600 hover:bg-blue-500" : "bg-blue-500 hover:bg-blue-400 text-white"
          }`}
        >
          Enviar reseña
        </button>
      </div>
    </div>
  );
}
