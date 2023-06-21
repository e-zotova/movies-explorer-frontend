import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList({ movies, onMovieSave, onMovieUnsave }) {

  return (
    <section className="movies-card-list">
      {movies.map((movie) => (
        <MoviesCard
          key={movie._id}
          movie={movie}
          onMovieSave={onMovieSave}
          onMovieUnsave={onMovieUnsave}
        />
      ))}
    </section>
  );
}

export default MoviesCardList;
