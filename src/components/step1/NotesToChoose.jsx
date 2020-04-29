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
  const [allNotesWidth, setAllNotesWidth] = useState(0);
  const partitionContext = useContext(PartitionContext);

  return (
    <div className="notes-container">
      <img
        className="note"
        src={fourBeatsWithStave}
        onClick={() => {
          addNoteToDom(fourBeats, allNotesWidth, setAllNotesWidth);
          addNoteToContext(noteWholeNote, partitionContext.notes)
        }}
        alt="musical-note"
      />

      <img
        className="note"
        src={twoBeatsWithStave}
        onClick={() => {
          addNoteToDom(twoBeats, allNotesWidth, setAllNotesWidth);
          addNoteToContext(noteTwoCrochets, partitionContext.notes)
        }}
        alt="musical-note"
      />
      <img
        className="note"
        src={oneBeatWithStave}
        onClick={() => {
          addNoteToDom(oneBeat, allNotesWidth, setAllNotesWidth);
          addNoteToContext(noteCrochet, partitionContext.notes)
        }}
        alt="musical-note"
      />
      <img
        className="note"
        src={halfBeatWithStave}
        onClick={() => {
          addNoteToDom(halfBeat, allNotesWidth, setAllNotesWidth);
          addNoteToContext(noteQuaver, partitionContext.notes)
        }}
        alt="musical-note"
      />
      <img
        className="note"
        src={quarterBeatWithStave}
        onClick={() => {
          addNoteToDom(quarterBeat, allNotesWidth, setAllNotesWidth);
          addNoteToContext(noteSemiQuaver, partitionContext.notes)
        }}
        alt="musical-note"
      />
    </div>
  );
}
