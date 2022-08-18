import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import p1 from "../../images/1.jpg";
import p2 from "../../images/2.jpg";
import p3 from "../../images/3.jpg";
import p4 from "../../images/4.jpg";
import p5 from "../../images/5.jpg";
import p6 from "../../images/6.jpg";
import p7 from "../../images/7.jpg";
import p8 from "../../images/8.jpg";
import p9 from "../../images/9.jpg";
import p10 from "../../images/10.jpg";
import p11 from "../../images/11.jpg";
import p12 from "../../images/12.jpg";

export default function Movies() {
  const movies = [
    {
      img: p1,
      title: '33 слова о дизайне',
      duration: '1ч 17м',
    },
    {
      img: p2,
      title: 'Киноальманах «100 лет дизайна»',
      duration: '1ч 17м',
    },
    {
      img: p3,
      title: 'В погоне за Бенкси',
      duration: '1ч 17м',
    },
    {
      img: p4,
      title: 'Баския: Взрыв реальности',
      duration: '1ч 17м',
    },
    {
      img: p5,
      title: 'Бег это свобода',
      duration: '1ч 17м',
    },
    {
      img: p6,
      title: 'Книготорговцы',
      duration: '1ч 17м',
    },
    {
      img: p7,
      title: 'Когда я думаю о Германии ночью',
      duration: '1ч 17м',
    },
    {
      img: p8,
      title: 'Gimme Danger: История Игги и The Stooges',
      duration: '1ч 17м',
    },
    {
      img: p9,
      title: 'Дженис: Маленькая девочка грустит',
      duration: '1ч 17м',
    },
    {
      img: p10,
      title: 'Соберись перед прыжком',
      duration: '1ч 17м',
    },
    {
      img: p11,
      title: 'Пи Джей Харви: A dog called money',
      duration: '1ч 17м',
    },
    {
      img: p12,
      title: 'По волнам: Искусство звука в кино',
      duration: '1ч 17м',
    },
  ];
  return (
    <section className="movies">
      <div className="container">
        <SearchForm />
        <MoviesCardList movies={movies} />
        <button className="movies__loadmore">Ещё</button>
      </div>
    </section>
  );
}
