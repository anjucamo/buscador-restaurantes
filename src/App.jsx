import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import Card from "./components/Card";
import RestaurantDetail from "./components/RestaurantDetail";

const mockData = [
  {
    name: "La Tagliatella",
    city: "Bogotá",
    points: 5,
    foodType: "Italiana",
    description: "Especialidad en pastas y pizzas artesanales.",
    cartaPdf: "https://example.com/carta-italiana.pdf"
  },
  {
    name: "El Mariachi Loco",
    city: "Medellín",
    points: 4,
    foodType: "Mexicana",
    description: "Tacos, burritos y sabor mexicano auténtico.",
    cartaPdf: "https://example.com/carta-mexicana.pdf"
  }
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [city, setCity] = useState("");
  const [rating, setRating] = useState("");
  const [foodType, setFoodType] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const filteredRestaurants = mockData.filter((restaurant) => {
    return (
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (city === "" || restaurant.city === city) &&
      (rating === "" || restaurant.points === parseInt(rating)) &&
      (foodType === "" || restaurant.foodType === foodType)
    );
  });

  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} min-h-screen transition-all duration-500`}>
      <div className="p-4 max-w-xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold">🍽️ Restaurantes</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`text-sm px-3 py-2 rounded-full border ${
              darkMode
                ? "bg-gray-800 text-white border-gray-600 hover:bg-gray-700"
                : "bg-gray-100 text-black border-gray-300 hover:bg-gray-200"
            } transition`}
          >
            {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
          </button>
        </div>

        {selectedRestaurant ? (
          <RestaurantDetail
            restaurant={selectedRestaurant}
            onBack={() => setSelectedRestaurant(null)}
            darkMode={darkMode}
          />
        ) : (
          <>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} darkMode={darkMode} />
            <Filters
              city={city}
              setCity={setCity}
              rating={rating}
              setRating={setRating}
              foodType={foodType}
              setFoodType={setFoodType}
              darkMode={darkMode}
            />
            <div className="mt-6 space-y-4">
              {filteredRestaurants.length === 0 ? (
                <p className="text-center text-gray-400">No se encontraron restaurantes.</p>
              ) : (
                filteredRestaurants.map((r, i) => (
                  <div key={i} onClick={() => setSelectedRestaurant(r)} className="cursor-pointer">
                    <Card restaurant={r} darkMode={darkMode} />
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
