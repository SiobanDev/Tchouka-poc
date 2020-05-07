import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
//components
import Header from "./Header";
import MainContent from "../components/main/MainContent";
import PartitionContext from "../context/PartitionContext";
require('dotenv').config();


function App() {
  var freeTime = 42;
  const addedNoteWidth = 5;
  const [allNotesWidth, setAllNotesWidth] = useState(0);
  const [partition, setPartition] = useState([]);

  // console.log("partition dans App " + JSON.stringify(partition));
  // console.log("allNotesWidth dans App" + allNotesWidth);
  
  return (
    <Router>
      <Header />
      <PartitionContext.Provider
        value={{
          partition,
          setPartition,
          freeTime,
          allNotesWidth,
          setAllNotesWidth,
          addedNoteWidth
        }}
      >
        <MainContent />
      </PartitionContext.Provider>
    </Router>
  );
}

export default App;
