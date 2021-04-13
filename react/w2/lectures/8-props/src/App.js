import React, { Component } from "react";
import Comp1 from "./components/Comp1";

class App extends Component {
  // constructor(props) {
  // super(props);
  state = {
    user: "Juan",
    color: "red",
  };
  // }

  render() {
    return (
      <div>
        <h1>Props... oooof...</h1>
        <h3>App Component</h3>
        <p>
          User: {this.state.user} color: {this.state.color}
        </p>
        <button onClick={() => this.setState({ color: "blue" })}>
          Change color
        </button>
        <Comp1 prop1="Sean" user={this.state.user} color={this.state.color} />
      </div>
    );
  }
}

// How to create a prop
// step 1: find where the component you want to pass the data to is called
// step 2: after the name of the component but before the / create the name for the prop (e.g. <Component propName />)

// How to give a value to a prop
// step 1: after the propName use the assignment operator (=)
// step 2: after the equal give it a value (e.g. "string", 11, object, array)

// How to use the prop in the component you passed it to?
// step 1: {this.props.nameOfProp}

export default App;
