import React, { Component } from "react";
import Clock from "./clock/Clock";

class Lesson2 extends Component {
  constructor() {
    super();
    this.state = {
      status: true,
    };
  }
  componentDidMount() {
    console.log(" app did mount");
  }

  changeStatus = () => {
    console.log("turn on");
    this.setState({
      status: !this.state.status,
    });
  };

  render() {
    console.log("app render");
    return (
      <div>
        My app
        {this.state.status ? <Clock /> : ""}
        <button onClick={this.changeStatus}>
          Turn {this.state.status ? "Off" : "On"}
        </button>
      </div>
    );
  }
}

export default Lesson2;
