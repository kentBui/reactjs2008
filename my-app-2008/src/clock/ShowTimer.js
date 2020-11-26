import React, { Component } from "react";

export default class ShowTimer extends Component {
  componentDidUpdate() {
    console.log(`show timer ${this.props.timer}`);
  }

  render() {
    return <h2>{this.props.timer}</h2>;
  }
}
