import React from "react";

function FilterCheckbox({ className, isShortChecked, handleShortCheckbox }) {
  return (
    <div className={`filter-checkbox ${className}`}>
      <label className="filter-checkbox__switch">
        <input
          type="checkbox"
          className="filter-checkbox__input"
          name="shortMovies"
          checked={isShortChecked}
          onChange={handleShortCheckbox}
        />
        <span className="button filter-checkbox__slider" />
      </label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
