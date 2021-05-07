import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

import "./movieForm.css";

const MovieBox = ({ getData, movieResults, isFetching, error }) => {
  if (movieResults === null) {
    return (
      <div className="movie-box">
        <h1>Please search for a movie to nominate.</h1>
      </div>
    );
  } else if (movieResults.Response === "False") {
    return (
      <div className="movie-box">
        <h2>Sorry. We could not find your movie.</h2>
      </div>
    );
  } else {
    console.log(movieResults);
    return (
      <div className="movie-box">
        <section>
          {movieResults.Search.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </section>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    movieResults: state.movieResults,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps)(MovieBox);
