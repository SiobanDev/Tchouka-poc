import React, { useEffect } from "react";
//components
import JPImage from "./JPImage";
//data
import { compositionExample } from "../../mocks/composition";
//styles
import "./Step3.style.css";

const Step3 = () => {
  var count = -1;
  let imageElmtCollection = null;

  useEffect(() => {
    imageElmtCollection = document.getElementsByClassName("movement-image");
    console.log("imageElmtCollection" + imageElmtCollection);
    compositionExample.map((note) => {
      for (let i = 0; i < imageElmtCollection.length; i++) {
        imageElmtCollection[0].style.opacity = "1";

        setTimeout(function changeImageOpacity() {
          if (i > 0) {
            imageElmtCollection[i - 1].style.opacity = "0";
          }
          imageElmtCollection[i].style.opacity = "1";
        }, note.duration * 10000);
      }
    });
  }, [imageElmtCollection]);

  return (
    <section id="step3">
      <div id="JP-container">
        {compositionExample.map((note) => {
          return <JPImage noteData={note} key={count++} />;
        })}
      </div>
    </section>
  );
};

export default Step3;
