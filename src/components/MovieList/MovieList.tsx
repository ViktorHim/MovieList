import { useEffect, useState } from "react";
import { Movie } from "../../types/Movie";
import { MovieItem } from "../MovieItem/MovieItem";

import cls from "./MovieList.module.scss";
import { cn } from "@/lib/utils";

export interface MovieListProps {
  setCount: (count: number) => void;
  currentPage: number;
  itemsPerPage: number;
  className?: string;
}

export const MovieList = (props: MovieListProps) => {
  const { setCount, currentPage, itemsPerPage, className = "" } = props;

  const [movies, setMovies] = useState<Movie[]>([]);
  console.log(currentPage);
  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(
          `http://localhost:3001/films?_page=${currentPage}&_per_page=${itemsPerPage}`
        );
        const data = await res.json();
        const movies: Movie[] = data.data;
        const count: number = data.pages;

        setCount(count);
        setMovies(movies);
      } catch {
        console.log("Failed to fetch movie-list");
      }
    }

    fetchMovies();
  }, [currentPage, itemsPerPage]);

  return (
    <ul className={cn(cls.list, className)}>
      {movies.map((movie) => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </ul>
  );
};
