import React, { useState } from "react";
import API from "../api";

const client = new API();

function Form({ review, onSubmit }) {
  const [data, setData] = useState(review);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(data);
      }}
      className="text-sm grid gap-4 p-4 shadow-lg"
    >
      <span className="block text-lg font-bold tracking-wide">{data.id ? "Edit Review" : "Add Review"}</span>
      <label className="text-gray-200">
        Review
        <input
          className="mt-2 w-full bg-transparent py-3 px-4 rounded-xl border-slate-800 border"
          name="review"
          value={data.review}
          onChange={e => setData(state => ({ ...state, review: e.target.value }))}
        />
      </label>
      <label className="text-gray-200">
        Author
        <input
          className="mt-2 w-full bg-transparent py-3 px-4 rounded-xl border-slate-800 border"
          name="author"
          value={data.author}
          onChange={e => setData(state => ({ ...state, author: e.target.value }))}
        />
      </label>
      <div className="text-right">
        <button className="inline px-3 py-2 text-xs rounded-lg bg-blue-500">Save</button>
      </div>
    </form>
  );
}

function Review({ movieId, id, review, author, createdAt }) {
  const [hover, setHover] = useState(false);
  const [edit, setEdit] = useState({});

  const deleteReview = async id => {
    if (window.confirm(`Are you sure you'd like to delete this review?`)) {
      const response = await client.delete(`/movies/${movieId}/reviews/${id}`);

      if (response.status === 200) {
        window.location.reload(false);
      }
    }

    return 0;
  };

  const editReview = async edited => {
    const response = await client.put(`/movies/${movieId}/reviews/${id}`, JSON.stringify(edited));

    if (response.status === 200) {
      window.location.reload(false);
    }

    return 0;
  };

  if (edit.id) {
    return (
      <div key={id} className="relative w-full p-4 rounded-2xl shadow-xl">
        <Form review={edit} onSubmit={data => editReview(data)} />
      </div>
    );
  }

  return (
    <div
      key={id}
      className="relative w-full p-4 rounded-2xl shadow-xl"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {hover && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-slate-900/50 gap-2">
          <button
            type="button"
            className="bg-red-500 text-white rounded-full h-4 w-4 text-xs"
            onClick={() => deleteReview(id)}
          >
            <i className="fas fa-times"></i>
          </button>
          <button
            type="button"
            className="bg-blue-500 text-white rounded-full h-4 w-4 text-xs"
            onClick={() => setEdit({ id, movieId, review, author })}
          >
            <i className="fas fa-pen"></i>
          </button>
        </div>
      )}
      <p className="mb-2 italic font-normal">{review}</p>
      <div className="flex justify-between text-xs">
        <span>{author}</span>
        <span>
          {new Date(new Date(0).setUTCSeconds(createdAt)).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
    </div>
  );
}

function Reviews({ movieId, reviews: currentReviews }) {
  const [newReview] = useState({
    movieId,
    review: "",
    author: "",
    createdAt: new Date(),
  });

  const createReview = async data => {
    const response = await client.post(`/movies/${movieId}/reviews`, JSON.stringify(data));

    console.log({ response });
    if (response.status === 201) {
      window.location.reload(false);
    }

    return 0;
  };

  return (
    <div className="bg-slate-900 shadow-sm w-full grid gap-4">
      {currentReviews.map(review => (
        <Review key={review.id} movieId={movieId} {...review} />
      ))}
      <hr className="border-slate-800" />
      <Form review={newReview} onSubmit={data => createReview(data)} />
    </div>
  );
}

export default Reviews;
