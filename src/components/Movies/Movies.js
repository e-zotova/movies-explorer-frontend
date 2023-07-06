import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import Preloader from "../Movies/Preloader/Preloader.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";

function Movies({preloader, moviesList, onGetMovies, onMovieSave}) {

  return (
    <>
      <Header className="header" />
      <main className="movies">
        <SearchForm onGetMovies={onGetMovies} />
        {preloader && <Preloader />}
        {!preloader && (
          <div>
            <MoviesCardList moviesList={moviesList} onMovieSave={onMovieSave} />
            <div className="movies__more">
              <button type="button" className="button movies__more-button">
                Ещё
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer className="footer" />
    </>
  );
}

export default Movies;
