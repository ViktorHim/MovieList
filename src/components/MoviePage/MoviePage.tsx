import { useNavigate, useParams } from "react-router-dom";

import cls from "./MoviePage.module.scss";
import { Button } from "../ui/Button/Button";
import { useMovie } from "@/hooks/useMovie";
import { useMemo } from "react";
import { Movie } from "@/types/Movie";

export const MoviePage = () => {
  const { id } = useParams();
  const movie = useMovie(Number(id));
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const handleEdit = () => {
    navigate(`/movie/${id}/edit`, { replace: true });
  };

  const modifiedMovie = useMemo((): Movie | null => {
    const localData = localStorage.getItem(`movie_${id}`);

    if (!movie) return null;

    if (localData) {
      const localMovie: Partial<Movie> = JSON.parse(localData);
      const { title, description } = localMovie;

      if (title && description) {
        return { ...movie, title, description };
      }
    }

    return movie;
  }, [id, movie]);

  if (!modifiedMovie) return <div>Фильм не найден</div>;

  const { img, title, genre, year, description } = modifiedMovie;

  return (
    <main className={"page"}>
      <Button onClick={goBack} className={cls.backButton}>
        Назад
      </Button>

      <div className={cls.layout}>
        <img className={cls.poster} src={img} alt="movie_img" />
        <div>
          <h1 className="text-xl">{title}</h1>
          <p>Жанр: {genre}</p>
          <p>Год выпуска: {year}</p>
        </div>
        <p>{description}</p>
        <Button onClick={handleEdit}>Редактировать</Button>
      </div>
    </main>
  );
};
