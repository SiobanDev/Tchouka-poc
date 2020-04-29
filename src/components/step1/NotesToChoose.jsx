import React, { useContext, useState } from "react";
//images
import fourBeatsWithStave from "./step1.images/four-beats-with-stave.png";
import twoBeatsWithStave from "./step1.images/two-beats-with-stave.png";
import oneBeatWithStave from "./step1.images/one-beat-with-stave.png";
import halfBeatWithStave from "./step1.images/half-beat-with-stave.png";
import quarterBeatWithStave from "./step1.images/quarter-beat-with-stave.png";
import fourBeats from "./step1.images/four-beats.png";
import twoBeats from "./step1.images/two-beats.png";
import oneBeat from "./step1.images/one-beat.png";
import halfBeat from "./step1.images/half-beat.png";
import quarterBeat from "./step1.images/quarter-beat.png";
//data
import {
  noteTwoCrochets,
  noteCrochet,
  noteQuaver,
  noteSemiQuaver,
  noteWholeNote,
} from "../../mocks/notes";
//services
import { addNoteToDom, addNoteToContext } from "../../services/staveService";
//context
import PartitionContext from "../../context/PartitionContext";

export default function NotesToChoose() {
  const partitionContext = useContext(PartitionContext);

  return (
    <div className="notes-container">
      <img
        className="note"
        src={fourBeatsWithStave}
        onClick={() => {
          const onStep1 = addNoteToDom(
            fourBeats,
            partitionContext.allNotesWidth,
            partitionContext.setAllNotesWidth
          );

          if (onStep1) {
            addNoteToContext(noteWholeNote, partitionContext.notes);
          }
        }}
        alt="musical-note"
      />

      <img
        className="note"
        src={twoBeatsWithStave}
        onClick={() => {
          const onStep1 = addNoteToDom(twoBeats, partitionContext.allNotesWidth, partitionContext.setAllNotesWidth);

          if (onStep1) {
            addNoteToContext(noteTwoCrochets, partitionContext.notes);
          }
        }}
        alt="musical-note"
      />
      <img
        className="note"
        src={oneBeatWithStave}
        onClick={() => {
          const onStep1 = addNoteToDom(oneBeat, partitionContext.allNotesWidth, partitionContext.setAllNotesWidth);
          if (onStep1) {
            addNoteToContext(noteCrochet, partitionContext.notes);
          }
        }}
        alt="musical-note"
      />
      <img
        className="note"
        src={halfBeatWithStave}
        onClick={() => {
          const onStep1 = addNoteToDom(halfBeat, partitionContext.allNotesWidth, partitionContext.setAllNotesWidth);

          if (onStep1) {
            addNoteToContext(noteQuaver, partitionContext.notes);
          }
        }}
        alt="musical-note"
      />
      <img
        className="note"
        src={quarterBeatWithStave}
        onClick={() => {
          const onStep1 = addNoteToDom(quarterBeat, partitionContext.allNotesWidth, partitionContext.setAllNotesWidth);
          if (onStep1) {
            addNoteToContext(noteSemiQuaver, partitionContext.notes);
          }
        }}
        alt="musical-note"
      />
    </div>
  );
}
