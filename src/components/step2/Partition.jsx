import React, { useContext, useState, useEffect } from "react";
//services
import {addNoteToDom} from "../../services/staveService";
//context
import PartitionContext from "../../context/PartitionContext";
//data
import {partitionExample} from "../../mocks/partition";
//components
import Staves from "../main/Staves";


const Partition = () => {
  const [allNotesWidth, setAllNotesWidth] = useState(0);
  const partitionContext = useContext(PartitionContext);
  // const userComposition = partitionContext.notes;
  const userComposition = partitionExample;

  useEffect(()=>{
    userComposition.map((note) => {
      addNoteToDom(note.image, allNotesWidth, setAllNotesWidth);
    });

  }, [])

  
  return (
    <Staves />
  );
};

export default Partition;
