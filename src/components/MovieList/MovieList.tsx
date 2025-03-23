import { useEffect, useState } from "react";
import { Movie } from "../../types/Movie";
import { MovieItem } from "../MovieItem/MovieItem";

export const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch("http://localhost:3001/films");
        const data: Movie[] = await res.json();
        setMovies(data);
      } catch {
        console.log("Failed to fetch movie-list");
      }
    }

    fetchMovies();
  }, []);

  return (
    <ul>
      {movies.map((movie) => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </ul>
  );
};
