import "./SerieCard.css";
import { useNavigate } from "react-router-dom";

function SerieCard({ id, titre, image }) {
  const navigate = useNavigate();

  return (
    <div className="serie-card">
      <img src={image} alt={titre} />
      <h3>{titre}</h3>

      <button
        className="btn-detail"
        onClick={() => navigate(`/series/${id}`)}
      >
        Voir détail
      </button>
    </div>
  );
}

export default SerieCard;