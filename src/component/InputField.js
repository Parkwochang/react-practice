import React from "react";

export default function InputField ({type, value, placeholder, onChange, errorMessage}) {
  return (
    <>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <br />
      <div style={{ color: "red" }}>{errorMessage}</div>
    </>
  )
}