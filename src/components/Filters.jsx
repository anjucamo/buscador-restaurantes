import { BuildingStorefrontIcon, ListBulletIcon, StarIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Filters({ ciudad, setCiudad, tipo, setTipo, puntos, setPuntos }) {
  const selectClass =
    "w-full pl-10 pr-10 py-2 rounded-xl border shadow-sm bg-white text-black dark:bg-gray-800 dark:text-white appearance-none";

  const wrapperClass = "relative";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {/* Ciudad */}
      <div className={wrapperClass}>
        <BuildingStorefrontIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300" />
        <select
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
          className={selectClass}
        >
          <option value="">Todas las ciudades</option>
          <option value="Bogotá">Bogotá</option>
          <option value="Medellín">Medellín</option>
        </select>
        <ChevronDownIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 pointer-events-none" />
      </div>

      {/* Tipo */}
      <div className={wrapperClass}>
        <ListBulletIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300" />
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className={selectClass}
        >
          <option value="">Todos los tipos</option>
          <option value="Italiana">Italiana</option>
          <option value="Mexicana">Mexicana</option>
          <option value="Japonesa">Japonesa</option>
        </select>
        <ChevronDownIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 pointer-events-none" />
      </div>

      {/* Puntos */}
      <div className={wrapperClass}>
        <StarIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500" />
        <select
          value={puntos}
          onChange={(e) => setPuntos(e.target.value)}
          className={selectClass}
        >
          <option value="">Todos los puntos</option>
          <option value="4.0">4.0+</option>
          <option value="4.5">4.5+</option>
          <option value="4.8">4.8+</option>
        </select>
        <ChevronDownIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 pointer-events-none" />
      </div>
    </div>
  );
}
