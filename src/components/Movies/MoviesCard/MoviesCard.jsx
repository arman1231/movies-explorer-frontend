import React from 'react';
import "./MoviesCard.css";
import p1 from "../../../images/1.jpg";

export default function MoviesCard() {
  return (
    <div className="movie-card">
        <div className="movie-card__image-wrap">
            <img  className="movie-card__image" src={p1} alt="pic 1" />
            <span className="movie-card__savebtn">Сохранить</span>
        </div>
        
        <div className="movie-card__info">
            <span className="movie-card__caption">33 слова о дизайне</span>
            <span className="movie-card__duration">1ч 17м</span>
        </div>
    </div>
  )
}
