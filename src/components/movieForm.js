import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./movieForm.css";

const initialMovieData = Object.freeze({
  title: "",
  year: "",
});

export default function MovieForm() {
  const [movieData, updateMovieData] = useState(initialMovieData);

  const handleChange = (event) => {
    if (event.target.name === "year" && !isNaN(event.target.value)) {
      updateMovieData({
        ...movieData,
        [event.target.name]: event.target.value.trim(),
      });
    } else if (event.target.name === "title") {
      updateMovieData({
        ...movieData,
        [event.target.name]: event.target.value.trim().replace(/ /g, "+"),
      });
    }
  };

  const handleClick = (title, year) => {
    console.log(movieData);
  };

  return (
    <div className="movie-form">
      <TextField
        className="search-field"
        id="title-outlined-basic"
        label="Title"
        variant="outlined"
        name="title"
        onChange={handleChange}
      />
      <TextField
        className="search-field"
        id="year-outlined-basic"
        label="Year"
        variant="outlined"
        name="year"
        onChange={handleChange}
      />
      <Button
        className="search-button search-field"
        onClick={handleClick}
        variant="contained"
        color="primary"
      >
        Search
      </Button>
    </div>
  );
}
