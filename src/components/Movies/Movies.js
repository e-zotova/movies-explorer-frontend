import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm.js';
import FilterCheckbox from '../Movies/FilterCheckbox/FilterCheckbox.js';
import Preloader from '../Movies/Preloader/Preloader.js';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList.js';
import MoviesCard from '../Movies/MoviesCard/MoviesCard.js';

function Movies() {

  return (
    <section className="movies">
      <SearchForm />
      <Preloader />
      <MoviesCardList />
      <MoviesCard />
    </section>
  );
}

export default Movies;