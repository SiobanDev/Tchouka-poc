import React from "react";

//styles
import "./Step2.style.css";
import Partition from "./Partition";
import ModelJP from "./ModelJP";


const Step2 = () => {
  return (
    <section className="step2">
      <ModelJP />
      <Partition />
    </section>
  );
};

export default Step2;
