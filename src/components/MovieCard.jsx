import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ id, titre, image }) {
  const navigate = useNavigate();

  return (
    <div className="movie-card">
      <img src={image} alt={titre} />

      <h3>{titre}</h3>

      <button
        className="btn-detail"
        onClick={() => navigate(`/movies/${id}`)}
      >
        Voir détail
      </button>
    </div>
  );
}

export default MovieCard;