import { useState } from "react";
import SerieCard from "../components/SerieCard";
import "./Series.css";

function Series() {
  const [search, setSearch] = useState("");

  const series = [
    {
      id: 1,
      titre: "Money Heist",
      image: "https://picsum.photos/200/300?1"
    },
    {
      id: 2,
      titre: "Dark",
      image: "https://picsum.photos/200/300?2"
    },
    {
      id: 3,
      titre: "Lupin",
      image: "https://picsum.photos/200/300?3"
    }
  ];

  const filteredSeries = series.filter((s) =>
    s.titre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="series-container">

      <h1 className="series-title">Séries Netflix 🎬</h1>

      <input
        type="text"
        placeholder="Rechercher une série..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

       <div style={{ display: "flex", gap: "20px" }}>
        {filteredSeries.length > 0 ? (
          filteredSeries.map((serie) => (
            <SerieCard
              key={serie.id}
              id={serie.id}
              titre={serie.titre}
              image={serie.image}
            />
          ))
        ) : (
          <p className="empty">Aucune série trouvée 😢</p>
        )}
      </div>

    </div>
  );
}

export default Series;