import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Movie } from "../../types/Movie";

import cls from "./MoviePage.module.scss";

export const MoviePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const goBack = () => navigate(-1);

  if (!movie) return;

  return (
    <main className={"page"}>
      <button onClick={goBack} className={cls.backButton}>
        Назад
      </button>
      <div className={cls.layout}>
        <img className={cls.poster} src={movie.img} alt="movie_img" />
        <div>
          <h1 className="text-xl">{movie.title}</h1>
          <p>Жанр: {movie.genre}</p>
          <p>Год выпуска: {movie.year}</p>
        </div>
        <p>{movie.description}</p>
      </div>
    </main>
  );
};
