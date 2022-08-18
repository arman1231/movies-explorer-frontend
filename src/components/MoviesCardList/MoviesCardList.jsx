import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";


export default function MoviesCardList({ movies }) {

  return (
      <section className="movies-card-list">
        {/* {[...new Array(12)].map((_, i) => {
          return <MoviesCard />;
        })} */}
        {
          movies.map((movie) => {
            return (
              <MoviesCard image={movie.img} title={movie.title} duration={movie.duration} isSaved={movie.isSaved}/>
            );
          })
        }
        
       
      </section>
    
  );
}
