import SearchForm from "../Movies/SearchForm/SearchForm.js";
import Preloader from "../Movies/Preloader/Preloader.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";
import { moviesList } from "../../constants/movies.js";

function Movies() {

  return (
    <section className="movies">
      <SearchForm />
      <Preloader />
      <MoviesCardList movies={moviesList} />
    </section>
  );
}

export default Movies;
