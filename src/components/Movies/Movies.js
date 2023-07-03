import { useState } from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
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
    <>
      <Header className="header" />
      <main className="movies">
        <SearchForm preloader={preloader} setPreloader={setPreloader} />
        {preloader && <Preloader />}
        {!preloader && (
          <div>
            <MoviesCardList movies={moviesList} onMovieSave={onMovieSave} />
            <div className="movies__more">
              <button type="button" className="button movies__more-button">
                Ещё
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer className="footer" />
    </>
  );
}

export default Movies;
