import './App.css';
import ClayCard from './componentes/ClayCard.jsx';
import './componentes/claycard.css';
import ScrollToTopButton from './componentes/ScrollToTopButton.jsx';
import './componentes/scrollToTop.css';
import yoTirao from './assets/totem_android/yo_tirao.jpeg'
import calama from './assets/terminal_calama/calama.png'
import yoAnime from './assets/yo_anime/image.png'


//aca se agregan los proyectos
const projects = [
  {
    title: 'Tótems Android',
    excerpt: 'Tótems android para la venta de pasajes de bus Pullman.',
    fullText: 'Tótems android para la venta de pasajes de bus Pullman.',
    imageUrl: yoTirao,
  },
  {
    title: 'Terminal Calama',
    excerpt: 'Sistema de cobro de estacionamiento, baños y costodia para el futuro Terminal Calama.',
    fullText: 'Sistema de cobro de estacionamiento, baños y costodia para el futuro Terminal Calama.',
    imageUrl: calama,
  },
  {
    title: 'Dev Ops',
    excerpt: 'Mi camino real en Automatización, Infraestructura y Sistemas.',
    fullText: 'Durante los últimos meses, mi rol como desarrollador se ha expandido hacia un terreno que, si bien conocía conceptualmente, ahora estoy explorando de forma activa y profunda: el universo DevOps.',
    imageUrl: yoAnime,
  }
];

export default function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Adolfo.dev</h1>
          <nav className="nav-links">
            <a href="#blogs">Blogs</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Titulo */}
      <section className="hero">
        <h2 className="hero-title">Hola, soy Adolfo Sepúlveda</h2>
        <p className="hero-subtitle">Desarrollador Full Stack apasionado por crear soluciones innovadoras con tecnología.</p>
      </section>
      
      {/* Proyectos */}
      <section id="proyectos" className="projects">
        <h2 className="section-title">Blogs</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ClayCard
              key={index}
              title={project.title}
              excerpt={project.excerpt}
              fullText={project.fullText}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="about">
        <div className="about-content">
          <h2 className="section-title">Sobre mí</h2>
          <p className="about-text">
            Soy un desarrollador con experiencia en backend y frontend, con conocimientos en Node.js, PHP, MySQL, React, entre otros.
            Me apasiona resolver problemas reales a través de la tecnología y construir interfaces eficientes y atractivas.
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #facc15 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #facc15 0%, transparent 50%)`,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Conectemos
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Options */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 text-white">Formas de contacto</h3>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/56987228524"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-green-600 hover:bg-green-700 rounded-xl transition-all duration-300 transform hover:scale-105 mb-4 group"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">WhatsApp</div>
                      <div className="text-green-100 text-sm">+56 9 8722 8524</div>
                    </div>
                    <div className="text-white group-hover:translate-x-1 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:adolfo@adolfo.dev"
                    className="flex items-center gap-4 p-4 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-300 transform hover:scale-105 mb-4 group"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-blue-100 text-sm">adolfo@adolfo.dev</div>
                    </div>
                    <div className="text-white group-hover:translate-x-1 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/adolfo-sepulveda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-blue-800 hover:bg-blue-900 rounded-xl transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">LinkedIn</div>
                      <div className="text-blue-200 text-sm">Conectemos profesionalmente</div>
                    </div>
                    <div className="text-white group-hover:translate-x-1 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl p-6 border border-yellow-400/30">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">24h</div>
                    <div className="text-sm text-gray-300">Tiempo de respuesta</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-6 border border-green-400/30">
                    <div className="text-2xl font-bold text-green-400 mb-1">100%</div>
                    <div className="text-sm text-gray-300">Proyectos entregados</div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-white">Envíame un mensaje</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Nombre</label>
                      <input
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full p-4 bg-gray-700/50 text-white rounded-xl placeholder-gray-400 border border-gray-600 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Email</label>
                      <input
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full p-4 bg-gray-700/50 text-white rounded-xl placeholder-gray-400 border border-gray-600 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Asunto</label>
                    <input
                      type="text"
                      placeholder="¿En qué puedo ayudarte?"
                      className="w-full p-4 bg-gray-700/50 text-white rounded-xl placeholder-gray-400 border border-gray-600 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Mensaje</label>
                    <textarea
                      rows={5}
                      placeholder="Cuéntame sobre tu proyecto..."
                      className="w-full p-4 bg-gray-700/50 text-white rounded-xl placeholder-gray-400 border border-gray-600 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900 font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-full border border-yellow-400/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Disponible para nuevos proyectos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-700 text-center text-gray-500">
        <div className="container mx-auto px-4">
          <p>© 2025 Adolfo.dev — Todos los derechos reservados.</p>
        </div>
      </footer>

      <ScrollToTopButton />
    </div>
  )
}
