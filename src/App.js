import React from "react";
import { ThemeContext, themes } from "./contexts/ThemeContext";

// Import Layout and pages
import Layout from "./components/Layout";

// Import main style
import "./styles/main.scss";

// Import and intilize the font awesome 5
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

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
        <Layout>
          <h1>Content here...</h1>
        </Layout>
      </ThemeContext.Provider>
    );
  }
}

export default App;
