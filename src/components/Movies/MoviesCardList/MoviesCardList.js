import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import Preloader from "../../Movies/Preloader/Preloader.js";

function MoviesCardList({
  preloader,
  moviesNotFound,
  moviesList,
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
          {moviesList.map((movie) => (
            <MoviesCard
              key={movie.id}
              movie={movie}
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
