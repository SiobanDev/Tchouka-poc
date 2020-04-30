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

  console.log("partition" + JSON.stringify(partition));

  return (
    <div id="notes-container">
      {availableNotes.map((note) => {
        return (
          <NotesToChoose
            imageSource={note.image}
            onClick={() => {
              partition.push(note);
              setPartition(partition);
            }}
            key={note.id}
          />
        );
      })}
    </div>
  );
}
