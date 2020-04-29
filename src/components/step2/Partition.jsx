import React, { useContext, useState, useEffect } from "react";
//images
import stave1 from "../step1/step1.images/stave1.png";
import stave2 from "../step1/step1.images/stave2.png";
//services
import {addNoteToDom} from "../../services/staveService";
//context
import PartitionContext from "../../context/PartitionContext";
//data
import {partitionExample} from "../../mocks/partition";

const Partition = () => {
  const [allNotesWidth, setAllNotesWidth] = useState(0);
  const partitionContext = useContext(PartitionContext);
  // const userComposition = partitionContext.notes;
  const userComposition = partitionExample;

  useEffect(()=>{
    userComposition.map((note) => {
      addNoteToDom(note.image, allNotesWidth, setAllNotesWidth);
    });

  }, [userComposition, allNotesWidth, setAllNotesWidth])

  

  return (
    <div className="staves-containers">
      <div id="stave1" className="stave-container">
        <img className="stave stave 1" src={stave1} alt="stave" />
      </div>

      <div id="stave2" className="stave-container">
        <img className="stave stave 2" src={stave2} alt="stave" />
      </div>
    </div>
  );
};

export default Partition;
