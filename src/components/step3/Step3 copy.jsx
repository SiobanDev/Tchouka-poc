import React, { useEffect, useState } from "react";
//components
import JPImage from "./JPImage";
//data
import { compositionExample } from "../../mocks/composition";
//styles
import "./Step3.style.css";

const Step3b = () => {
  var count = -1;
  const imageElmtCollection = document.getElementsByClassName("movement-image");
  const [play, setPlay] = useState(false);

  //TO DO : setTimeOut set an action with a delay BEFORE execution. So I have to move the element note a step forward the note duration.

  function playAnimation() {
    for (let i = 1; i < compositionExample.length; i++) {
      imageElmtCollection[i - 1].style.opacity = "0";
      const timer = setTimeout(function changeImageOpacity() {
        imageElmtCollection[i].style.opacity = "1";
      }, compositionExample[i - 1].duration * 10000);
      
      clearTimeout(timer);
    }

    imageElmtCollection[imageElmtCollection.length - 1].style.opacity = "0";
    imageElmtCollection[0].style.opacity = "1";
  }

  useEffect(() => {
    for (let imageElmt of imageElmtCollection) {
      imageElmt.style.opacity = "0";
    }
    imageElmtCollection[0].style.opacity = "1";
  }, [imageElmtCollection]);

  return (
    <section id="step3">
      <button
        className="btn"
        onClick={() => {
          playAnimation();
        }}
      >
        Jouer
      </button>
      <div id="JP-container">
        {compositionExample.map((note) => {
          return <JPImage noteData={note} key={count++} />;
        })}
      </div>
    </section>
  );
};

export default Step3b;
