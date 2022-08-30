import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({
  filteredMovies,
  savedMovies,
  visibleMoviesCount,
  handleSaveMovie,
  deleteMovieFromSaved,
  type
}) {
  return (
    <section className="movies-card-list">
      {/* {[...new Array(12)].map((_, i) => {
          return <MoviesCard />;
        })} */}
      {Array.isArray(filteredMovies)
        ? filteredMovies.slice(0, visibleMoviesCount).map((movie) => {
            return (
              <MoviesCard
                savedMovies={savedMovies}
                movie={movie}
                image={movie.image}
                nameRU={movie.nameRU}
                duration={movie.duration}
                trailerLink={movie.trailerLink}
                isSaved={movie.isSaved}
                key={movie.id}
                handleSaveMovie={handleSaveMovie}
                deleteMovieFromSaved={deleteMovieFromSaved}
                type={type}
              />
            );
          })
        : ""}
    </section>
  );
}
