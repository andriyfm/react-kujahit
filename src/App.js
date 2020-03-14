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
  import React, { Suspense } from "react";
  import "./App.css";
  import { FormComments } from "./components/basics/Forms";

  const OtherComponent = React.lazy(() =>
    import("./components/OtherComponent")
  );

  function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Forms</h1>
          <Suspense fallback={<div style={{ color: "white" }}>Loading...</div>}>
            <OtherComponent />
          </Suspense>
        </header>
      </div>
    );
  }

  export default App;
}

export default App;
