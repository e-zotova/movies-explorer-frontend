import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import Preloader from "../Movies/Preloader/Preloader.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";

function SavedMovies({
  loggedIn,
  preloader,
  moviesList,
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
            moviesList={moviesList}
            onMovieRemove={onMovieRemove}
          />
        )}
      </main>
      <Footer className="footer" />
    </>
  );
}

export default SavedMovies;
