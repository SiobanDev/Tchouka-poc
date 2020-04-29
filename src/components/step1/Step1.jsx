import React from "react";
//styles
import "./Step1.style.css";
import NotesToChoose from "./NotesToChoose";
import Staves from "./Staves";

const Step1 = () => {
  return (
    <section className="step1">
      <NotesToChoose />
      <Staves />
    </section>
  );
};

export default Step1;
