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
            

            <img
              className="movie-card__remove-from-saved-icon"
              src={removeSavedIcon}
              alt="Удалить из сохраненных"
            />
                        <img
              className="movie-card__saved-icon"
              src={savedIcon}
              alt="Сохранено"
            />
          </>
        ) : (
          <span className="movie-card__savebtn button">Сохранить</span>
        )}
      </div>

      <div className="movie-card__info">
        <span className="movie-card__caption">{title}</span>
        <span className="movie-card__duration">{duration}</span>
      </div>
    </div>
  );
}
