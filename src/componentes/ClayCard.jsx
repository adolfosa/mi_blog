import './claycard.css';
import { motion as Motion } from 'framer-motion';

const ClayCard = ({ title, excerpt, fullText, imageUrl }) => {
  return (
    <Motion.div
      className="clay-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="clay-card-inner">
        {/* Lado frontal */}
        <div className="clay-card-front">
          <img src={imageUrl} alt={title} className="clay-card-image" />
          <div className="clay-card-content">
            <h2>{title}</h2>
            <p className="excerpt">{excerpt}</p>
          </div>
        </div>

        {/* Lado trasero */}
        <div className="clay-card-back">
          <div className="clay-card-content">
            <h2>{title}</h2>
            <p>{fullText}</p>
            <a href="#" className="clay-read-more">Leer más</a>
          </div>
        </div>
      </div>
    </Motion.div>
  );
};

export default ClayCard;
