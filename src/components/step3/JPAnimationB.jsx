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

const JPAnimation = () => {
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

  const displayTwoImagesForOneNote = (notes) => {
    for (let i = 1; i < notes.length - 2; i++) {
      for (let y = 0; y < notes[i].movement.length; y++) {
        return (
          <motion.img
            id={`image-jp-${i}`}
            className="movement-image"
            key={`key-${i}`}
            src={notes[i].movement[y]}
            initial={{ opacity: 0, position: "absolute" }}
            animate={{ opacity: 1 }}
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
  };

  if (compositionExample) {
    return compositionExample.map((note, i) => {
      return (
        <>
        <motion.img
          id={`image-jp-${note.id}`}
          className="movement-image"
          key={`key-${note.id}`}
          src={note.movement[0]}
          initial={{ opacity: 0, position: "absolute" }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
            delay: getDurationOfPreviousNotes(compositionExample, i),
          }}
        />
        <motion.img
          id={`image-jp-${note.id}`}
          className="movement-image"
          key={`key-${note.id}`}
          src={note.movement[1]}
          initial={{ opacity: 0, position: "absolute" }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
            delay: getDurationOfPreviousNotes(compositionExample, i),
          }}
        />
        </>
      );
    });
  }
};

export default JPAnimation;
