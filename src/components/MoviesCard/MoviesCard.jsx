import React from "react";
import "./MoviesCard.css";
import savedIcon from "../../images/saved-icon.svg";
import removeSavedIcon from "../../images/remove-from-saved-icon.svg";

export default function MoviesCard({ image, title, duration, isSaved }) {
  return (
    <div className="movie-card">
      <div className="movie-card__image-wrap">
        <img className="movie-card__image" src={image} alt="pic 1" />
        {isSaved ? (
          <>
            <button className="movie-card__remove-from-saved-icon">
              <img
                src={removeSavedIcon}
                alt="Удалить из сохраненных"
              />
            </button>
            <button className="movie-card__saved-icon">
              <img
                src={savedIcon}
                alt="Сохранено"
              />
            </button>
          </>
        ) : (
          <button className="movie-card__savebtn button">Сохранить</button>
        )}
      </div>

      <div className="movie-card__info">
        <span className="movie-card__caption">{title}</span>
        <span className="movie-card__duration">{duration}</span>
      </div>
    </div>
  );
}
