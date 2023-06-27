import { useState } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import Preloader from "../Movies/Preloader/Preloader.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";
import { moviesList } from "../../constants/movies.js";

function Movies() {
  const [preloader, setPreloader] = useState(false);

  function onMovieSave(movie) {
    // call api
  }

  return (
    <section className="movies">
      <SearchForm preloader={preloader} setPreloader={setPreloader} />
      {preloader && <Preloader />}
      {!preloader && (
        <div>
          <MoviesCardList movies={moviesList} onMovieSave={onMovieSave} />
          <div className="movies__more">
            <div className="button movies__more-button">Ещё</div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Movies;
