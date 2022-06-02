import React, { useState } from "react";
import InputField from "./InputField";

export default function MovieForm({ addMovie }) {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [titleError, setTitleError] = useState("");
  const [yearError, setYearError] = useState("");

  const resetForm = () => {
    setMovieTitle("");
    setMovieYear("");
  };

  const validateForm = () => {
    resetErrors();
    let validated = true;
    if (!movieTitle) {
      setTitleError("Please enter the movie title");
      validated = false;
    } else if (!movieYear) {
      setYearError("Please enter the year of opening");
      validated = false;
    }

    return validated;
  };

  const resetErrors = () => {
    setTitleError("");
    setYearError("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addMovie({ id: Date.now(), title: movieTitle, year: movieYear });
      resetErrors();
      resetForm();
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Film title
        </label>
        <InputField
          id="exampleInputEmail1"
          type="text"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          errorMessage={titleError}
        />
        <div id="emailHelp" className="form-text">
          Please fill in correctly.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Year of manufacture
        </label>
        <InputField
          id="exampleInputPassword1"
          type="number"
          value={movieYear}
          onChange={(e) => setMovieYear(e.target.value)}
          errorMessage={yearError}
        />
      </div>
      <button type="submit" className="btn btn-outline-success mb-4">Add movie</button>
    </form>
  );
}
