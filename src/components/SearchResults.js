import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import NominateMovie from "./NominateMovie";

import "./movieForm.css";

const SearchResults = ({ getData, movieResults, isFetching, error }) => {
  if (movieResults === null) {
    return (
      <div className="search-results">
        <h1>Please search for a movie to nominate.</h1>
      </div>
    );
  } else if (movieResults.Response === "False") {
    return (
      <div className="search-results">
        <h2>Sorry. We could not find your movie.</h2>
      </div>
    );
  } else if (movieResults.length === 1) {
    return (
      <div className="movie-card">
        <h1>MovieResults length equals 1</h1>
      </div>
    );
  } else {
    console.log(movieResults);
    return (
      <div className="search-results">
        <section>
          {movieResults.Search.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              pass={
                <NominateMovie
                  className="nominate-button"
                  key={movie.imdbID}
                  movie={movie}
                />
              }
            />
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

export default connect(mapStateToProps)(SearchResults);
