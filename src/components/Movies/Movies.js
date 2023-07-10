import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";
import { useEffect, useState } from "react";
import {
  DESKTOP_WIDTH,
  DESKTOP_AMOUNT,
  TABLET_WIDTH,
  TABLET_AMOUNT,
  MOBILE_WIDTH,
  MOBILE_AMOUNT,
} from "../../constants/constants.js";

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
    }
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, [screenWidth]);

  useEffect(() => {
    function calculateInitialAmount() {
      setScreenWidth(window.innerWidth);
      if (screenWidth >= DESKTOP_WIDTH) {
        setInitialAmount(DESKTOP_AMOUNT);
        setMoreAmount(3);
      } else if (screenWidth >= TABLET_WIDTH) {
        setInitialAmount(TABLET_AMOUNT);
        setMoreAmount(2);
      } else if (screenWidth >= MOBILE_WIDTH) {
        setInitialAmount(MOBILE_AMOUNT);
        setMoreAmount(2);
      }
    }

    calculateInitialAmount();
    if (displayedMovies.length === 0) {
      setDisplayedMovies(foundMoviesList.slice(0, initialAmount));
    }
  }, [screenWidth, foundMoviesList, initialAmount, displayedMovies.length]);

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
