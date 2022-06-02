import React, { useState } from "react";
import Movie from "./Movie";
import MovieForm from "./MovieForm";

export default function Submit() {
  const [movies, setMovies] = useState([]);

  const removeMovie = (id) => {
    setMovies(movies.filter(movie => {
      return movie.id !== id;
    }))
  };

  const rendomMovie = movies.length
    ? movies.map((movie) => {
        return <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />;
      })
    : `추가된 영화가 없습니다.`;

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <>
      <h1>Movie List</h1>
      <MovieForm addMovie={addMovie} />
      {rendomMovie}
    </>
  );
}
