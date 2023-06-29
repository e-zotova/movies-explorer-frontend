import { useState } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import Preloader from "../Movies/Preloader/Preloader.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";
import { savedMoviesList } from "../../constants/movies.js";

function SavedMovies() {
  const [preloader, setPreloader] = useState(false);

  function onMovieRemove(movie) {
    // call api
  }

  return (
    <div className="saved-movies">
      <SearchForm preloader={preloader} setPreloader={setPreloader}/>
      {preloader && <Preloader />}
      {!preloader && (
        <MoviesCardList
          movies={savedMoviesList}
          onMovieRemove={onMovieRemove}
        />
      )}
    </div>
  );
}

export default SavedMovies;
