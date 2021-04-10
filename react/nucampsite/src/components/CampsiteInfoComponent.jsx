import React, { Component } from "react";

class CampsiteInfo extends Component {
  render() {
    if (this.props.campsite) {
      return <div>Selected a campsite</div>;
    } else {
      return <div>Nothing selected</div>;
    }
  }
}

export default CampsiteInfo;
