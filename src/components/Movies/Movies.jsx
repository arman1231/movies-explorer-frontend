import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function Movies({ filteredMovies, savedMovies, handleSearchSubmit, visibleMoviesCount, handleLoadMoreClick, handleSaveMovie, deleteMovieFromSaved }) {
  function handleClick(e) {
    e.preventDefault();
    handleLoadMoreClick();
  }

  return (
    <section className="movies">
      <div className="container">
        <SearchForm handleSearchSubmit={handleSearchSubmit} />
        <MoviesCardList filteredMovies={filteredMovies} savedMovies={savedMovies} visibleMoviesCount={visibleMoviesCount} handleSaveMovie={handleSaveMovie} deleteMovieFromSaved={deleteMovieFromSaved} type="movies"/>
       { filteredMovies.length > 12 ? <button className="movies__loadmore button" onClick={handleClick }>Ещё</button> : "" } 
      </div>
    </section>
  );
}
