import { FaCity, FaUtensils, FaStar } from "react-icons/fa";

export default function Filters({ ciudad, setCiudad, tipo, setTipo, puntos, setPuntos }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 w-full max-w-4xl mx-auto">
      {/* Ciudad */}
      <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 rounded border w-full">
        <FaCity className="text-gray-500 dark:text-white" />
        <select
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
          className="bg-transparent outline-none w-full text-black dark:text-white"
        >
          <option value="">Todas las ciudades</option>
          <option value="Bogotá">Bogotá</option>
          <option value="Medellín">Medellín</option>
        </select>
      </div>

      {/* Tipo */}
      <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 rounded border w-full">
        <FaUtensils className="text-gray-500 dark:text-white" />
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="bg-transparent outline-none w-full text-black dark:text-white"
        >
          <option value="">Todos los tipos</option>
          <option value="Italiana">Italiana</option>
          <option value="Mexicana">Mexicana</option>
          <option value="Japonesa">Japonesa</option>
        </select>
      </div>

      {/* Puntos */}
      <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 rounded border w-full">
        <FaStar className="text-yellow-400" />
        <select
          value={puntos}
          onChange={(e) => setPuntos(e.target.value)}
          className="bg-transparent outline-none w-full text-black dark:text-white"
        >
          <option value="">Todos los puntos</option>
          <option value="4.0">4.0+</option>
          <option value="4.5">4.5+</option>
          <option value="4.8">4.8+</option>
        </select>
      </div>
    </div>
  );
}
