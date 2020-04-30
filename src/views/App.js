import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
//components
import Header from "./Header";
import MainContent from "../components/main/MainContent";
import PartitionContext from "../context/PartitionContext";

function App() {
  var freeTime = 42;
  const [allNotesWidth, setAllNotesWidth] = useState(0);
  const [partition, setPartition] = useState([]);

  // console.log("partition dans App " + JSON.stringify(partition));

  return (
    <Router>
      <Header />
      <PartitionContext.Provider
        value={{ partition, setPartition, freeTime, allNotesWidth, setAllNotesWidth }}
      >
        <MainContent />
      </PartitionContext.Provider>
    </Router>
  );
}

export default App;
