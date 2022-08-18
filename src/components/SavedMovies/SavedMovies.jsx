import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function Movies() {
    return (
      <section className="movies">
        <div className="container">
          <SearchForm />
          <MoviesCardList />
          <button className="movies__loadmore">Ещё</button>
        </div>
      </section>
    );
  }
