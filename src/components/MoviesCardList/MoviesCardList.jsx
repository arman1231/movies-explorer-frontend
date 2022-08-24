import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";


export default function MoviesCardList({ initialMovies }) {

  return (
      <section className="movies-card-list">
        {/* {[...new Array(12)].map((_, i) => {
          return <MoviesCard />;
        })} */}
        {
          initialMovies.map((movie) => {
            return (
              <MoviesCard image={movie.image.url} nameRU={movie.nameRU} duration={movie.duration} isSaved={movie.isSaved} key={movie.id} />
            );
          })
        }
        
       
      </section>
    
  );
}
