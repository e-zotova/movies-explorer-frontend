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
import { filterFoundMovies, findShortMovies } from "../../utils/findMovies.js";

function Movies({
  loggedIn,
  moviesNotFound,
  setPopupMessage,
  setPopupOpen,
  setMoviesNotFound,
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

  //handle window resize
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

  // set searchQuery, checkbox and displayed movies
  useEffect(() => {
    const foundMovies = JSON.parse(localStorage.getItem("foundMovies"));
    setIsShortChecked(JSON.parse(localStorage.getItem("shortMovies")));
    setSearchQuery(localStorage.getItem("searchQuery"));

    if (JSON.parse(localStorage.getItem("shortMovies")) === true) {
      setDisplayedMovies(findShortMovies(foundMovies));
    } else {
      if(foundMovies) {
        setDisplayedMovies(foundMovies.slice(0, initialAmount));
      }
    }
  }, [setDisplayedMovies, isShortChecked, initialAmount]);

  //handle checkbox switch
  const handleShortCheckbox = () => {
    const foundMovies = JSON.parse(localStorage.getItem("foundMovies"));
    setIsShortChecked(!isShortChecked);
    if (isShortChecked) {
      setDisplayedMovies(findShortMovies(foundMovies));
    } else {
      setDisplayedMovies(foundMovies);
    }
    localStorage.setItem("shortMovies", !isShortChecked);
  };

  //find and save movies
  function onGetMovies() {
    setPreloader(true);
    moviesApi
      .getMovies()
      .then((movies) => {
        const filteredMovies = filterFoundMovies(movies, searchQuery);
        if (filteredMovies.length > 0) {
          setMoviesNotFound(false);
          setDisplayedMovies(isShortChecked ? findShortMovies(filteredMovies) : filteredMovies);
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
    const foundMovies = JSON.parse(localStorage.getItem("foundMovies"));
    const moreMovies = foundMovies.slice(
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
          handleShortCheckbox={handleShortCheckbox}
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
          {JSON.parse(localStorage.getItem("foundMovies")).length > displayedMovies.length && (
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
