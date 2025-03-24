import { Movie } from "@/types/Movie";
import { useEffect, useState } from "react";

export function useMovie(id: number): Movie | null {
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

  return movie;
}
