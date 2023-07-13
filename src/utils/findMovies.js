import { SHORT_DURATION } from "./constants";

export function filterFoundMovies(movies, searchQuery) {

  const movieFiltered = movies.filter((movie) => {
    const name = movie.nameRU.toLowerCase();
    const query = searchQuery.toLowerCase();

      return name.includes(query);
  });
  return movieFiltered;
}

export function findShortMovies (movies) {
  const shortMovies = movies.filter(movie => {
    return movie.duration <= SHORT_DURATION;
  });
  return shortMovies;
}
