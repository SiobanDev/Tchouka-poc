import React from "react";

const initialContextValues = {
  partition: [],
  setPartition: () => {},
  freeTime: 42,
  allNotesWidth: 0,
  setAllNotesWidth: ()=>{}
};

const PartitionContext = React.createContext(initialContextValues);

export default PartitionContext;
