import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const useFilterValue = () => useSelector(selectNameFilter);

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useFilterValue();

  const handleChange = (e) => {
    const filterValue = e.target.value;

    dispatch(changeFilter(filterValue));
  };

  return (
    <div className={css.containerSearchBox}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        placeholder="Search by name"
        value={nameFilter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;