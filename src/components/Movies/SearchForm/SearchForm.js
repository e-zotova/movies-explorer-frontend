import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

function SearchForm({ preloader, setPreloader }) {
  function handleSubmit(e) {
    e.preventDefault();

    setPreloader(!preloader);
  }

  return (
    <div className="search-form">
      <form className="search-form__box" onSubmit={handleSubmit}>
        <div className="search-form__icon"></div>
        <input placeholder="Фильм" className="search-form__input"></input>
        <button type="submit" className="button search-form__button"></button>
        <div className="vertical-divider"></div>
        <FilterCheckbox className="filter-checkbox_browser" />
      </form>
      <FilterCheckbox className="filter-checkbox_mobile" />
      <div className="dividing-line search-form__dividing-line"></div>
    </div>
  );
}

export default SearchForm;
