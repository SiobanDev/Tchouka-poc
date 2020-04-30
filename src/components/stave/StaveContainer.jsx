import React, { useContext, useEffect } from "react";
//styles
import "./Staves.style.css";
//components
import Stave from "./Stave";
//context
import PartitionContext from "../../context/PartitionContext";

const StaveContainer = () => {
  const partitionContext = useContext(PartitionContext);
  const partition = partitionContext.partition;
  let firstStaveNotes = [];
  let secondStaveNotes = [];

  // console.log("partition dans StaveContainer " + JSON.stringify(partition));

  if (partition.length > 0) {
    firstStaveNotes = partition.slice(0, 19);
    secondStaveNotes = partition.slice(20, 39);

    console.log(
      "firstStaveNotes dans StaveContainer " + JSON.stringify(firstStaveNotes)
    );
  }

  return (
    <div className="staves-container">
      {
        <>
          <Stave
            id="1"
            notes={firstStaveNotes}
            allNotesWidth={partitionContext.allNotesWidth}
          />
          <Stave
            id="2"
            notes={secondStaveNotes}
            allNotesWidth={partitionContext.allNotesWidth}
          />
        </>
      }
    </div>
  );
};

export default StaveContainer;
