import React from "react";
import "./movieForm.css";

const MovieCard = (props) => {
  console.log(props);
  return (
    <div className="movie-card">
      <img
        className="movie-poster"
        alt="movie-poster"
        src={props.movie.Poster}
      />
      <h3>{props.movie.Title}</h3>
    </div>
  );
};

export default MovieCard;
