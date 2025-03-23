import { Link } from "react-router-dom";
import cls from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={cls.header}>
      <Link className={cls.logo} to={"/"}>
        Movies
      </Link>
    </header>
  );
};
