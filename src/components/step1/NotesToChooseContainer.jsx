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

  return (
    <div id="notes-container">
      {availableNotes.map((note) => {
        return (
          <NotesToChoose
            imageSource={note.image}
            onClick={() => {
              setPartition([...partition, note]);
            }}
            key={note.id}
          />
        );
      })}
    </div>
  );
}
