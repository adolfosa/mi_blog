import { useState } from 'react'
import './App.css'


export default function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="p-6 border-b border-gray-700">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Adolfo.dev</h1>
          <nav className="space-x-4">
            <a href="#proyectos" className="hover:text-yellow-300">Proyectos</a>
            <a href="#sobre-mi" className="hover:text-yellow-300">Sobre mí</a>
            <a href="#contacto" className="hover:text-yellow-300">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-20 bg-gray-800">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Hola, soy Adolfo 👋</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Desarrollador Full Stack apasionado por crear soluciones innovadoras con tecnología.</p>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Proyectos destacados</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Nombre del Proyecto</h3>
            <p className="text-gray-400 mb-4">Breve descripción del proyecto y tecnologías utilizadas.</p>
            <a href="#" className="text-yellow-400 hover:underline">Ver más</a>
          </div>
          {/* Puedes mapear más proyectos aquí luego */}
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
          <p className="text-gray-300 leading-relaxed">
            Soy un desarrollador con experiencia en backend y frontend, con conocimientos en Node.js, PHP, MySQL, React, entre otros.
            Me apasiona resolver problemas reales a través de la tecnología y construir interfaces eficientes y atractivas.
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Contacto</h2>
        <p className="text-gray-400 text-center mb-8">¿Tienes un proyecto en mente? Escríbeme.</p>
        <div className="max-w-xl mx-auto">
          <form className="space-y-4">
            <input type="text" placeholder="Tu nombre" className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400" />
            <input type="email" placeholder="Tu correo" className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400" />
            <textarea rows="5" placeholder="Tu mensaje" className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"></textarea>
            <button type="submit" className="bg-yellow-400 text-gray-900 font-semibold py-2 px-6 rounded hover:bg-yellow-300 transition">Enviar</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-700 text-center text-gray-500 text-sm">
        © 2025 Adolfo.dev — Todos los derechos reservados.
      </footer>
    </div>
  );
}

