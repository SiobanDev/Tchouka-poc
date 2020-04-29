import React, { useContext, useEffect } from "react";
//services
import {addNoteToDom} from "../../services/staveService";
//context
import PartitionContext from "../../context/PartitionContext";
//data
import {partitionExample} from "../../mocks/partition";
//components
import Staves from "../main/Staves";


const Partition = () => {
  const partitionContext = useContext(PartitionContext);
  const userComposition = partitionContext.notes;
  // const userComposition = partitionExample;

  useEffect(()=>{
    userComposition.map((note) => {
      addNoteToDom(note, partitionContext.notes, note.image, partitionContext.allNotesWidth, partitionContext.setAllNotesWidth);
    });
  }, [userComposition, partitionContext.notes, partitionContext.allNotesWidth, partitionContext.setAllNotesWidth])

  
  return (
    <Staves />
  );
};

export default Partition;
