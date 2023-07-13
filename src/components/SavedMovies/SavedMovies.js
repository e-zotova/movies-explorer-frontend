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
  const filterSavedMovies = filterFoundMovies(
    savedMoviesList,
    searchQuery,
    isShortChecked
  );

  useEffect(() => {
    setSearchQuery("");
    setIsShortChecked(false);
  }, []);

  useEffect(() => {
    setFilteredMovies(savedMoviesList);
  }, [setFilteredMovies]);

  function onGetSavedMovies() {
    if (filterSavedMovies.length > 0) {
      setMoviesNotFound(false);
      setFilteredMovies(filterSavedMovies);
    } else {
      setMoviesNotFound(true);
    }
  }

  //handle checkbox switch
  const handleShortCheckbox = () => {
    setIsShortChecked(!isShortChecked);
    if (!isShortChecked) {
      setFilteredMovies(findShortMovies(filteredMovies));
    } else {
      setFilteredMovies(savedMoviesList);
    }
    console.log(isShortChecked);
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
