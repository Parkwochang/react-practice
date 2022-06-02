import React from "react";

export default function Movie({ movie, removeMovie }) {
  return (
    <div className="movie">
      <div className="movie_title">
        {movie.title}
        <span className="movie_year">({movie.year})</span>
      </div>
      <div>
        <button onClick={() => removeMovie(movie.id)}>삭제</button>
      </div>
    </div>
  );
}
