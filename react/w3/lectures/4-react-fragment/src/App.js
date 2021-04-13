import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>React Fragment, yes to keys</React.Fragment>
        <>Same as Fragment?</>
        <div>Say no to React Fragment</div>
        <div>And this too!</div>
      </div>
    );
  }
}

export default App;
