import React from "react";
import SearchResults from "./SearchResults";
import Nominees from "./Nominees";

function MovieBox() {
  return (
    <div className="movie-box">
      <SearchResults />
      <Nominees />
    </div>
  );
}

export default MovieBox;
