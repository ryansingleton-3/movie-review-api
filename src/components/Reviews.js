import {React, useState, useEffect} from "react";


function Reviews({id, reviews: currentReviews , setMovies}) {

  const [review, setReview] = useState('')

  const addReview = (e) => {
    e.preventDefault()
    const newReviews = [...currentReviews, review]
    setMovies( (state) => )
  }

  if (currentReviews.length < 1) {
    return (
      <div className="container text-center bg-dark" id="review-div">
          <form id="review-form"
          onSubmit={addReview}
          >
            <label htmlFor="review-text">
              <input
                type="text"
                name="review-text"
                id="review-text"
                placeholder="Write a review"
                style={{ borderRadius: "10px" }}
                value={review}
                onChange={(e) => setReview(e.target.value)}
              ></input>
              <br></br>
              <button
                className="btn btn-success"
                style={{ marginTop: "2%" }}
                id="submit-button"
              >
                Submit Review
              </button>
            </label>
          </form>
        </div>
    )
  } else

  return ( 
    <div>
      <div className="container text-center bg-dark" id="review-div">
          <form id="review-form"
          // handleSubmit={handleSubmit}
          >
            <label htmlFor="review-text">
              <input
                type="text"
                name="review-text"
                id="review-text"
                placeholder="Write a review"
                style={{ borderRadius: "10px" }}

              ></input>
              <br></br>
              <button
                className="btn btn-success"
                style={{ marginTop: "2%" }}
                id="submit-button"
              >
                Submit Review
              </button>
            </label>
          </form>
        </div>
        <div
          className="card border border-dark text-center"
          style={{
            maxHeight: "100px",
            overflow: "auto",
            maxWidth: "100%",
            marginTop: "2%",
            borderRadius: "none",
          }}
        >
          {}
          {currentReviews.length > 0 && currentReviews.map((review, i) => (
            <span
              className="block bg-dark "
              style={{ borderRadius: "1px", paddingTop: "1.5%" }}
              key={i}
            >
              {review}
            </span>
          ))}
        </div>
    </div>
   );
}

export default Reviews;
