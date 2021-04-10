import React, { Component } from "react";

const arr = ["Juan", "Jess", "Jaime", "Jax", "Tiff", "Coco"];

// const arr = [
//   "<li>Juan</li>",
//   "<li>Jess</li>",
//   "<li>Jaime</li>",
//   "<li>Jax</li>",
//   "<li>Tiff</li>",
//   "<li>Coco</li>",
// ];

class Comp1 extends Component {
  //   constructor(props) {
  // super(props);
  state = {
    name: arr,
  };
  //   }

  displayName = () => {
    let newArr = this.state.name.map((name) => {
      return <li>{name}</li>;
    });
    return newArr;
  };

  render() {
    return (
      <div>
        <h1>Comp1</h1>
        <div>{this.displayName()}</div>
      </div>
    );
  }
}

export default Comp1;
