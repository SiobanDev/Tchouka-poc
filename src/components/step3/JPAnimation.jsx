import React, { useEffect, useState } from "react";
//components
import JPImage from "./JPImage";
//data
import { compositionExample } from "../../mocks/composition";
//styles
import "./Step3.style.css";
//libraries
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { variants } from "./Step3";

const JPAnimation = ({resetAnimation}) => {
  const wholeAnimationImages = [];

  const getDurationOfPreviousNotes = (notes, indexOfTheCurrentNote) => {
    let durationList = [];
    for (let i = 0; i < indexOfTheCurrentNote - 1; i++) {
      durationList.push(notes[i].duration);
    }
    const sumOfPreviousDurations = durationList.reduce(function (a, b) {
      return a + b;
    }, 0);

    console.log("sumOfPreviousDurations" + sumOfPreviousDurations);
    return sumOfPreviousDurations;
  };

  const composeAnimation = (notes) => {
    for (let i = 0; i < notes.length; i++) {
      for (let y = 0; y < notes[i].movement.length; y++) {
        wholeAnimationImages.push(
          <motion.img
            id={`image-jp-${i}-${y}`}
            className="movement-image"
            key={`key-${i}-${y}`}
            src={notes[i].movement[y]}
            initial={{ opacity: 0, position: "absolute" }}
            animate={{opacity: [1, 0]}}
            exit={{ opacity: 0 }}
            transition={{
              ease: "linear",
              duration: 1,
              delay: getDurationOfPreviousNotes(notes, i),
            }}
          />
        );
      }
    }
    return wholeAnimationImages;
  };

  //TO DO : reset AFTER render ! I need to catch the moment of the animation's end (setTimeOut on the whole notes duration ?)
  // resetAnimation(false);
  console.log("composeAnimation" + JSON.stringify(composeAnimation()));

  return <>{composeAnimation(compositionExample)}</>;
};

export default JPAnimation;

// const displayTwoImagesForOneNote = (notes) => {
//   for (let i = 1; i < notes.length - 2; i++) {
//     for (let y = 0; y < notes[i].movement.length; y++) {
//       return (
//         <motion.img
//           id={`image-jp-${i}`}
//           className="movement-image"
//           key={`key-${i}`}
//           src={notes[i].movement[y]}
//           initial={{ opacity: 0, position: "absolute" }}
//           animate={"visible"}
//           exit={{ opacity: 0 }}
//           transition={{
//             ease: "linear",
//             duration: 1,
//             delay: getDurationOfPreviousNotes(notes, i),
//           }}
//         />
//       );
//     }
//   }
// };
