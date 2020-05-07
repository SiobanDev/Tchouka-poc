import React from "react";
//styles
import "./Step1.style.css";
//components
import NotesToChooseContainer from "./NotesToChooseContainer";
import StaveContainer from "../stave/StaveContainer";

const Step1 = () => {
  return (
    <section id="step1">
      <NotesToChooseContainer />
      <StaveContainer partition={[]} />
    </section>
  );
};

export default Step1;
