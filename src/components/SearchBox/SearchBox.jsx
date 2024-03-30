import { useDispatch } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { useState } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const valueFilter = (e) => {
    setQuery(e.target.value);
    dispatch(changeFilter(query.trim()));
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
