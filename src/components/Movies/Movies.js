import { useEffect, useState } from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";
import {
  calculateInitialAmount,
  calculateMoreAmount,
} from "../../utils/calculateMoviesAmount.js";
import moviesApi from "../../utils/MoviesApi.js";
import { filterFoundMovies } from "../../utils/findMovies.js";

function Movies({
  loggedIn,
  moviesNotFound,
  setPopupMessage,
  setPopupOpen,
  setMoviesNotFound,
  foundMoviesList,
  setFoundMoviesList,
  displayedMovies,
  setDisplayedMovies,
  savedMoviesList,
  onMovieSave,
  onMovieRemove,
  searchQuery,
  setSearchQuery,
  isShortChecked,
  setIsShortChecked,
}) {
  const [preloader, setPreloader] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [initialAmount, setInitialAmount] = useState(0);
  const [moreAmount, setMoreAmount] = useState(0);

  useEffect(() => {
    function onWindowResize() {
      setScreenWidth(window.innerWidth);
      setInitialAmount(calculateInitialAmount());
    }

    function addTimeout() {
      setTimeout(onWindowResize, 500);
    }
    window.addEventListener("resize", addTimeout);
    setInitialAmount(calculateInitialAmount());
    setMoreAmount(calculateMoreAmount());

    return () => {
      clearTimeout();
      window.removeEventListener("resize", addTimeout);
    };
  }, [screenWidth]);

  useEffect(() => {
    if (localStorage.getItem("foundMovies")) {
      setDisplayedMovies(
        JSON.parse(localStorage.getItem("foundMovies")).slice(0, initialAmount)
      );
    }

    if (localStorage.getItem("searchQuery")) {
      setSearchQuery(localStorage.getItem("searchQuery"));
    }
    if (localStorage.getItem("shortMovies")) {
      setIsShortChecked(JSON.parse(localStorage.getItem("shortMovies")));
    }
  }, [initialAmount]);

  useEffect(() => {
    if (localStorage.getItem("foundMovies")) {
      setDisplayedMovies(
        JSON.parse(localStorage.getItem("foundMovies")).slice(0, initialAmount)
      );
    }
  }, [foundMoviesList]);

  function onGetMovies() {
    setPreloader(true);
    moviesApi
      .getMovies()
      .then((movies) => {
        const filteredMovies = filterFoundMovies(
          movies,
          searchQuery,
          isShortChecked
        );
        if (filteredMovies.length > 0) {
          setMoviesNotFound(false);
          setFoundMoviesList(filteredMovies);
          localStorage.setItem("foundMovies", JSON.stringify(filteredMovies));
          localStorage.setItem("searchQuery", searchQuery);
          localStorage.setItem("shortMovies", isShortChecked);
        } else {
          setMoviesNotFound(true);
        }
      })
      .catch(() => {
        setMoviesNotFound(true);
        setPopupMessage(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
        setPopupOpen(true);
      })
      .finally(() => {
        setPreloader(false);
      });
  }

  const handleMoreClick = () => {
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
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onGetMovies={onGetMovies}
          foundMoviesList={foundMoviesList}
          displayedMovies={displayedMovies}
          setDisplayedMovies={setDisplayedMovies}
          setFoundMoviesList={setFoundMoviesList}
          setMoviesNotFound={setMoviesNotFound}
        />
        <div>
          <MoviesCardList
            preloader={preloader}
            moviesNotFound={moviesNotFound}
            displayedMovies={displayedMovies}
            onMovieSave={onMovieSave}
            savedMoviesList={savedMoviesList}
            onMovieRemove={onMovieRemove}
          />
          <div className="movies__more">
            {foundMoviesList.length > displayedMovies.length && (
              <button
                type="button"
                className="button movies__more-button"
                onClick={handleMoreClick}
              >
                Ещё
              </button>
            )}
          </div>
        </div>
      </main>
      <Footer className="footer" />
    </>
  );
}

export default Movies;
