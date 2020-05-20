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
import {variants} from "./Step3";


// const variants = {
//   enter: (duration) => {
//     return {
//       opacity: duration > 0 ? 1 : 0,
//       position: "absolute",
//     };
//   },
//   exit: (duration) => {
//     return {
//       opacity: (duration = 0 ? 0 : 1),
//       position: "absolute",
//     };
//   },
// };



export const Slideshow = ({ notesList }) => {
  // console.log("notesList" + notesList);

  // useEffect(() => {
  //   controls.start(delayBeforeStart => ({
  //     opacity: [1, 0],
  //     transition: { delay: delayBeforeStart},
  //   }))
  // }, [])

  const variants = {
    visible: ([i,y]) => ({
      opacity: 1,
      transition: {
        delay: i,
        duration: y
      },
    }),
    hidden: { opacity: 0 },
  }

  function getDurationOfPreviousNotes(notes, indexOfTheCurrentNote){
    let durationList = [];
    for (let y = 1; y < indexOfTheCurrentNote - 1; y++) {
        for (let i = 0; i < indexOfTheCurrentNote + 1; i++) {
          durationList.push(notes[i].duration) ;
        }
    const sumOfPreviousDurations = durationList.reduce(function(a,b){
      return a + b
    }, 0);

    console.log("sumOfPreviousDurations" + sumOfPreviousDurations);
    return sumOfPreviousDurations;
}
  }

  function displayTwoImagesForOneNote(notes, variants) {
    for (let i = 1; i < notes.length - 1; i++) {
        if (notes[i].movement.length > 1) {
        return (
          <>
            <motion.img
              id={`image-jp-${i}`}
              className="movement-image"
              key={`key-${i}`}
              src={notes[i].movement[0]}
              custom={[getDurationOfPreviousNotes(notes, i), notes[i].duration]}
              variants={variants}
              initial={{opacity: 0}}
              animate={"visible"}
              exit={{opacity: 0}}
              transition={{ ease: "linear", duration: 1 }}
            />
            <motion.img
              id={`image-jp-${i}`}
              className="movement-image"
              key={`key-${i}`}
              src={notes[i].movement[1]}
              custom={[getDurationOfPreviousNotes(notes, i), notes[i].duration]}
              variants={variants}
              initial={{opacity: 0}}
              animate={"visible"}
              exit={{opacity: 0}}
              transition={{ ease: "linear", duration: 1 }}
            />
          </>
        );
      } else {
        return (
          <motion.img
            id={`image-jp-${i}`}
            className="movement-image"
            key={`key-${i}`}
            src={notes[i].movement[0]}
            custom={[getDurationOfPreviousNotes(notes, i), notes[i].duration]}
            variants={variants}
            initial={{opacity: 0}}
            animate={"visible"}
            exit={{opacity: 0}}
            transition={{ ease: "linear", duration: 1 }}
          />
        );
      }
    }
  }

  return (
    <AnimatePresence
      initial={false}
      custom={notesList[0].movement[0].duration}
    >
      <motion.img
        id={`image-jp-${0}`}
        className="movement-image"
        key={0}
        src={notesList[0].movement[0]}
        custom={[getDurationOfPreviousNotes(notesList, 0), notesList[0].duration]}
        variants={variants}
        initial={{opacity: 1}}
        animate={"visible"}
        exit={{opacity: 0}}
      />
      {displayTwoImagesForOneNote(notesList, variants)}
      <motion.img
        id={`image-jp-${notesList.id}`}
        className="movement-image"
        key={notesList.id}
        src={
          notesList[notesList.length - 1].movement[
            notesList[notesList.length - 1].movement.length - 1
          ]
        }
        custom={[getDurationOfPreviousNotes(notesList, notesList.length - 1), notesList[notesList.length - 1].duration]}
        variants={variants}
        initial={{opacity: 0}}
        animate={"visible"}
        exit={{opacity: 1}}
      />
    </AnimatePresence>
  );
};

// imagesSrcList.map((imagesSrc) => {
//   return (
//     <motion.img
//       id={`image-jp-${count}`}
//       className="movement-image"
//       key={count++}
//       src={imagesSrc}
//     />
//   );
// })
