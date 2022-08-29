import React from "react";
import "./MoviesCard.css";
import savedIcon from "../../images/saved-icon.svg";
import removeSavedIcon from "../../images/remove-from-saved-icon.svg";
import { Link, useLocation } from "react-router-dom";

export default function MoviesCard({
  movie,
  image,
  nameRU,
  duration,
  isSaved,
  trailerLink,
  handleSaveMovie,
}) {
  const location = useLocation();
  function hoursPattern(duration) {
    return `${Math.floor(duration / 60)}ч${Math.round(
      (duration / 60 - Math.floor(duration / 60)) * 60
    )}м`;
  }

  function handleSaveClick() {
    handleSaveMovie(movie);
  }

  console.log(location.pathname);
  return (
    <div className="movie-card">
      <div className="movie-card__image-wrap">
        <Link
          className="movie-card__trailer-link"
          to={{ pathname: `${trailerLink}` }}
          target="_blank"
        >
          <img
            className="movie-card__image"
            src={
              (location.pathname != "/movies"
                ? `${image}`
                : `https://api.nomoreparties.co/${image.url}`)
            }
            // src={`https://api.nomoreparties.co/${image}`}
            alt={nameRU}
          />
        </Link>
        {isSaved ? (
          <>
            <button className="movie-card__remove-from-saved-icon">
              <img src={removeSavedIcon} alt="Удалить из сохраненных" />
            </button>
            <button className="movie-card__saved-icon">
              <img src={savedIcon} alt="Сохранено" />
            </button>
          </>
        ) : (
          <button
            className="movie-card__savebtn button"
            onClick={handleSaveClick}
          >
            Сохранить
          </button>
        )}
      </div>

      <div className="movie-card__info">
        <span className="movie-card__caption">{nameRU}</span>
        <span className="movie-card__duration">{hoursPattern(duration)}</span>
      </div>
    </div>
  );
}
