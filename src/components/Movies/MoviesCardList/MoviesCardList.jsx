import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList() {
  return (
    
      <section className="movies-card-list">
        {[...new Array(12)].map((_, i) => {
          return <MoviesCard />;
        })}
      </section>
    
  );
}
