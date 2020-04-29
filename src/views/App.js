import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
//components
import Header from "./Header";
import MainContent from "../components/main/MainContent";
import PartitionContext from "../context/PartitionContext";

function App() {
  var notes = [];
  var freeTime = 42;

  return (
    <Router>
      <Header />
      <PartitionContext.Provider
        value={{ notes, freeTime }}
      >
        <MainContent />
      </PartitionContext.Provider>
    </Router>
  );
}

export default App;
