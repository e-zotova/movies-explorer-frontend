export function filterFoundMovies(movies, searchQuery, isShortChecked) {
  const shortDuration = 40;

  const movieFiltered = movies.filter((movie) => {
    const name = movie.nameRU.toLowerCase();
    const query = searchQuery.toLowerCase();

    if (isShortChecked) {
      return name.includes(query) && movie.duration <= shortDuration;
    } else {
      return name.includes(query);
    }
  });
  return movieFiltered;
}
