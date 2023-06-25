import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import saveButton from "../../../images/save-inactive.svg";
import saveActiveButton from "../../../images/save-active.svg";

function MoviesCard({ movie, isSaved, onMovieSave, onMovieUnsave }) {
  const currentUser = useContext(CurrentUserContext);
  const { pathname } = useLocation();

  function handleUnsaveClick() {
    onMovieUnsave(movie);
  }

  return (
    <article className="movies-card">
      <img className="movies-card__image" src={movie.image} alt={movie.name} />
      <div className=" button movies-card__description">
        <div className="movies-card__item">
          <h2 className="movies-card__name">{movie.name}</h2>
          {pathname === "/movies" && (
            <button
              type="button"
              aria-label="Добавить в избранное"
              className={
                isSaved
                  ? "button movies-card__save-button_saved"
                  : "button movies-card__save-button"
              }
              onClick={onMovieSave}
            >
              <img
                src={isSaved ? saveActiveButton : saveButton}
                alt="Добавить в избранное"
              />
            </button>
          )}
          {pathname === "/saved-movies" && (
            <button
              type="button"
              aria-label="Удалить из избранного"
              className="button movies-card__remove-button"
              onClick={handleUnsaveClick}
            />
          )}
        </div>
        <div className="movies-card__duration">{movie.duration}</div>
      </div>
    </article>
  );
}

export default MoviesCard;
