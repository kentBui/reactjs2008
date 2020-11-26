import React, { Component } from "react";
import { connect } from "react-redux";
import { decrease, asyncIncrease } from "./redux/action";

class Counter extends Component {
  state = {
    step: 1,
  };

  // increase = () => {
  //   this.setState({
  //     counter: this.state.counter + 1,
  //   });
  // };

  handleChange = (e) => {
    this.setState({
      step: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2>hello counter</h2>
        <h2>{this.props.counter}</h2>
        <hr />
        <input
          type="number"
          onChange={this.handleChange}
          value={this.state.step}
        />
        {/* <button onClick={() => this.props.increase(this.state.step)}>
          Increase
        </button> */}
        <br />
        <button onClick={this.props.decrease}>Decrease</button> <br />
        <button onClick={this.props.asyncIncrease}>Async Increase</button>
        <br />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    counter: state.counter,
  };
};

// const mapDispatch = (dispatch) => {
//   return {
//     increase: (val) => dispatch(increase(val)),
//   };
// };

// export default connect(mapState, mapDispatch)(Counter);
export default connect(mapState, { decrease, asyncIncrease })(Counter);
