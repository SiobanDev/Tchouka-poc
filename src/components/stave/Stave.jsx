import React, { useContext, useEffect } from "react";
//styles
import "./Staves.style.css";
import AddedNote from "./AddedNote";
//context
import PartitionContext from "../../context/PartitionContext";

const Stave = ({ id, partitionNotes }) => {
  const partitionContext = useContext(PartitionContext);
  let allNotesWidth = partitionContext.allNotesWidth;
  const addedNoteWidth = partitionContext.addedNoteWidth;

  console.log("notes dans Stave " + JSON.stringify(partitionNotes));
  console.log("allNotesWidth dans Stave : " + allNotesWidth);

  // useEffect(() => {
  // }, [partitionNotes]);

  if (partitionNotes.length > 0) {
    partitionNotes.map((note, i) => {
      return (
        <div id={`stave-${id}`} className="stave">
          {
            <AddedNote
              noteData={note}
              style={{ width: `${addedNoteWidth}%`, left: `${allNotesWidth}%` }}
              key={i}
            />
          }
        </div>
      );
    });
  }

  return <div id={`stave-${id}`} className="stave"></div>;
};

export default Stave;
