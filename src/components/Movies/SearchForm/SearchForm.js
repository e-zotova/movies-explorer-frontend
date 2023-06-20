import React from "react";
import findButton from '../../../images/find.svg'

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__box">
        <input className="search-form__input"></input>
        <button className="search-form__button"><img src={findButton}></img></button>
      </div>
    </div>
  );
}

export default SearchForm;
