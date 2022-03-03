import React from "react";
import './reload.scss';

function Reload () {
  function handlePrevious(e) {
    e.preventDefault();
    console.log("previous")
  }

  function handleNext(e) {
    e.preventDefault();
    console.log("Next")
  }

  return(
    <div className="buttons">
      <div className="previous">
        <h2 onClick={handlePrevious}>Prev</h2>
      </div>
      <div className="next">
        <h2 onClick={handleNext}>Next</h2>
      </div>

    </div>
  );
}

export default Reload;
