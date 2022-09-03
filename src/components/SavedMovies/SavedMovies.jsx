import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies({
  savedMovies,
  visibleMoviesCount,
  deleteMovieFromSaved,
  handleSavedMoviesSearch,
  handleToggleShortMovie,
}) {
  const [actualMovies, setActualMovies] = React.useState([]);
  React.useEffect(() => {
    if (actualMovies.length === 0) {
      setActualMovies(JSON.parse(localStorage.getItem('savedMovies2')))
    } else {
      setActualMovies(savedMovies)
    }
  }, [savedMovies]);
  return (
    <section className="saved-movies">
      <div className="container">
        <SearchForm
          handleSearchSubmit={handleSavedMoviesSearch}
          handleToggleShortMovie={handleToggleShortMovie}
        />
        <MoviesCardList
          // filteredMovies={savedMovies}
          filteredMovies={actualMovies}
          visibleMoviesCount={visibleMoviesCount}
          deleteMovieFromSaved={deleteMovieFromSaved}
          type="saved-movies"
        />
      </div>
    </section>
  );
}
