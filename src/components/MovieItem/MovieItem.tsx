import { Link } from "react-router-dom";
import { Movie } from "../../types/Movie";

export interface MovieItemProps {
  movie: Movie;
  className?: string;
}

export const MovieItem = (props: MovieItemProps) => {
  const { movie, className = "" } = props;

  const { id, title } = movie;

  return (
    <li className={className}>
      <Link to={`/movie/${id}`}>{title}</Link>
    </li>
  );
};
