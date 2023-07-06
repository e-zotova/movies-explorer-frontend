import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

function SearchForm({ onGetMovies }) {
  const [isFormEmpty, setIsFormEmpty] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (e.target.querySelector('input').value.length === 0) {
      setIsFormEmpty(true);
    } else {
      setIsFormEmpty(false);
      onGetMovies();
    }
  }

  return (
    <section className="search-form">
      <form className="search-form__box" onSubmit={handleSubmit}>
        <div className="search-form__icon"></div>
        <input
          type="text"
          placeholder="Фильм"
          className="search-form__input"
        />
        <button type="submit" className="button search-form__button"></button>
        <FilterCheckbox className="filter-checkbox_browser" />
      </form>
      <span className="search-form__error">
        {isFormEmpty ? "Нужно ввести ключевое слово" : ""}
      </span>
      <FilterCheckbox className="filter-checkbox_mobile" />
    </section>
  );
}

export default SearchForm;
