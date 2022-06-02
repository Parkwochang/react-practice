import React from "react";

export default function Movie({ movie, removeMovie }) {
  return (
    <div className="card mt-3">
      <div className="card-body">
        {movie.title}
        <span className="movie_year">({movie.year})</span>
      </div>
      <div>
        <button className="btn btn-outline-success"  onClick={() => removeMovie(movie.id)}>삭제</button>
      </div>
    </div>
  );
}
