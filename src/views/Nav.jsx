import React from "react";
import { NavLink } from "react-router-dom";
import "./NavStyle.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-menu" role="navigation">

      <ul className="md-stepper-horizontal orange">

        <li className="md-step active">
            <div className="md-step-circle"><span>0</span></div>
            <NavLink className="md-step-title" exact to="/">Home</NavLink>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
        </li>

        <li className="md-step active">
            <div className="md-step-circle"><span>1</span></div>
            <NavLink className="md-step-title" exact to="/rythme">Rythme</NavLink>
            <div className="sous-titre">Choose your note and create your own music partition</div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
        </li>

        <li className="md-step active">
            <div className="md-step-circle"><span>2</span></div>
            <NavLink className="md-step-title" exact to="/percussions">Percussion</NavLink>
            <div className="sous-titre" >Associate the note with a part of the body</div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
        </li>

        <li className="md-step active">
            <div className="md-step-circle"><span>3</span></div>
            <NavLink className="md-step-title" exact to="/apprentissage">Learn</NavLink>
            <div className="sous-titre" >Listen to the percussion that you made</div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
        </li>

      </ul>

    </nav>

  );
};

export default Nav;
