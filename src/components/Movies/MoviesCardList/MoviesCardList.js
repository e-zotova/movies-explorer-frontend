import MoviesCard from "../MoviesCard/MoviesCard.js";
import Preloader from "../../Movies/Preloader/Preloader.js";

function MoviesCardList({
  preloader,
  moviesNotFound,
  displayedMovies,
  savedMoviesList,
  onMovieSave,
  onMovieRemove,
}) {
  return (
    <section className="movies-section">
      {preloader && <Preloader />}
      {!preloader && moviesNotFound && (
        <p className="movies-section__not-found">Ничего не найдено.</p>
      )}
      {!preloader && !moviesNotFound && (
        <ul className="movies-card-list">
          {displayedMovies.map((movie) => (
            <MoviesCard
              key={movie._id || movie.id}
              image={movie.image}
              movie={movie}
              savedMoviesList={savedMoviesList}
              onMovieSave={onMovieSave}
              onMovieRemove={onMovieRemove}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default MoviesCardList;
