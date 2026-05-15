import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ search, setSearch }) {
  return (
    <nav className="navbar">
      <h1 className="logo">NETFLIX SENEGAL</h1>

      <input
        type="text"
        placeholder="Rechercher un film ou une série..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/series">Séries</Link>
        <Link to="/movies">Films</Link>
      </div>
    </nav>
  );
}

export default Navbar;