import { useEffect, useState } from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";
import { filterFoundMovies, findShortMovies } from "../../utils/findMovies.js";

function SavedMovies({
  loggedIn,
  savedMoviesList,
  moviesNotFound,
  onMovieRemove,
  searchQuery,
  setSearchQuery,
  isShortChecked,
  setIsShortChecked,
  setMoviesNotFound,
}) {
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    setSearchQuery("");
    setIsShortChecked(false);
  }, []);

  useEffect(() => {
    setFilteredMovies(savedMoviesList);
  }, [setFilteredMovies]);

  function onGetSavedMovies() {
    setMoviesNotFound(false);
    const filteredSaved = filterFoundMovies(
      savedMoviesList,
      searchQuery,
      isShortChecked
    );
    if (filteredSaved.length > 0) {
      setFilteredMovies(filteredSaved);
    } else {
      setMoviesNotFound(true);
    }
  }

  //handle checkbox switch
  const handleShortCheckbox = () => {
    setMoviesNotFound(false);
    setIsShortChecked(!isShortChecked);
    if (!isShortChecked) {
      const savedShort = findShortMovies(filteredMovies);
      if (savedShort.length > 0) {
        setFilteredMovies(savedShort);
      } else {
        setMoviesNotFound(true);
      }
    } else {
      setFilteredMovies(savedMoviesList);
    }
  };

  return (
    <>
      <Header className="header" loggedIn={loggedIn} />
      <main className="saved-movies">
        <SearchForm
          isShortChecked={isShortChecked}
          setIsShortChecked={setIsShortChecked}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onGetMovies={onGetSavedMovies}
          handleShortCheckbox={handleShortCheckbox}
        />
        <MoviesCardList
          moviesNotFound={moviesNotFound}
          displayedMovies={filteredMovies}
          onMovieRemove={onMovieRemove}
          savedMoviesList={savedMoviesList}
        />
      </main>
      <Footer className="footer" />
    </>
  );
}

export default SavedMovies;
