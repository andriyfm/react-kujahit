import React from "react";
import "./App.css";

const ThemeContext = React.createContext({ color: "light" });
const UserContext = React.createContext("andri");

class App extends React.Component {
  render() {
    return (
      <header class="App-header">
        <ThemeContext.Provider value={{ color: "red" }}>
          <UserContext.Provider value="firmansyah">
            <Toolbar />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </header>
    );
  }
}

class ThemeButton extends React.Component {
  static contextType = UserContext;

  render() {
    // return <button>Button {this.context}</button>;
    return (
      <div>
        <ThemeContext.Consumer>
          {themeValue => (
            <div>
              <UserContext.Consumer>
                {value => (
                  <h1>
                    {value} - {themeValue.color}
                  </h1>
                )}
              </UserContext.Consumer>
            </div>
          )}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

function Toolbar(props) {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

export default App;
