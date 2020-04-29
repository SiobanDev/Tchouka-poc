import React from "react";

const initialContextValues = {
  notes: [],
  freeTime: 42,
  allNotesWidth: 0,
  setAllNotesWidth: ()=>{}
};

const PartitionContext = React.createContext(initialContextValues);

export default PartitionContext;
