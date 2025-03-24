import { useMovie } from "@/hooks/useMovie";
import { Movie } from "@/types/Movie";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../ui/Button/Button";

import cls from "./EditPage.module.scss";

export const EditPage = () => {
  const { id } = useParams();
  const movie = useMovie(Number(id));
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    const localData = localStorage.getItem(`movie_${id}`);

    if (localData) {
      const localMovie: Partial<Movie> = JSON.parse(localData);
      setTitle(localMovie.title!);
      setDescription(localMovie.description!);
    } else if (movie) {
      setTitle(movie.title);
      setDescription(movie.description);
    }
  }, [id, movie]);

  const onSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Все поля должны быть заполнены!");
      return;
    }

    const updatedMovie = { title, description };
    localStorage.setItem(`movie_${id}`, JSON.stringify(updatedMovie));

    navigate(`/movie/${id}`, { replace: true });
  };

  return (
    <main className="page">
      <h1 className="text-xl" style={{ marginBottom: "15px" }}>
        Редактирования фильма
      </h1>
      <form onSubmit={onSave}>
        <div style={{ marginBottom: "15px" }}>
          <p>Название:</p>
          <input
            placeholder="Название фильма"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={cls.field}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <p>Описание:</p>
          <textarea
            className={cls.textarea}
            placeholder="Описание фильма"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Button type="submit">Сохранить</Button>
      </form>
    </main>
  );
};
