export default function Filters({ ciudad, setCiudad, tipo, setTipo, puntos, setPuntos }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-5xl mx-auto px-4">
      {/* Ciudad */}
      <select
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
        className="flex-1 px-4 py-2 rounded border dark:bg-gray-800 dark:text-white bg-white text-black"
      >
        <option value="">Todas las ciudades</option>
        <option value="Bogotá">Bogotá</option>
        <option value="Medellín">Medellín</option>
      </select>

      {/* Tipo */}
      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        className="flex-1 px-4 py-2 rounded border dark:bg-gray-800 dark:text-white bg-white text-black"
      >
        <option value="">Todos los tipos</option>
        <option value="Italiana">Italiana</option>
        <option value="Mexicana">Mexicana</option>
        <option value="Japonesa">Japonesa</option>
      </select>

      {/* Puntos */}
      <select
        value={puntos}
        onChange={(e) => setPuntos(e.target.value)}
        className="flex-1 px-4 py-2 rounded border dark:bg-gray-800 dark:text-white bg-white text-black"
      >
        <option value="">Todos los puntos</option>
        <option value="4.0">4.0+</option>
        <option value="4.5">4.5+</option>
        <option value="4.8">4.8+</option>
      </select>
    </div>
  );
}
