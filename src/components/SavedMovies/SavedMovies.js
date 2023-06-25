import { useState } from "react";
import SearchForm from '../Movies/SearchForm/SearchForm.js';
import Preloader from '../Movies/Preloader/Preloader.js';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList.js';
import { savedMoviesList } from "../../constants/movies.js";

function SavedMovies() {
  const [preloader, setPreloader] = useState(false);

  return (
    <div className="saved-movies">
      <SearchForm />
      {preloader && <Preloader />}
      {!preloader && <MoviesCardList movies={savedMoviesList}/>}
      <div className="saved-movies__divider"></div>
    </div>
  );
}

export default SavedMovies;