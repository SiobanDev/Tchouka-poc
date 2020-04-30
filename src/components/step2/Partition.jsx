import React, { useContext } from "react";
//services
// import { addNoteToDom } from "../../services/staveService";
//context
import PartitionContext from "../../context/PartitionContext";
//components
import StaveContainer from "../stave/StaveContainer";
import AddedNote from "../stave/AddedNote";

/**
 * Partition contains two staves made to receive the user's choosen notes.
 */
const Partition = () => {
  const partitionContext = useContext(PartitionContext);
  const userComposition = partitionContext.notes;

  userComposition.map((note) => {
    AddedNote(
      note,
      partitionContext.notes,
      note.image,
      partitionContext.allNotesWidth,
      partitionContext.setAllNotesWidth
    );

    return null;
  });

  return <StaveContainer />;
};

export default Partition;
