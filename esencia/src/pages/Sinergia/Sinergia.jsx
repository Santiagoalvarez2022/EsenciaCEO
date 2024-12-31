import React from 'react'

export default function Sinergia() {
  return (
    <div className="bg-gray-800 min-h-screen text-white p-6">
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-6">
        {/* Sección Nuevo Autor */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Nuevo Autor</h2>
          <input
            type="text"
            placeholder="input (text)"
            className="w-full p-2 rounded-md bg-gray-200 text-black"
          />
          <button className='bg-yellow-600 p-4 mt-4'>CREAR AUTOR</button>
          <br />
          <br />
          <br />
          <h3 className="mt-6 mb-2 font-semibold">Lista de autores</h3>
          <div className="space-y-2">
            {[
              "santiago alvares ‘id1235453’",
              "juan perez ‘id1235453’",
              "martina apellida ‘id1235453’",
              "santiago alvares ‘id1235453’",
              "santiago alvares ‘id1235453’",
              "juan perez ‘id1235453’",
            ].map((author, index) => (
              <div key={index} className="bg-gray-700 p-2 rounded">
                {author}
              </div>
            ))}
          </div>
        </div>

        {/* Línea divisoria */}
     

        {/* Sección Nueva Categoría */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Nueva categoría</h2>
          <input
            type="text"
            placeholder="input (text)"
            className="w-full p-2 rounded-md bg-gray-200 text-black"
          />
          <button className='bg-yellow-600 p-4 mt-4'>CREAR AUTOR</button>
          <br />
          <br />
          <br />

          <h3 className="mb-2 font-semibold">Lista de categorías</h3>
          <div className="space-y-2">
            {[
              "ayuda para la vida ‘id1235453’",
              "ejemplos “id1213”",
              "ayuda para la vida ‘id1235453’",
              "ejemplos “id1213”",
            ].map((category, index) => (
              <div key={index} className="bg-gray-700 p-2 rounded">
                {category}
              </div>
            ))}
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="col-span-3 border-t border-gray-500 my-6"></div>

        {/* Nuevo Blog */}
        <div className="col-span-3">
          <h2 className="text-xl font-semibold mb-4">Nuevo blog</h2>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {[
              "title",
              "subtitle",
              "author",
              "img",
              "tags",
              "reference",
            ].map((field, index) => (
              <div key={index}>
                <label className="block mb-1 text-2xl text-start capitalize">{field}</label>
                <input
                  type={field === "tags" ? "array" : "text"}
                  placeholder="input (text)"
                  className="w-full p-2 rounded-md bg-gray-200 text-black"
                />
              </div>
            ))}

          </div>

          <button className='bg-yellow-500 w-[30%]  p-4 mt-5'>CREAR</button>
        </div>
      </div>
    </div>
  );
}
