import React, { Component } from "react";
import "./App.css";
import FuncComp from "./components/FuncComp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Presentational vs Container components</h1>
        <p>
          Presentational components are normally in charged of what users see
          (i.e. the UI, user interface)
        </p>
        <p>
          Container components often are concerned with data saved in state and
          how to manage that data (i.e. CRUD on data, Create Read Update
          Destroy)
        </p>
        <FuncComp prop1="test" />
      </div>
    );
  }
}

export default App;
