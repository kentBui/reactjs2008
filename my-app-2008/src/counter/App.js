import React, { Component } from "react";
import { connect } from "react-redux";
import { createStore } from "redux";

const initialState = {
  counter: 0,
};

const increaseAction = () => {
  console.log("acaw");
  store.dispatch({
    type: "INCREASE",
    payload: 1,
  });
};
const increaseAsyncAction = () => {
  console.log("acaw");
  setTimeout(() => {
    store.dispatch({
      type: "ASYNC_INCREASE",
      payload: 1,
    });
  }, 1000);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ASYNC_INCREASE":
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

class Counter extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    store.subscribe(() => {
      const tempCount = store.getState().counter;
      console.log(tempCount);
      this.setState({
        count: tempCount,
      });
    });
  }

  increase = () => {
    increaseAsyncAction();
  };

  render() {
    return (
      <div>
        <h3>Hello from counter</h3>
        <p>Counter: {this.state.count}</p>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

// class Footer extends Component {
//   render() {
//     return (
//       <div>
//         <h3>Hello from footer</h3>
//         <p>Counter: {this.props.count}</p>
//       </div>
//     );
//   }
// }

class App extends Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div>
        <h2>Hello from react app</h2>
        <h3>Counter: {this.state.counter}</h3>
        <hr />
        <Counter />
      </div>
    );
  }
}

export default App;
