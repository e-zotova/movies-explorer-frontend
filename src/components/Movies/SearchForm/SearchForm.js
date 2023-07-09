import { useState, useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

function SearchForm({
  searchQuery,
  setSearchQuery,
  onGetMovies,
}) {
  const [isFormEmpty, setIsFormEmpty] = useState(false);
  const [isShortChecked, setIsShortChecked] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("shortMovies")) {
      setIsShortChecked(JSON.parse(localStorage.getItem("shortMovies")));
    }
  }, [setIsShortChecked]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleShortCheckbox = () => {
    setIsShortChecked(!isShortChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery.length === 0) {
      setIsFormEmpty(true);
    } else {
      setIsFormEmpty(false);
      onGetMovies(searchQuery);
      localStorage.setItem("searchQuery", searchQuery);
      localStorage.setItem("shortMovies", isShortChecked);
    }
  };

  return (
    <section className="search-form">
      <form className="search-form__box" onSubmit={handleSubmit}>
        <div className="search-form__icon"></div>
        <input
          type="text"
          name="search-query"
          placeholder="Фильм"
          value={searchQuery || ""}
          onChange={handleChange}
          className="search-form__input"
        />
        <button type="submit" className="button search-form__button"></button>
        <FilterCheckbox
          className="filter-checkbox_browser"
          isShortChecked={isShortChecked}
          handleShortCheckbox={handleShortCheckbox}
        />
      </form>
      <span className="search-form__error">
        {isFormEmpty ? "Нужно ввести ключевое слово" : ""}
      </span>
      <FilterCheckbox
        className="filter-checkbox_mobile"
        isShortChecked={isShortChecked}
        handleShortCheckbox={handleShortCheckbox}
      />
    </section>
  );
}

export default SearchForm;
