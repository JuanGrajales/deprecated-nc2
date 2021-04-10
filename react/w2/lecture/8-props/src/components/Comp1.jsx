import React, { Component } from "react";

class Comp1 extends Component {
  render() {
    return (
      <div>
        <h3>Comp1</h3>
        <p>
          User: {this.props.user} color: {this.props.color}
        </p>
        <p>Prop: {this.props.prop1}</p>
      </div>
    );
  }
}

export default Comp1;
