import React from "react";
import { connect } from "react-redux";

import "./movieForm.css";

function Nominees(props) {
  return (
    <div className="nominees">
      <h1>Nominees</h1>
    </div>
  );
  // if (nominees.length === 1) {
  //   return (
  //     <div className="nominees">
  //       <h1>Nominees is equal to 1</h1>
  //     </div>
  //   );
  // } else if (nominees.length > 1) {
  //   return (
  //     <div className="nominees">
  //       <h1>Nominees greater than 1</h1>
  //     </div>
  //   );
  // } else {
  //   <div className="nominees">
  //     <h1>No movies nominated</h1>
  //   </div>;
  // }
}

const mapStateToProps = (state) => {
  return {
    nominees: state.nominees,
  };
};

export default connect(mapStateToProps)(Nominees);
