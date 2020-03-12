import React from "react";
import "./App.css";
import NumberList from "./components/NumberList";

function App() {
  const numbers = [1, 24, 41, 4];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rendering multiple components</h1>
        <NumberList numbers={numbers} />
      </header>
    </div>
  );
}

export default App;
