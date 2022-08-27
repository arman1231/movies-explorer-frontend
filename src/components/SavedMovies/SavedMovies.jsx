import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import p1 from "../../images/1.jpg";
import p2 from "../../images/2.jpg";
import p3 from "../../images/3.jpg";

export default function SavedMovies() {
  const initialMovies = [
    {
      img: p1,
      title: "33 слова о дизайне",
      duration: "1ч 17м",
      isSaved: true,
    },
    {
      img: p2,
      title: "Киноальманах «100 лет дизайна»",
      duration: "1ч 17м",
      isSaved: true,
    },
    {
      img: p3,
      title: "В погоне за Бенкси",
      duration: "1ч 17м",
      isSaved: true,
    },
   
  ];
  return (
    <section className="saved-movies">
      <div className="container">
        <SearchForm />
        <MoviesCardList initialMovies={initialMovies} />
      </div>
    </section>
  );
}
