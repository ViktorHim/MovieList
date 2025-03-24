import { cn } from "@/lib/utils";
import cls from "./PageNavigator.module.scss";
import { useMemo } from "react";

export interface PageNavigatorProps {
  total: number;
  current: number;
  setCurrent: (current: number) => void;
  setItemsPerPage: (value: number) => void;
  itemsPerPage: number;
}

const PAGES_AHEAD = 5;
const PAGES_BEHIND = 4;

export const PageNavigator = (props: PageNavigatorProps) => {
  const { total, current, setCurrent, itemsPerPage, setItemsPerPage } = props;

  if (current > total) setCurrent(total);

  const pages = useMemo(() => {
    let startPos = Math.max(1, current - PAGES_BEHIND);
    let endPos = Math.min(total, current + PAGES_AHEAD);

    if (endPos - startPos < PAGES_BEHIND + PAGES_AHEAD) {
      if (startPos === 1) {
        endPos = Math.min(total, startPos + PAGES_BEHIND + PAGES_AHEAD);
      } else if (endPos === total) {
        startPos = Math.max(1, endPos - PAGES_BEHIND - PAGES_AHEAD);
      }
    }

    const pageButtons = Array.from(
      { length: endPos - startPos + 1 },
      (_, index) => {
        const pageNum = startPos + index;
        return (
          <button
            className={cn(cls.pageBtn, { [cls.active]: pageNum === current })}
            key={pageNum}
            onClick={() => setCurrent(pageNum)}
          >
            {pageNum}
          </button>
        );
      }
    );

    return [
      <button
        className={cn(cls.pageBtn)}
        key="prev"
        onClick={() => setCurrent(current - 1)}
        disabled={current === 1}
      >
        Назад
      </button>,
      ...pageButtons,
      endPos < total && (
        <div className={cls.continue} key="ellipsis">
          ...
        </div>
      ),
      <button
        className={cn(cls.pageBtn)}
        key="next"
        onClick={() => setCurrent(current + 1)}
        disabled={current === total}
      >
        Вперед
      </button>,
    ];
  }, [total, current]);

  return (
    <div className={cls.navigator}>
      <select
        className={cls.perPage}
        name="items-count"
        value={itemsPerPage}
        onChange={(e) => setItemsPerPage(Number(e.target.value))}
      >
        <option value="" disabled>
          Элементов на странице
        </option>
        <option value={1}>1</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
      {pages}
    </div>
  );
};
