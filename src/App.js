import React from "react";
import "./App.css";
import Mailbox from "./components/Mailbox";

function App() {
  const [messages] = React.useState(["unread 1", "unread2", "unread3"]);
  return (
    <div className="App">
      <header className="App-header">
        <Mailbox messages={messages} />
      </header>
    </div>
  );
}

export default App;
