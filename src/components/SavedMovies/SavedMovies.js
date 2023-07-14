import { useEffect, useState } from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";
import { filterFoundMovies, findShortMovies } from "../../utils/findMovies.js";

function SavedMovies({
  loggedIn,
  savedMoviesList,
  onMovieRemove,
  searchQuery,
  setSearchQuery,
  isShortChecked,
  setIsShortChecked,
  moviesNotFound,
  setMoviesNotFound,
}) {
  const [isFormEmpty, setIsFormEmpty] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    setSearchQuery("");
    setIsShortChecked(false);
  }, [setSearchQuery, setIsShortChecked]);

  useEffect(() => {
    setMoviesNotFound(false);
    setFilteredMovies(savedMoviesList);
  }, [setFilteredMovies, savedMoviesList, setMoviesNotFound]);

  // get saved movies
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
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onGetMovies={onGetSavedMovies}
          handleShortCheckbox={handleShortCheckbox}
          isFormEmpty={isFormEmpty}
          setIsFormEmpty={setIsFormEmpty}
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
