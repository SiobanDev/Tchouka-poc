import React, { useContext } from "react";
//data
import { availableNotes } from "../../data/notes";
//context
import PartitionContext from "../../context/PartitionContext";
import NotesToChoose from "./NoteToChoose";

export default function NotesToChooseContainer() {
  const partitionContext = useContext(PartitionContext);
  const partition = partitionContext.partition;
  const setPartition = partitionContext.setPartition;
  let allNotesWidth = partitionContext.allNotesWidth;
  let setAllNotesWidth = partitionContext.setAllNotesWidth;
  const addedNoteWidth = partitionContext.addedNoteWidth;

  return (
    <div id="notes-to-choose-container">
      {availableNotes.map((note) => {
        return (
          <NotesToChoose
            imageSource={note.image}
            onClick={() => {
              setPartition([...partition, note]);
              setAllNotesWidth(allNotesWidth + addedNoteWidth);
            }}
            key={note.id}
          />
        );
      })}
    </div>
  );
}
