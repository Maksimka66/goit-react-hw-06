import { useDispatch } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const valueFilter = (e) => {
    const value = e.target.value.toLowerCase();
    dispatch(changeFilter(value.trim()));
  };

  return (
    <div className={styles.inputContainer}>
      <p className={styles.inputDescription}>Find contacts by name</p>
      <input
        className={styles.fieldToFill}
        type="text"
        name="text"
        onChange={valueFilter}
      />
    </div>
  );
};

export default SearchBox;
