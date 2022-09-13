import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

export default function MoviesCardList({
  filteredMovies,
  savedMovies,
  visibleMoviesCount,
  handleSaveMovie,
  deleteMovieFromSaved,
  type,
  isLoading,
}) {
  const location = useLocation().pathname;
  // const [updatedMovies, setUpdatedMovies] = React.useState(filteredMovies);
  // React.useEffect(() => {
  //   setUpdatedMovies(filteredMovies)
  //   console.log(filteredMovies);
  // }, [filteredMovies])
  return (
    <section className="movies-card-list">
      {/* {[...new Array(12)].map((_, i) => {
          return <MoviesCard />;
        })} */}

        { 
        isLoading ? <Preloader /> :
        location === '/movies' ?
        Array.isArray(filteredMovies)
        ? filteredMovies.slice(0, visibleMoviesCount).map((movie) => {
            return (
              <MoviesCard
                key={movie._id ? movie._id : movie.id}
                savedMovies={savedMovies}
                movie={movie}
                image={movie.image}
                nameRU={movie.nameRU}
                duration={movie.duration}
                trailerLink={movie.trailerLink}
                isSaved={movie.isSaved}
                handleSaveMovie={handleSaveMovie}
                deleteMovieFromSaved={deleteMovieFromSaved}
                type={type}
                filteredMovies={filteredMovies}
              />
            );
          })
        : "": Array.isArray(filteredMovies)
        ? filteredMovies.map((movie) => {
            return (
              <MoviesCard
                key={movie._id ? movie._id : movie.id}
                savedMovies={savedMovies}
                movie={movie}
                image={movie.image}
                nameRU={movie.nameRU}
                duration={movie.duration}
                trailerLink={movie.trailerLink}
                isSaved={movie.isSaved}
                handleSaveMovie={handleSaveMovie}
                deleteMovieFromSaved={deleteMovieFromSaved}
                type={type}
              />
            );
          })
        : ""}
      {}
    </section>
  );
}
