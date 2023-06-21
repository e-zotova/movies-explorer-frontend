import React from "react";

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__box">
        <div className="search-form__icon"></div>
        <input placeholder="Фильм" className="search-form__input"></input>
        <button className="search-form__button"></button>
        <div className="vertical-divider"></div>
        <div className="search-form__short">
          <div className="search-form__short-switcher_inactive"></div>
          <p className="search-form__short-text">Короткометражки</p>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
