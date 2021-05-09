import React from "react";
import { connect } from "react-redux";
import { getData } from "../reducer/NomineeState";
import { Button } from "@material-ui/core";

import "./movieForm.css";

const NominateMovie = (props) => {
  const handleClick = (e) => {
    console.log("handle click");
  };

  return (
    <Button
      className="nominate-button"
      onClick={handleClick}
      variant="contained"
      color="primary"
      type="submit"
    >
      Nominate
    </Button>
  );
};

const mapStateToProps = (state) => {
  return {
    nominees: state.nominees,
  };
};

export default connect(mapStateToProps, { getNominees })(NominateMovie);
