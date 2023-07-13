import { useEffect, useState } from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";
import moviesApi from "../../utils/MoviesApi.js";
import { filterFoundMovies, findShortMovies } from "../../utils/findMovies.js";
import {
  calculateInitialAmount,
  calculateMoreAmount,
} from "../../utils/calculateMoviesAmount.js";

function Movies({
  loggedIn,
  moviesNotFound,
  setPopupMessage,
  setPopupOpen,
  setMoviesNotFound,
  savedMoviesList,
  onMovieSave,
  onMovieRemove,
  searchQuery,
  setSearchQuery,
  isShortChecked,
  setIsShortChecked,
}) {
  const [preloader, setPreloader] = useState(false);
  const foundMoviesList = JSON.parse(localStorage.getItem("foundMovies"));
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [initialAmount, setInitialAmount] = useState(calculateInitialAmount());
  const [moreAmount, setMoreAmount] = useState(0);
  const [isMoreVisible, setIsMoreVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

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
    setIsShortChecked(JSON.parse(localStorage.getItem("shortMovies")));
    setSearchQuery(localStorage.getItem("searchQuery"));

    if (JSON.parse(localStorage.getItem("shortMovies")) === true) {
      setDisplayedMovies(findShortMovies(foundMoviesList));
    } else {
      if (foundMoviesList) {
        setDisplayedMovies(foundMoviesList.slice(0, initialAmount));
      } else {
        setMoviesNotFound(false);
      }
    }
  }, [setDisplayedMovies, isShortChecked, initialAmount]);

  //handle checkbox switch
  const handleShortCheckbox = () => {
    setIsShortChecked(!isShortChecked);
    if (isShortChecked) {
      setDisplayedMovies(findShortMovies(foundMoviesList));
    } else {
      setDisplayedMovies(foundMoviesList);
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
          setDisplayedMovies(
            isShortChecked
              ? findShortMovies(filteredMovies)
              : filteredMovies.slice(0, initialAmount)
          );
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

  useEffect(() => {
    if (foundMoviesList)
      setDisplayedMovies(foundMoviesList.slice(0, initialAmount));
  }, [setDisplayedMovies, initialAmount]);

  useEffect(() => {
    if (foundMoviesList) {
      if (
        displayedMovies.length < foundMoviesList.length &&
        displayedMovies.length >= initialAmount
      ) {
        setIsMoreVisible(true);
      } else {
        setIsMoreVisible(false);
      }
    }
  }, [foundMoviesList, displayedMovies, initialAmount]);

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
        </div>
        <div className="movies__more">
          {isMoreVisible && (
            <button
              type="button"
              className="button movies__more-button"
              onClick={handleMoreClick}
            >
              Ещё
            </button>
          )}
        </div>
      </main>
      <Footer className="footer" />
    </>
  );
}

export default Movies;
