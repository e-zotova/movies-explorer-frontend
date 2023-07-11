import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import Preloader from "../Movies/Preloader/Preloader.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";

function SavedMovies({
  loggedIn,
  preloader,
  savedMoviesList,
  onGetMovies,
  onMovieRemove,
}) {
  return (
    <>
      <Header className="header" loggedIn={loggedIn} />
      <main className="saved-movies">
        <SearchForm onGetMovies={onGetMovies} />
        {preloader && <Preloader />}
        {!preloader && (
          <MoviesCardList
            displayedMovies={savedMoviesList}
            onMovieRemove={onMovieRemove}
            savedMoviesList={savedMoviesList}
          />
        )}
      </main>
      <Footer className="footer" />
    </>
  );
}

export default SavedMovies;
