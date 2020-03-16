import React from "react";
import { ThemeContext, themes } from "./contexts/ThemeContext";
import ShortcodePages from "./pages/ShortcodesPage";
import "./styles/main.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <ShortcodePages />
      </ThemeContext.Provider>
    );
  }
}

export default App;
