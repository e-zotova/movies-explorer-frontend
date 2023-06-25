import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList({ movies, onMovieSave, onMovieRemove }) {

  return (
    <section className="movies-card-list">
      {movies.map((movie) => (
        <MoviesCard
          key={movie._id}
          movie={movie}
          onMovieSave={onMovieSave}
          onMovieRemove={onMovieRemove}
        />
      ))}
    </section>
  );
}

export default MoviesCardList;
