import React, {  useState } from "react";

//data
import { compositionExample } from "../../mocks/composition";
//styles
import "./Step3.style.css";
//libraries

import JPAnimation from "./JPAnimation";

const Step3 = () => {
  const notesData = compositionExample;

  const [playAnimation, setPlayAnimation] = useState(false);
  
  console.log("playAnimation : " + playAnimation);

  return (
    <section id="step3">
      <button className="btn" onClick={() => setPlayAnimation(true)}>
        Jouer
      </button>
      <div id="JP-container">
      {
      playAnimation ?
        <JPAnimation resetAnimation={() => setPlayAnimation(false)} notes={notesData}/>
      :
        <img className="movement-image" src={notesData[0].movement[0]} alt="first-image-of-jp"/>
    }
    </div>

    </section>
  );
}

export default Step3;
