import React from "react";
import { Switch, Route } from "react-router-dom";
//components
import Step1 from "../step1/Step1";
import Step2 from "../step2/Step2";
import Step5 from "../step3/Step3";
import Home from "./Home";

export default function MainContent() {

  return (
    <Switch>
      <Route exact path="/apprentissage" component={Step5} />
      <Route exact path="/percussions" component={Step2} />
      <Route exact path="/rythme" component={Step1} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}
