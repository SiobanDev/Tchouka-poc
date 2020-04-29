import React from "react";

const initialContextValues = {
  notes: [],
  freeTime: 42,
};

const PartitionContext = React.createContext(initialContextValues);

export default PartitionContext;
