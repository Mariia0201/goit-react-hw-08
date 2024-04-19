import css from './SearchBox.module.css'
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleSearch = (ev) => {
    dispatch(changeFilter(ev.target.value));
  };
  return (
    <label className={css.SearchBox}>
      <span>
        Find contacts by name
      </span>
      <input
        className={css.searchBoxInput}
        type="text"
        placeholder="Search for..."
        value={filter}
        onChange={handleSearch}
      />
    </label>
  );
};

export default SearchBox