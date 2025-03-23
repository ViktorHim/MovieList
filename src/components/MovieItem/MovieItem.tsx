import { Link } from "react-router-dom";
import { Movie } from "../../types/Movie";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import cls from "./MovierItem.module.scss";

export interface MovieItemProps {
  movie: Movie;
  className?: string;
}

const DESC_MAX_LEN = 400;

export const MovieItem = (props: MovieItemProps) => {
  const { movie, className = "" } = props;

  const { id, title, description, img } = movie;

  const cuttedDescription = () =>
    description.length < DESC_MAX_LEN
      ? description
      : description.slice(0, 400) + "...";

  return (
    <li className={cn(className, cls.item)}>
      <Link to={`/movie/${id}`}>
        <Card
          className={cn(
            "bg-slate-500",
            "hover:bg-slate-400",
            "text-slate-200",
            cls.card
          )}
        >
          <CardContent className="p-4">
            <div className={cls.grid}>
              <img
                className={cn(cls.img, "rounded-xl", "shadow-xl")}
                src={`${img}`}
              />
              <div>
                <h2 className="text-xl">{title}</h2>
                <p>{cuttedDescription()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </li>
  );
};
