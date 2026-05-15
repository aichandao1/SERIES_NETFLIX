import { useParams } from "react-router-dom";
import { useState } from "react";
import "./SerieDetails.css";

function SerieDetails() {
  const { id } = useParams();
  const [showTrailer, setShowTrailer] = useState(false);

  const series = [
    {
      id: 1,
      titre: "Money Heist",
      image: "https://picsum.photos/800/400?1",
      description:
        "Un groupe de voleurs réalise le plus grand braquage de l’histoire.",
      trailer: "https://www.youtube.com/embed/_InqQJRqGW4",
    },
    {
      id: 2,
      titre: "Dark",
      image: "https://picsum.photos/800/400?2",
      description:
        "Une histoire complexe de voyages dans le temps.",
      trailer: "https://www.youtube.com/embed/rrwycJ08PSA",
    },
    {
      id: 3,
      titre: "Lupin",
      image: "https://picsum.photos/800/400?3",
      description:
        "Un voleur intelligent inspiré d’Arsène Lupin.",
      trailer: "https://www.youtube.com/embed/ga0iTWXCGa0",
    },
  ];

  const serie = series.find(
    (s) => s.id === parseInt(id)
  );

  if (!serie) {
    return (
      <div className="not-found">
        <h2>Série introuvable 😢</h2>
      </div>
    );
  }

  return (
    <div className="details-container">

      {/* Banner */}
      <div className="banner">
        <img src={serie.image} alt={serie.titre} />

        <div className="overlay">
          <h1>{serie.titre}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="content">
        <h2>Synopsis</h2>

        <p>{serie.description}</p>

        {/* Button */}
        <button
          className="btn-watch"
          onClick={() => setShowTrailer(true)}
        >
          ▶ Regarder le trailer
        </button>

        {/* Trailer */}
        {showTrailer && (
          <div className="trailer">

            <iframe
              width="100%"
              height="400"
              src={serie.trailer}
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

export default SerieDetails;