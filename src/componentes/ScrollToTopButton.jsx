import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react'; // Requiere instalar `lucide-react` o usa cualquier icono SVG
import './scrollToTop.css';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${visible ? 'show' : ''}`}
      aria-label="Volver arriba"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;
