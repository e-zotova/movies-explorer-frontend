import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__box">
        <div className="search-form__icon"></div>
        <input placeholder="Фильм" className="search-form__input"></input>
        <button className="button search-form__button"></button>
        <div className="vertical-divider"></div>
        <FilterCheckbox />
      </div>
      <div className="dividing-line search-form__dividing-line"></div>
    </div>
  );
}

export default SearchForm;
