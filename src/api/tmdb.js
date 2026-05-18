export async function getMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR`
  );

  const data = await res.json();

  // sécurité
  if (!res.ok) {
    console.log("Erreur API :", data);
    return [];
  }

  return data.results || [];
}