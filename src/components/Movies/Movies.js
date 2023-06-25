import { useState } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import Preloader from "../Movies/Preloader/Preloader.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";
import { moviesList } from "../../constants/movies.js";

function Movies() {
  const [preloader, setPreloader] = useState(false);

  return (
    <section className="movies">
      <SearchForm />
      {preloader && <Preloader />}
      {!preloader && <MoviesCardList movies={moviesList} />}
      <div className="movies__more">
        <div className="movies__more-button">Ещё</div>
      </div>
    </section>
  );
}

export default Movies;
