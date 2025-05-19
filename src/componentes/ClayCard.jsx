import './claycard.css';

const ClayCard = ({ title, excerpt, fullText, imageUrl }) => {
  return (
    <div className="clay-card">
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
    </div>
  );
};

export default ClayCard;
