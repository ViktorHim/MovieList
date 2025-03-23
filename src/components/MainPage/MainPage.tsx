import { useEffect, useState } from "react";
import { MovieList } from "../MovieList/MovieList";
import { PageNavigator } from "../PageNavigator/PageNavigator";

import cls from "./MainPage.module.scss";
import { useLocation, useSearchParams } from "react-router-dom";

export const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageCount, setPageCount] = useState<number>(1);

  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = Number(searchParams.get("items_per_page")) || 5;

  const setTotalPages = (count: number) => setPageCount(count);
  const setCurrentPage = (current: number) => {
    searchParams.set("page", String(current));
    setSearchParams(searchParams);
  };
  const setItemsPerPage = (value: number) => {
    searchParams.set("items_per_page", String(value));
    setSearchParams(searchParams);
  };

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className={"page"}>
      <h1 className="text-xl" style={{ marginBottom: "20px" }}>
        Фильмы: страница {currentPage} из {pageCount}
      </h1>
      <MovieList
        itemsPerPage={itemsPerPage}
        className={cls.list}
        setCount={setTotalPages}
        currentPage={currentPage}
      />
      <PageNavigator
        total={pageCount}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        current={currentPage}
        setCurrent={setCurrentPage}
      />
    </main>
  );
};
