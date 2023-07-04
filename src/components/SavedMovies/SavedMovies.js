import { useState } from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
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
    <>
      <Header className="header" />
      <main className="saved-movies">
        <SearchForm preloader={preloader} setPreloader={setPreloader} />
        {preloader && <Preloader />}
        {!preloader && (
          <MoviesCardList
            movies={savedMoviesList}
            onMovieRemove={onMovieRemove}
          />
        )}
      </main>
      <Footer className="footer" />
    </>
  );
}

export default SavedMovies;
