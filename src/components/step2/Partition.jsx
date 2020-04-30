import React, { useContext } from "react";
//context
import PartitionContext from "../../context/PartitionContext";
//components
import StaveContainer from "../stave/StaveContainer";

/**
 * Partition contains two staves made to receive the user's choosen notes.
 */
const Partition = () => {
  const partitionContext = useContext(PartitionContext);
  const userComposition = partitionContext.notes;

  userComposition.map((note) => {
   

    return null;
  });

  return <StaveContainer />;
};

export default Partition;
