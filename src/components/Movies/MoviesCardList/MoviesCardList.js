import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList({ movies, onMovieSave, onMovieRemove }) {

  return (
    <ul className="movies-card-list">
      {movies.map((movie) => (
        <MoviesCard
          key={movie._id}
          movie={movie}
          onMovieSave={onMovieSave}
          onMovieRemove={onMovieRemove}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
