import React, { useState } from "react";
import Movie from "./Movie";
import Luca from "./images/Luca.jpg";
import Encanto from "./images/encanto.jpeg";
import Frozen from "./images/Frozen.jpeg";
import Moana from "./images/Moana.webp";
import Raya from "./images/Raya-And-The-Last-Dragon.webp";
import Coco from "./images/coco.webp";
import Inside from "./images/Inside-Out.jpg";
import Tangled from "./images/Tangled.webp";
import Zootopia from "./images/Zootopia.webp";
import LegoBatman from "./images/legobatman.jpg";
import Ralph from "./images/wreckitralph.webp";
import BigHero6 from "./images/bighero6.jpeg";




function Feed() {
  
  const [movies, setMovies] = useState([
  {
    id: 1,
    title: "Luca",
    image: Luca,
    reviews: []
  }
])

    return (
      <div className="container-fluid h-100 bg-dark" id="feed">
        {movies.map(({id, title, image, reviews}) => <Movie id={id} title={title} image={image} reviews={reviews} setMovies={setMovies} />)}
      </div>
  );
}
export default Feed;