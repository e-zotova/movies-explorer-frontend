import { useEffect, useState } from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";
import {
  calculateInitialAmount,
  calculateMoreAmount,
} from "../../utils/calculateMoviesAmount.js";

function Movies({
  loggedIn,
  moviesNotFound,
  preloader,
  foundMoviesList,
  setFoundMoviesList,
  onGetMovies,
  onMovieSave,
  onMovieRemove,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [screenWidth, setScreenWidth] = useState(0);
  const [initialAmount, setInitialAmount] = useState(0);
  const [moreAmount, setMoreAmount] = useState(0);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [isShortChecked, setIsShortChecked] = useState(false);

  useEffect(() => {
    function onWindowResize() {
      setScreenWidth(window.innerWidth);
      setInitialAmount(calculateInitialAmount());
    }
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, [screenWidth]);

  useEffect(() => {
    setInitialAmount(calculateInitialAmount());

    if (displayedMovies.length === 0) {
      setDisplayedMovies(foundMoviesList.slice(0, initialAmount));
    }
  }, [displayedMovies.length, foundMoviesList, initialAmount]);

  useEffect(() => {
    if (localStorage.getItem("foundMovies")) {
      setFoundMoviesList(JSON.parse(localStorage.getItem("foundMovies")));
    }
    if (localStorage.getItem("searchQuery")) {
      setSearchQuery(localStorage.getItem("searchQuery"));
    }
    if (localStorage.getItem("shortMovies")) {
      setIsShortChecked(JSON.parse(localStorage.getItem("shortMovies")));
    }
  }, [setFoundMoviesList]);

  const handleMoreClick = () => {
    setMoreAmount(calculateMoreAmount());

    const moreMovies = foundMoviesList.slice(
      displayedMovies.length,
      moreAmount + displayedMovies.length
    );
    setDisplayedMovies([...displayedMovies, ...moreMovies]);
  };

  return (
    <>
      <Header className="header" loggedIn={loggedIn} />
      <main className="movies">
        <SearchForm
          isShortChecked={isShortChecked}
          setIsShortChecked={setIsShortChecked}
          onGetMovies={onGetMovies}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div>
          <MoviesCardList
            preloader={preloader}
            moviesNotFound={moviesNotFound}
            displayedMovies={displayedMovies}
            onMovieSave={onMovieSave}
            onMovieRemove={onMovieRemove}
          />
          {foundMoviesList.length > displayedMovies.length && (
            <div className="movies__more">
              <button
                type="button"
                className="button movies__more-button"
                onClick={handleMoreClick}
              >
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
