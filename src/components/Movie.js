import React from "react";
import Reviews from "./Reviews";


export default function Movie({id, title, image, reviews, setMovies}) {
  
  
 

    return (
      <div className="container-fluid card bg-dark" id="movie">
        <div className="container card-title text-white text-center">
          <h3 className="h3" id="movie-title">
            {title}
          </h3>
        </div>
        <div className="container text-center">
          <img
            src={image}
            style={{ width: 250 }}
            alt='Movie Cover'
            className="text-center border-dark img-fluid"
          ></img>
        </div>
        <div>
          <Reviews movieId={id} reviews={reviews} setMovies={setMovies} />
        </div>
        
      </div>
    );
}
