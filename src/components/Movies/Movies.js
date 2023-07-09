import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";

function Movies({
  loggedIn,
  moreButton,
  moviesNotFound,
  preloader,
  moviesList,
  onGetMovies,
  onMovieSave,
  onMovieRemove,
}) {
  return (
    <>
      <Header className="header" loggedIn={loggedIn} />
      <main className="movies">
        <SearchForm onGetMovies={onGetMovies} />
        <div>
          <MoviesCardList
            preloader={preloader}
            moviesNotFound={moviesNotFound}
            moviesList={moviesList}
            onMovieSave={onMovieSave}
            onMovieRemove={onMovieRemove}
          />
          {moreButton && (
            <div className="movies__more">
              <button type="button" className="button movies__more-button">
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
