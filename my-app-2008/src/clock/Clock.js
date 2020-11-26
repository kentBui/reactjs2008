import React, { Component } from "react";
import ShowTimer from "./ShowTimer";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      timer: new Date().toISOString(),
    };
    console.log("start constructor");
  }

  intervalTimer = 0;

  componentDidMount() {
    console.log("clock did mount");
    this.getTime();
    // window.title = this.state.timer;
  }

  componentWillUnmount() {
    console.log("clock will unmount");
    clearInterval(this.intervalTimer);
    // window.title = this.state.timer;
  }

  componentDidUpdate() {
    console.log("timer updated");
    // window.title = this.state.timer;
  }

  getTime = () => {
    this.intervalTimer = setInterval(() => {
      console.log(`intervar ${this.intervalTimer}`);
      this.setState({
        timer: new Date().toISOString(),
      });
    }, 1000);
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`Timer: ${this.state.timer} - ${nextState.timer}`);
    return false;
  }

  render() {
    console.log("clock render");
    return (
      <div>
        <ShowTimer timer={this.state.timer} />
      </div>
    );
  }
}

export default Clock;
