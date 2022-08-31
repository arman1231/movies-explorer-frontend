import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function Movies({
  filteredMovies,
  savedMovies,
  handleSearchSubmit,
  visibleMoviesCount,
  handleLoadMoreClick,
  handleSaveMovie,
  deleteMovieFromSaved,
  handleToggleShortMovie,
  isLoading,
}) {
  const [isHidden, setIsHidden] = React.useState(false);
  function handleClick(e) {
    e.preventDefault();
    handleLoadMoreClick();
  }

  React.useEffect(() => {
    if (visibleMoviesCount >= filteredMovies.length) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, [visibleMoviesCount, filteredMovies, isHidden]);

  return (
    <section className="movies">
      <div className="container">
        <SearchForm
          handleSearchSubmit={handleSearchSubmit}
          handleToggleShortMovie={handleToggleShortMovie}
        />

        <MoviesCardList
          filteredMovies={filteredMovies}
          savedMovies={savedMovies}
          visibleMoviesCount={visibleMoviesCount}
          handleSaveMovie={handleSaveMovie}
          deleteMovieFromSaved={deleteMovieFromSaved}
          type="movies"
          isLoading={isLoading}
        />
        {filteredMovies.length > 12 ? (
          <button
            className={`movies__loadmore button ${isHidden ? "hide" : ""}`}
            onClick={handleClick}
          >
            Ещё
          </button>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
