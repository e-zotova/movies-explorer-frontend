import { useState } from "react";
import { useLocation } from "react-router-dom";
import saveButton from "../../../images/save-inactive.svg";
import saveActiveButton from "../../../images/save-active.svg";

function MoviesCard({ movie, onMovieSave, onMovieRemove }) {
  const { pathname } = useLocation();

  const [isSaved, setIsSaved] = useState(false);

  function handleSaveButtonClick() {
    setIsSaved(!isSaved);
    onMovieSave(movie);
  }

  function handleRemoveClick() {
    document.querySelector('.movies-card').remove();
    onMovieRemove(movie);
  }

  return (
    <li className="movies-card">
      <a
        className="button movies-card__trailer"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movies-card__image"
          src={movie.image}
          alt={movie.nameRU}
        />
      </a>
      <div className="movies-card__description">
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
              onClick={handleSaveButtonClick}
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
              onClick={handleRemoveClick}
            />
          )}
        </div>
        <div className="movies-card__duration">{movie.duration}</div>
      </div>
    </li>
  );
}

export default MoviesCard;
