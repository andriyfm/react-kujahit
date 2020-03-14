import React from "react";
import "./App.css";

import { ThemeContext, themes } from "./contexts/ThemeContext";
import ThemedButton from "./components/ThemedButton";

function Toolbar(props) {
  return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: themes.light };
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };
  }

  render() {
    return (
      <header class="App-header">
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
      </header>
    );
  }
}

export default App;
