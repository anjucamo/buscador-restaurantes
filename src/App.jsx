// src/App.jsx
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import Card from "./components/Card";

const data = [
  {
    id: 1,
    nombre: "Pizza Loca",
    ciudad: "Bogotá",
    puntos: 4.5,
    tipo: "Italiana",
    imagen: "/images/pizza.jpg",
  },
  {
    id: 2,
    nombre: "Taco Rico",
    ciudad: "Medellín",
    puntos: 4.8,
    tipo: "Mexicana",
    imagen: "/images/taco-rico.jpg",
  },
  {
    id: 3,
    nombre: "Sushi Zen",
    ciudad: "Bogotá",
    puntos: 4.2,
    tipo: "Japonesa",
    imagen: "/images/suchi.jpg",
  },
];

export default function App() {
  const [busqueda, setBusqueda] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [tipo, setTipo] = useState("");

  const resultados = data.filter((r) =>
    r.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    r.ciudad.includes(ciudad) &&
    r.tipo.includes(tipo)
  );

  return (
    <div className="min-h-screen p-4 bg-black text-white">
      {/* ENCABEZADO */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold mb-2">🍽️ Restaurantes</h1>
        <p className="text-gray-400">Busca tu restaurante favorito</p>
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
