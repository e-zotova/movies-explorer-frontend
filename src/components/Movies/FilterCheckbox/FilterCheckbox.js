import React from "react";

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <label class="filter-checkbox__switch">
        <input className="filter-checkbox__input" type="checkbox"></input>
        <span class="button filter-checkbox__slider"></span>
      </label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
