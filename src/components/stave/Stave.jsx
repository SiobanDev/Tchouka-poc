import React from "react";
//styles
import "./Staves.style.css";
import AddedNote from "./AddedNote";

const Stave = ({ id, notes, allNotesWidth }) => {
  if (notes.length > 0) {
    return (
      <div id={`stave-${id}`} className="stave">
        {notes.map((note) => {
          return <AddedNote noteData={note} allNotesWidth={allNotesWidth} />;
        })}
      </div>
    );
  }

  return <div id={`stave-${id}`} className="stave"></div>;
};

export default Stave;
