import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "./Movies.css";

function Movies() {
  const [search, setSearch] = useState("");

  const movies = [
    {
      id: 1,
      titre: "Inception",
      image: "https://picsum.photos/300/400?1",
    },
    {
      id: 2,
      titre: "Interstellar",
      image: "https://picsum.photos/300/400?2",
    },
    {
      id: 3,
      titre: "Joker",
      image: "https://picsum.photos/300/400?3",
    },
  ];

  const filteredMovies = movies.filter((movie) =>
    movie.titre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="movies-container">
      <h1 className="movies-title">Films 🎬</h1>

      <input
        type="text"
        placeholder="Rechercher un film..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="movies-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              titre={movie.titre}
              image={movie.image}
            />
          ))
        ) : (
          <p className="empty">Aucun film trouvé 😢</p>
        )}
      </div>
    </div>
  );
}

export default Movies;