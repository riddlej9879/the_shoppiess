import React from "react";

import "./movieForm.css";

const MovieCard = (props) => {
  console.log(props.movie);
  if (props.movie.Poster === "N/A") {
    props.movie.Poster = "../../no-image.jpg";
  }
  return (
    <div className="movie-card">
      <img
        className="movie-poster"
        alt="Movie Poster Unavailable"
        src={props.movie.Poster}
      />
      <h3>{props.movie.Title}</h3>
      <h4>{props.movie.Year}</h4>
      <button>{props.pass}</button>
    </div>
  );
};

export default MovieCard;
