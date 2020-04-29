import React from "react";
//styles
import "./Step1.style.css";
//components
import NotesToChoose from "./NotesToChooseContainer";
import StaveContainer from "../stave/StaveContainer";

const Step1 = () => {
  return (
    <section className="step1">
      <NotesToChoose />
      <StaveContainer />
    </section>
  );
};

export default Step1;
