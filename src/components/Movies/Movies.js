import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";
import { useEffect, useState } from "react";

function Movies({
  loggedIn,
  moreButton,
  moviesNotFound,
  preloader,
  foundMoviesList,
  setFoundMoviesList,
  onGetMovies,
  onMovieSave,
  onMovieRemove,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (localStorage.getItem("foundMovies")) {
      setFoundMoviesList(JSON.parse(localStorage.getItem("foundMovies")));
    }
  }, [setFoundMoviesList]);

  return (
    <>
      <Header className="header" loggedIn={loggedIn} />
      <main className="movies">
        <SearchForm
          onGetMovies={onGetMovies}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div>
          <MoviesCardList
            preloader={preloader}
            moviesNotFound={moviesNotFound}
            moviesList={foundMoviesList}
            onMovieSave={onMovieSave}
            onMovieRemove={onMovieRemove}
          />
          {moreButton && (
            <div className="movies__more">
              <button type="button" className="button movies__more-button">
                Ещё
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer className="footer" />
    </>
  );
}

export default Movies;
