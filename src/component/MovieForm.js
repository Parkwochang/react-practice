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
      setTitleError("영화제목을 넣어주세요");
      validated = false;
    } else if (!movieYear) {
      setYearError("개봉연도를 넣어주세요");
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
      <InputField type='text' value={movieTitle} placeholder="영화제목" onChange={e => setMovieTitle(e.target.value)} errorMessage={titleError}/>      
      <InputField type='number' value={movieYear} placeholder="개봉연도" onChange={e => setMovieYear(e.target.value)} errorMessage={yearError}/>
      <button>영화추가</button>
    </form>
  );
}
