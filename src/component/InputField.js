import React from "react";

export default function InputField({ type, value, onChange, errorMessage }) {
  return (
    <>
      <input
        className="form-control"
        value={value}
        type={type}
        onChange={onChange}
      />
      <div id="emailHelp" className="form-text" style={{ color: "red" }}>{errorMessage}</div>
    </>
  );
}
