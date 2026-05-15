import { useParams } from "react-router-dom";
import { useState } from "react";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [showTrailer, setShowTrailer] = useState(false);

  const movies = [
    {
      id: 1,
      titre: "Inception",
      image: "https://picsum.photos/800/400?1",
      description:
        "Un voleur infiltre les rêves des gens.",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },

    {
      id: 2,
      titre: "Interstellar",
      image: "https://picsum.photos/800/400?2",
      description:
        "Un voyage spatial pour sauver l’humanité.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },

    {
      id: 3,
      titre: "Joker",
      image: "https://picsum.photos/800/400?3",
      description:
        "L’histoire sombre du Joker.",
      trailer: "https://www.youtube.com/embed/zAGVQLHvwOY",
    },
  ];

  const movie = movies.find(
    (m) => m.id === parseInt(id)
  );

  if (!movie) {
    return (
      <div className="not-found">
        <h2>Film introuvable 😢</h2>
      </div>
    );
  }

  return (
    <div className="details-container">

      <div className="banner">
        <img src={movie.image} alt={movie.titre} />

        <div className="overlay">
          <h1>{movie.titre}</h1>
        </div>
      </div>

      <div className="content">
        <h2>Synopsis</h2>

        <p>{movie.description}</p>

        <button
          className="btn-watch"
          onClick={() => setShowTrailer(true)}
        >
          ▶ Regarder le trailer
        </button>

        {showTrailer && (
          <div className="trailer">

            <iframe
              width="100%"
              height="400"
              src={movie.trailer}
              title="Trailer"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

            <button
              className="close-btn"
              onClick={() => setShowTrailer(false)}
            >
              Fermer ❌
            </button>

          </div>
        )}
      </div>

    </div>
  );
}

export default MovieDetails;