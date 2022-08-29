import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies({ savedMovies, visibleMoviesCount }) {
  return (
    <section className="saved-movies">
      <div className="container">
        <SearchForm />
        <MoviesCardList filteredMovies={savedMovies} visibleMoviesCount={visibleMoviesCount} />
      </div>
    </section>
  );
}
