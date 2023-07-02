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
    <main className="saved-movies">
      <Header className="header" />
      <SearchForm preloader={preloader} setPreloader={setPreloader} />
      {preloader && <Preloader />}
      {!preloader && (
        <MoviesCardList
          movies={savedMoviesList}
          onMovieRemove={onMovieRemove}
        />
      )}
      <Footer className="footer" />
    </main>
  );
}

export default SavedMovies;
