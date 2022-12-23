import React from "react";
import { UseState } from "./UseState.js";
import { ClassState } from "./ClassState.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UseState name="Jose" />
      <ClassState name="Luis"/>
    </div>
  );
}

export default App;
