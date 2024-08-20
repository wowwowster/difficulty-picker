import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";
import { DIFFICULTIES } from "./constant";

export function MenuList({ difficulty, onItemClick }) {
  return (
    <div className={s.container}>
      {DIFFICULTIES.map((diff) => {
        return (
          <MenuListItem
            onClick={onItemClick}
            difficulty={diff}
            isSelected={difficulty === diff}
          />
        );
      })}
    </div>
  );
}