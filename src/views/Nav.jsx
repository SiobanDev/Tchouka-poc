import React from "react";
import { Router, Switch, Link } from "react-router-dom";
import "./NavStyle.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-menu" role="navigation">

      <div className="md-stepper-horizontal orange">

        <div className="md-step active done">
            <div className="md-step-circle"><span>1</span></div>
            <Link to="/"><div className="md-step-title">Home</div></Link>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
        </div>

        <div className="md-step active">
            <div className="md-step-circle"><span>1</span></div>
            <Link to="/rythme"><div className="md-step-title">Rythme</div></Link>
            <div className="sous-titre">Choose your note and create your own music partition</div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
        </div>

        <div className="md-step active">
            <div className="md-step-circle"><span>2</span></div>
            <Link to="/percussions"><div className="md-step-title">Learn</div></Link>
            <div className="sous-titre" >Associate the note with a part of the body</div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
        </div>

        <div className="md-step active">
            <div className="md-step-circle"><span>3</span></div>
            <Link to=""><div className="md-step-title">Percussion</div></Link>
            <div className="sous-titre" >Listen to the percussion that you made</div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
        </div>

      </div>

    </nav>

  );
};

export default Nav;
