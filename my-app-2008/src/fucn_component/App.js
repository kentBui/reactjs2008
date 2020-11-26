import React from "react";
import ClassCounter from "./ClassCounter";
import FuncCounter from "./FuncCounter";

class App extends React.Component {
  state = {
    counter: 0,
    data: {
      counter: 0,
    },
  };

  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });

    let data = { ...this.state.data };
    data.counter += 1;

    this.setState({
      data,
    });
    // viec setState nhu tren khong tao ra data moi => nen ko rerender lai
    // this.setState({
    //   data: {
    //     counter: this.state.data.counter + 1,
    //   },
    // });
    // viec setState nhu the nay se tao ra obj moi => rerender lai
  };
  noIncreaseCounter = () => {
    this.setState({
      counter: this.state.counter,
    });

    let data = { ...this.state.data };
    data.counter += 0;

    this.setState({
      data,
    });
  };

  render() {
    return (
      <div>
        <h2>hello from react app</h2>
        <ClassCounter data={this.state.data} />
        <FuncCounter data={this.state.data} />
        <button onClick={this.increaseCounter}>Increase</button>
        <button onClick={this.noIncreaseCounter}>No Increase</button>
      </div>
    );
  }
}

export default App;
