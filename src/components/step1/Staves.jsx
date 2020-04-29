import React from "react";
//styles
import "./Step1.style.css";
//images
import stave1 from "./step1.images/stave1.png";
import stave2 from "./step1.images/stave2.png";

const Staves = () => {
  return (
    <div className="staves-containers">
      <div id="stave1" className="stave-container">
        <img className="stave stave 1" src={stave1} alt="stave" />
      </div>

      <div id="stave2" className="stave-container">
        <img className="stave stave 2" src={stave2} alt="stave" />
      </div>
    </div>
  );
};

export default Staves;
