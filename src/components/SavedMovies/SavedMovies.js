import { useState, useEffect } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import Preloader from "../Movies/Preloader/Preloader.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";
import { savedMoviesList } from "../../constants/movies.js";

function SavedMovies() {
  const [preloader, setPreloader] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  function onMovieSave() {
    setIsSaved(!isSaved);
  }

  function onMovieUnsave(movie) {
    savedMoviesList.filter((item) => item._id === movie._id);
  }

  return (
    <div className="saved-movies">
      <SearchForm />
      {preloader && <Preloader />}
      {!preloader && (
        <MoviesCardList
          movies={savedMoviesList}
          onMovieSave={onMovieSave}
          onMovieUnsave={onMovieUnsave}
        />
      )}
      <div className="saved-movies__divider"></div>
    </div>
  );
}

export default SavedMovies;
