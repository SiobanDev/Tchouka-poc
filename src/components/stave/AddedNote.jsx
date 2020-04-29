import React from "react";
//styles
import "./Staves.style.css";
//images
import fourBeats from "./stave.images/four-beats.png";
import twoBeats from "./stave.images/two-beats.png";
import oneBeat from "./stave.images/one-beat.png";
import halfBeat from "./stave.images/half-beat.png";
import quarterBeat from "./stave.images/quarter-beat.png";

const AddedNote = ({ note, allNotesWidth }) => {
  let addedNoteImage = null;
  
  switch (note.duration) {
    case 4:
      addedNoteImage = fourBeats;
      break;
    case 2:
      addedNoteImage = twoBeats;
      break;
    case 1:
      addedNoteImage = oneBeat;
      break;
    case 0.5:
      addedNoteImage = halfBeat;
      break;
    case 0.25:
      addedNoteImage = quarterBeat;
      break;
    default:
      console.log("Error with the added note image");
        
  }

  return (
    <img
      className="added-note"
      src={addedNoteImage}
      alt="added-note"
      style={{ left: `${allNotesWidth}%` }}
    />
  );
};

export default AddedNote;
