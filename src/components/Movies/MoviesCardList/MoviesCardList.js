import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList({ moviesList, onMovieSave, onMovieRemove }) {
  return (
    <section className="movies-section">
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
    </section>
  );
}

export default MoviesCardList;
