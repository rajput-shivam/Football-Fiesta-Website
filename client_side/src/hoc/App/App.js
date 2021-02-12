import React, { Component } from "react";
import classes from "./App.module.css";
import Navigation from "../Navigation/Navigation";


class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Navigation />
      </div>
    );
  }
}

export default App;
