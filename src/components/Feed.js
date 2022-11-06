import React from "react";
import Movie from "./Movie";

function Feed({ movies }) {
  return (
    <div className="max-w-3xl mx-auto grid gap-12 py-20" id="feed">
      {movies.map(({ id, title, cover, reviews = [] }) => (
        <Movie key={`movie-${id}`} id={id} title={title} cover={cover} reviews={reviews} />
      ))}
    </div>
  );
}
export default Feed;
