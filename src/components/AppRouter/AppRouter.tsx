import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "../MainPage/MainPage";
import { MoviePage } from "../MoviePage/MoviePage";
import { EditPage } from "../EditPage/EditPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/movie/:id/edit" element={<EditPage />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
