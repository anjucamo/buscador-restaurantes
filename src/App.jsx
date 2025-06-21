import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import Card from "./components/Card";

const data = [
  { id: 1, nombre: "Pizza Loca", ciudad: "Bogotá", puntos: 4.5, tipo: "Italiana" },
  { id: 2, nombre: "Taco Rico", ciudad: "Medellín", puntos: 4.8, tipo: "Mexicana" },
  { id: 3, nombre: "Sushi Zen", ciudad: "Bogotá", puntos: 4.2, tipo: "Japonesa" },
];

export default function App() {
  const [busqueda, setBusqueda] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [tipo, setTipo] = useState("");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const resultados = data.filter((r) =>
    r.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    r.ciudad.includes(ciudad) &&
    r.tipo.includes(tipo)
  );

  return (
    <div className="min-h-screen p-4 bg-white text-black dark:bg-black dark:text-white transition duration-300">
      {/* ENCABEZADO */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-2">🍽️ Restaurantes</h1>
          <p className="text-gray-500 dark:text-gray-400">Busca tu restaurante favorito</p>
        </div>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-xl"
        >
          {theme === "dark" ? "☀️ Claro" : "🌙 Oscuro"}
        </button>
      </div>

      {/* BÚSQUEDA */}
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />

      {/* FILTROS */}
      <Filters ciudad={ciudad} setCiudad={setCiudad} tipo={tipo} setTipo={setTipo} />

      {/* RESULTADOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {resultados.map((r) => (
          <Card key={r.id} restaurante={r} />
        ))}
      </div>
    </div>
  );
}
