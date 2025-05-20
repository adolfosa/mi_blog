import './App.css';
import ClayCard from './componentes/ClayCard.jsx';
import './componentes/claycard.css';
import ScrollToTopButton from './componentes/ScrollToTopButton.jsx';
import './componentes/scrollToTop.css';


//aca se agregan los proyectos
const projects = [
  {
    title: 'Tótems Android',
    excerpt: 'Tótems android para la venta de pasajes de bus Pullman.',
    fullText: 'Tótems android para la venta de pasajes de bus Pullman.',
    imageUrl: 'src/assets/totem_android/yo_tirao.jpeg',
  },
  {
    title: 'Terminal Calama',
    excerpt: 'Sistema de cobro de estacionamiento, baños y costodia para el futuro Terminal Calama.',
    fullText: 'Sistema de cobro de estacionamiento, baños y costodia para el futuro Terminal Calama.',
    imageUrl: 'src/assets/terminal_calama/calama.png'
  },
  {
    title: 'Dev Ops',
    excerpt: 'Mi camino real en Automatización, Infraestructura y Sistemas.',
    fullText: 'Durante los últimos meses, mi rol como desarrollador se ha expandido hacia un terreno que, si bien conocía conceptualmente, ahora estoy explorando de forma activa y profunda: el universo DevOps.',
    imageUrl: 'src/assets/practica/image.png'
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
      <section id="contacto" className="contact">
        <h2 className="section-title">Contacto</h2>
        <p className="contact-subtitle">¿Tienes un proyecto en mente? Escríbeme.</p>
        <div className="contact-form-container">
          <form className="contact-form">
            <input type="text" placeholder="Tu nombre" className="form-input" />
            <input type="email" placeholder="Tu correo" className="form-input" />
            <textarea rows="5" placeholder="Tu mensaje" className="form-textarea"></textarea>
            <button type="submit" className="form-button">Enviar</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2025 Adolfo.dev — Todos los derechos reservados.
      </footer>
      <ScrollToTopButton />
    </div>
  );
}
