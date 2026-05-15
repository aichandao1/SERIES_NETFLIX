import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import SerieDetails from "./pages/SerieDetails";
import MovieDetails from "./pages/MovieDetails";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="app">
      <Navbar search={search} setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/series/:id" element={<SerieDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;