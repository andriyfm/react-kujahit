import React from "react";

// Import Contexts
import { ThemeContext, themes } from "./contexts/ThemeContext";

// Import pages
import Home from "./pages/Home";

// Import main style
import "./styles/main.scss";

// Import font awesome 5
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Initialize font awesome 5
library.add(fab, fas);

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
        <Home />
      </ThemeContext.Provider>
    );
  }
}

export default App;
