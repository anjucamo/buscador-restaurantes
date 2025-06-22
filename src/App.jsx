import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import Card from "./components/Card";
import { HomeModernIcon } from '@heroicons/react/24/solid';

const data = [
  {
    id: 1,
    nombre: "Pizza Loca",
    ciudad: "Bogotá",
    puntos: 4.5,
    tipo: "Italiana",
    imagen: "/images/pizza.jpg",
    descripcion: "Deliciosa pizza artesanal con ingredientes frescos."
  },
  {
    id: 2,
    nombre: "Taco Rico",
    ciudad: "Medellín",
    puntos: 4.8,
    tipo: "Mexicana",
    imagen: "/images/taco-rico.jpg",
    descripcion: "Tacos auténticos con el mejor sabor mexicano."
  },
  {
    id: 3,
    nombre: "Sushi Zen",
    ciudad: "Bogotá",
    puntos: 4.2,
    tipo: "Japonesa",
    imagen: "/images/suchi.jpg",
    descripcion: "Sushi fresco preparado al instante con calidad premium."
  },
];

export default function App() {
  const [busqueda, setBusqueda] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [tipo, setTipo] = useState("");
  const [puntos, setPuntos] = useState("");
  const [modoOscuro, setModoOscuro] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", modoOscuro);
  }, [modoOscuro]);

  const resultados = data.filter((r) =>
    r.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    r.ciudad.includes(ciudad) &&
    r.tipo.includes(tipo) &&
    (puntos === "" || r.puntos >= parseFloat(puntos))
  );

  return (
    <div className="min-h-screen p-4 bg-white dark:bg-black text-black dark:text-white transition duration-300">
      
      {/* Botón modo claro/oscuro */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setModoOscuro(!modoOscuro)}
          className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-white dark:text-black"
        >
          {modoOscuro ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
        </button>
      </div>

      {/* Encabezado */}
      <div className="text-center mb-6 flex flex-col items-center">
        <div className="flex items-center gap-3">
          <HomeModernIcon className="w-10 h-10 text-yellow-400" />
          <h1 className="text-4xl font-extrabold text-yellow-400">Restaurantes</h1>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-1">
          Encuentra tu lugar favorito para comer
        </p>
      </div>

      {/* Buscador y Filtros */}
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
      <Filters
        ciudad={ciudad}
        setCiudad={setCiudad}
        tipo={tipo}
        setTipo={setTipo}
        puntos={puntos}
        setPuntos={setPuntos}
      />

      {/* Resultados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {resultados.map((r) => (
          <Card key={r.id} restaurante={r} />
        ))}
      </div>
    </div>
  );
}
