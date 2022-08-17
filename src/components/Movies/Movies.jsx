import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import "./Movies.css";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

export default function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList />
      <button className="movies__loadmore">Ещё</button>
    </section>
  );
}
