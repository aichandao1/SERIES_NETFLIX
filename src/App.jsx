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
    <>
      <Navbar search={search} setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/series"
          element={<Series search={search} />}
        />

        <Route
          path="/movies"
          element={<Movies search={search} />}
        />

        <Route path="/series/:id" element={<SerieDetails />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;