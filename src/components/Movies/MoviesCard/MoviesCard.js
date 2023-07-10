import { useState } from "react";
import { useLocation } from "react-router-dom";
import saveButton from "../../../images/save-inactive.svg";
import saveActiveButton from "../../../images/save-active.svg";
import { BASE_MOVIES_URL } from "../../../utils/constants.js";

function MoviesCard({ movie, image, savedMoviesList, onMovieSave, onMovieRemove }) {
  const { pathname } = useLocation();

  const [isSaved, setIsSaved] = useState(false);

  function handleSaveButtonClick() {
    setIsSaved(!isSaved);
    if (!isSaved) {
      onMovieSave(movie);
    } else {
      onMovieRemove(movie._id);
    }
  }

  function handleRemoveClick() {
    onMovieRemove(movie._id);
  }

  function setDuration(duration) {
    let hours = Math.floor(duration / 60);
    let minutes = duration % 60;
    if (minutes === 0) {
      return hours + "ч";
    } else if (hours === 0) {
      return minutes + "м";
    } else {
      return hours + "ч " + minutes + "м";
    }
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
          src={image.url ? `${BASE_MOVIES_URL}${image.url}` : image}
          alt={movie.nameRU}
        />
      </a>
      <div className="movies-card__description">
        <div className="movies-card__item">
          <h2 className="movies-card__name">{movie.nameRU}</h2>
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
        <p className="movies-card__duration">{setDuration(movie.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
