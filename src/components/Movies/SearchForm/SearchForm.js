import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

function SearchForm({preloader, setPreloader}) {

  function handleSearchClick() {
    setPreloader(!preloader);
  }

  return (
    <div className="search-form">
      <div className="search-form__box">
        <div className="search-form__icon"></div>
        <input placeholder="Фильм" className="search-form__input"></input>
        <button
          className="button search-form__button"
          onClick={handleSearchClick}
        ></button>
        <div className="vertical-divider"></div>
        <FilterCheckbox className="filter-checkbox_browser" />
      </div>
      <FilterCheckbox className="filter-checkbox_mobile" />
      <div className="dividing-line search-form__dividing-line"></div>
    </div>
  );
}

export default SearchForm;
