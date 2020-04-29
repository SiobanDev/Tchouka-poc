import React from "react";
import { Router, Switch, Link } from "react-router-dom";
//components
import Step1 from "../components/step1/Step1";
import "./NavStyle.css";

const Nav = () => {
  return (
    <nav class="navbar navbar-menu" role="navigation">

      <div class="md-stepper-horizontal orange">

        <div class="md-step active done">
            <div class="md-step-circle"><span>1</span></div>
            <Link to="/"><div class="md-step-title">Home</div></Link>
            <div class="md-step-bar-left"></div>
            <div class="md-step-bar-right"></div>
        </div>

        <div class="md-step active">
            <div class="md-step-circle"><span>1</span></div>
            <Link to="/rythme"><div class="md-step-title">Rythme: Choose your note and create your own music partition</div></Link>
            <div class="md-step-bar-left"></div>
            <div class="md-step-bar-right"></div>
        </div>

        <div class="md-step active">
            <div class="md-step-circle"><span>2</span></div>
            <Link to="/percussions"><div class="md-step-title">Learn: Associate the note with a part of the body</div></Link>
            <div class="md-step-bar-left"></div>
            <div class="md-step-bar-right"></div>
        </div>

        <div class="md-step active">
            <div class="md-step-circle"><span>3</span></div>
            <Link to=""><div class="md-step-title">Percussion: Listen to the percussion that you made</div></Link>
            <div class="md-step-bar-left"></div>
            <div class="md-step-bar-right"></div>
        </div>

      </div>

    </nav>

  );
};

export default Nav;
