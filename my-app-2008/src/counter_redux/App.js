import React, { Component } from "react";
import { connect } from "react-redux";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div>
        <h2>hello counter</h2>
        <h2>Counter: {this.props.counter}</h2>
        <Counter />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    counter: state.counter,
  };
};

export default connect(mapState)(App);
