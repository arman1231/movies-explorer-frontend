import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies({ savedMovies, visibleMoviesCount, deleteMovieFromSaved, handleSavedMoviesSearch ,handleToggleShortMovie }) {
  return (
    <section className="saved-movies">
      <div className="container">
        <SearchForm handleSearchSubmit={handleSavedMoviesSearch} handleToggleShortMovie={handleToggleShortMovie}/>
        <MoviesCardList filteredMovies={savedMovies} visibleMoviesCount={visibleMoviesCount} deleteMovieFromSaved={deleteMovieFromSaved} type="saved-movies" />
      </div>
    </section>
  );
}
