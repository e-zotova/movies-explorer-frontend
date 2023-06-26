import React from "react";

function FilterCheckbox({ className }) {
  return (
    <div className={`filter-checkbox ${className}`}>
      <label className="filter-checkbox__switch">
        <input className="filter-checkbox__input" type="checkbox"></input>
        <span className="button filter-checkbox__slider"></span>
      </label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
