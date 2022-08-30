import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { mainApi } from "../../utils/MainApi";

export default function SavedMovies({ savedMovies, visibleMoviesCount, deleteMovieFromSaved }) {
  return (
    <section className="saved-movies">
      <div className="container">
        <SearchForm />
        <MoviesCardList filteredMovies={savedMovies} visibleMoviesCount={visibleMoviesCount} />
      </div>
    </section>
  );
}
