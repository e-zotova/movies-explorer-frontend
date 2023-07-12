import { useEffect, useState } from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";
import { filterFoundMovies } from "../../utils/findMovies.js";

function SavedMovies({
  loggedIn,
  savedMoviesList,
  onMovieRemove,
  searchQuery,
  setSearchQuery,
  isShortChecked,
  setIsShortChecked,
  setMoviesNotFound,
}) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    setSearchQuery("");
    setIsShortChecked(false);
  }, []);

  function onGetSavedMovies() {
    setFilteredMovies(
      filterFoundMovies(savedMoviesList, searchQuery, isShortChecked)
    );

    if (filteredMovies.length > 0) {
      setMoviesNotFound(false);
      setIsSearched(true);
    } else {
      setMoviesNotFound(true);
    }
  }

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
        />
        <MoviesCardList
          displayedMovies={isSearched ? filteredMovies : savedMoviesList}
          onMovieRemove={onMovieRemove}
          savedMoviesList={savedMoviesList}
        />
      </main>
      <Footer className="footer" />
    </>
  );
}

export default SavedMovies;
