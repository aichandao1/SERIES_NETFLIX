import "./Home.css";
import { useState, useEffect } from "react";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <h2 style={{ color: "white" }}>Chargement...</h2>;
  }

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Bienvenue sur Netflix Sénégal 🎬</h1>
        <p>Regarde les meilleures séries et films.</p>

        <button className="home-btn">
          Explorer maintenant
        </button>
      </div>
    </div>
  );
}

export default Home;