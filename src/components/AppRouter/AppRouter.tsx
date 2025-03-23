import { Route, Routes } from "react-router-dom";
import { MainPage } from "../MainPage/MainPage";
import { ItemPage } from "../ItemPage/ItemPage";
import { EditPage } from "../EditPage/EditPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/movie/:id" element={<ItemPage />} />
      <Route path="/movie/:id/edit" element={<EditPage />} />
    </Routes>
  );
};
