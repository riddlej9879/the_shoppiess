import React, { useState } from "react";
import { connect } from "react-redux";

import { getData } from "../actions/actions";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./movieForm.css";

let initialSearchData = {
  title: "",
  year: "",
  searchUrl: "?apikey=385f371e",
};

let searchUrl;

const MovieForm = (getData, movieResults, isFetching, error) => {
  const [searchData, updateSearchData] = useState(initialSearchData);

  const handleChange = (event) => {
    if (event.target.name === "year" && !isNaN(event.target.value)) {
      updateSearchData({
        ...searchData,
        [event.target.name]: event.target.value.trim(),
      });
    } else if (event.target.name === "title") {
      updateSearchData({
        ...searchData,
        [event.target.name]: event.target.value.trim().replace(/ /g, "+"),
      });
    }
  };

  const handleClick = () => {
    searchUrl = initialSearchData.searchUrl;
    if (searchData.title !== "") {
      searchUrl = searchUrl + "&s=" + searchData.title;
    }
    getData.getData(searchUrl);
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
};

const mapStateToProps = (state) => {
  // console.log("MovieForm.js line 72 mapStateToProps: ", state);
  return {
    movieResults: state.movieResults,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getData })(MovieForm);
