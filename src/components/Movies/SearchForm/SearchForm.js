import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

function SearchForm({
  isShortChecked,
  searchQuery,
  setSearchQuery,
  onGetMovies,
  handleShortCheckbox,
  isFormEmpty,
  setIsFormEmpty,
}) {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchQuery) {
      setIsFormEmpty(true);
    } else {
      setIsFormEmpty(false);
      onGetMovies();
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
