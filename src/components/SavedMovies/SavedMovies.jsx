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
  responseMessage,
  searchResultSavedMoviesApp,
}) {
  const [actualMovies, setActualMovies] = React.useState([]);
  const [searchResultSavedMovies, setSearchResultSavedMovies] = React.useState(searchResultSavedMoviesApp)
  React.useEffect(() => {
    if (actualMovies.length !== searchResultSavedMovies.length) {
      setActualMovies(JSON.parse(localStorage.getItem('searchResultSavedMovies')))
    }
  }, [searchResultSavedMoviesApp]);
  React.useEffect(() => {
    if (actualMovies.length === 0) {
      setActualMovies(JSON.parse(localStorage.getItem('savedMovies2')))
    } else {
      setActualMovies(savedMovies)
    }

    return () => {
      setSearchResultSavedMovies([])
      localStorage.setItem('searchResultSavedMovies', JSON.stringify([]))
    }
  }, [savedMovies]);
  return (
    <section className="saved-movies">
      <div className="container">
        <SearchForm
          handleSearchSubmit={handleSavedMoviesSearch}
          handleToggleShortMovie={handleToggleShortMovie}
          responseMessage={responseMessage}
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
