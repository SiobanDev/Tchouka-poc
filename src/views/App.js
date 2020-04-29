import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
//components
import Header from "./Header";
import MainContent from "../components/main/MainContent";
import PartitionContext from "../context/PartitionContext";

function App() {
  var notes = [];
  var freeTime = 42;
  const [allNotesWidth, setAllNotesWidth] = useState(0);

  return (
    <Router>
      <Header />
      <PartitionContext.Provider
        value={{ notes, freeTime, allNotesWidth, setAllNotesWidth }}
      >
        <MainContent />
      </PartitionContext.Provider>
    </Router>
  );
}

export default App;
