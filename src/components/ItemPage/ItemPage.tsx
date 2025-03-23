import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../../types/Movie";

export const ItemPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    async function fetchMovieById() {
      try {
        const res = await fetch(`http://localhost:3001/films/${id}`);
        const movie: Movie = await res.json();
        setMovie(movie);
      } catch {
        console.log("Failed to fetch movie");
      }
    }
    fetchMovieById();
  }, [id]);

  if (!movie) return;

  return (
    <main className="page">
      <img src={`${movie.img}`} />
      <p>{movie.title}</p>
    </main>
  );
};
