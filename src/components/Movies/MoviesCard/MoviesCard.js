import { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

function MoviesCard({ movie, onMovieSave }) {
  const currentUser = useContext(CurrentUserContext);

  const movieSaveButtonClassName = `movies-card__save-button ${"movies-card__save-button_active"}`;

  function handleSaveClick() {
    onMovieSave(movie);
  }

  return (
    <article className="movies-card">
      <img className="movies-card__image" src={movie.image} alt={movie.name} />
      <div className="movies-card__description">
        <div className="movies-card__item">
          <h2 className="movies-card__name">{movie.name}</h2>
          <button
            type="button"
            aria-label="Добавить в избранное"
            className={`movies-card__save-item ${movieSaveButtonClassName}`}
            onClick={handleSaveClick}
          />
        </div>
        <div className="movies-card__duration">{movie.duration}</div>
      </div>
    </article>
  );
}

export default MoviesCard;
