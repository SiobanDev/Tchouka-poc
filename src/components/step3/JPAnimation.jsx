import React, { useEffect } from "react";
//components
//data
//styles
import "./Step3.style.css";
//libraries
import { motion } from "framer-motion";

const JPAnimation = ({ resetAnimation, notes }) => {
  console.log("notes : " + JSON.stringify(notes, null, " "));

  const getDurationOfAllPreviousNotes = (notes, indexOfTheCurrentNote) => {
    let durationList = [];
    for (let i = 0; i < indexOfTheCurrentNote; i++) {
      durationList.push(notes[i].duration);
    }
    const sumOfPreviousDurations = durationList.reduce(function (a, b) {
      return a + b;
    }, 0);

    console.log("getDurationOfAllPreviousNotes" + sumOfPreviousDurations);
    return getDurationOfAllPreviousNotes;
  };

  const getCompositionDuration = (notes) => {
    let durationList = [];
    for (let i = 0; i < notes.length; i++) {
      durationList.push(notes[i].duration);
    }
    const sumOfAllDurations = durationList.reduce(function (a, b) {
      return a + b;
    });

    console.log("sumOfAllDurations" + sumOfAllDurations);
    return sumOfAllDurations;
  };

  useEffect(() => {
    setTimeout(() => {
      resetAnimation();
      return (
        <img
          className="movement-image"
          src={
            notes[notes.length - 1].movement[
              notes[notes.length - 1].movement.length - 1
            ]
          }
          alt="last-image-of-jp"
        />
      );
    }, getCompositionDuration(notes));

    for (let i = 0; i < notes.length; i++) {
      for (let y = 0; y < notes[i].movement.length; y++) {
        const timer = setTimeout(() => {
          return (
            <motion.img
              id={`image-jp-${i}-${y}`}
              className="movement-image"
              key={`key-${i}-${y}`}
              src={notes[i].movement[y]}
              initial={{ opacity: 0, position: "absolute" }}
              animate={{ opacity: [1, 0] }}
              exit={{ opacity: 0 }}
              transition={{
                ease: "linear",
                duration: 1,
                delay: 0,
              }}
            />
          );
        }, getDurationOfAllPreviousNotes(notes, i));

        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <img
      className="movement-image"
      src={notes[0].movement[0]}
      alt="first-image-of-jp"
    />
  );

  //TO DO : reset AFTER render ! I need to catch the moment of the animation's end (setTimeOut on the whole notes duration ?)
  // resetAnimation(false);
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
