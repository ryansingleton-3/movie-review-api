import React from "react";
import Reviews from "./Reviews";

export default function Movie({ id, title, cover, reviews }) {
  return (
    <div
      className="flex items-start gap-8 bg-slate-900 p-8 rounded-3xl shadow-[0px_0px_32px_rgba(0,0,0,0.1)] text-white"
      id="movie"
    >
      <div className="relative h-[400px] aspect-[2/3] rounded-3xl overflow-hidden shrink-0">
        <img
          src={cover}
          alt="Movie Cover"
          className="absolute h-full w-full top-0 left-0 object-cover duration-200 hover:scale-[1.1]"
        ></img>
      </div>
      <div className="flex-1">
        <div>
          <span className="block font-bold capitalize text-4xl mb-4 tracking-wide" id="movie-title">
            {title}
          </span>
        </div>
        <Reviews movieId={id} reviews={reviews} />
      </div>
    </div>
  );
}
