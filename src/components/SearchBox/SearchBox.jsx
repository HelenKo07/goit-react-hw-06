import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchForm() {
    const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  return (
    <div>
      <p className={css.searchBox}>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        name="name"
        autoComplete="on"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
