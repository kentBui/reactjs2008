import React, { Component, PureComponent } from "react";

class ClassCounter extends PureComponent {
  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props.data, nextProps.data);
  }
  render() {
    const data = this.props.data;
    console.log(`Render class counter: ${data.counter}`);
    return (
      <div>
        <h3>hello from class counter</h3>
        <h3>{data.counter}</h3>
      </div>
    );
  }
}

export default ClassCounter;
