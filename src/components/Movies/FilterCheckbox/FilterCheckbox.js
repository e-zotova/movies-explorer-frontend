function FilterCheckbox({ className, preloader, isShortChecked, handleShortCheckbox }) {
  return (
    <div className={`filter-checkbox ${className}`}>
      <label className="filter-checkbox__switch">
        <input
          type="checkbox"
          className="filter-checkbox__input"
          name="shortMovies"
          checked={isShortChecked || false}
          onChange={handleShortCheckbox}
          disabled={preloader}
        />
        <span className="button filter-checkbox__slider" />
      </label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
