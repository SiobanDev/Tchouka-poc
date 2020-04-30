import React from "react";
//styles
import "./Staves.style.css";
import AddedNote from "./AddedNote";

const Stave = ({ id, notes, allNotesWidth }) => {
  console.log("notes dans Stave " + JSON.stringify(notes));
  
  if (notes.length > 0) {
    return (
      <div id={`stave-${id}`} className="stave">
        {notes.map((note, i) => {
          return <AddedNote noteData={note} allNotesWidth={allNotesWidth} key={i}/>;
        })}
      </div>
    );
  }

  return <div id={`stave-${id}`} className="stave"></div>;
};

export default Stave;
