import React from 'react';
import "./MoviesCard.css";
import p1 from "../../images/1.jpg";

export default function MoviesCard({ image, title, duration }) {
  return (
    <div className="movie-card">
        <div className="movie-card__image-wrap">
            <img  className="movie-card__image" src={image} alt="pic 1" />
            <span className="movie-card__savebtn">Сохранить</span>
        </div>
        
        <div className="movie-card__info">
            <span className="movie-card__caption">{ title }</span>
            <span className="movie-card__duration">{ duration }</span>
        </div>
    </div>
  )
}
