import React from "react";
import "./App.css";
import { FormComments } from "./components/basics/Forms";

function App() {
  const numbers = [1, 24, 41, 4];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Forms</h1>
        <FormComments />
      </header>
    </div>
  );
}

export default App;
