import React, { Component } from "react";
import Counter from "./components/Counter/Counter";
import TdList from "./components/TdList/TdList.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Counter />
        <TdList />
      </React.Fragment>
    );
  }
}

export default App;
