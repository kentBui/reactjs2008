import { Component } from "react";
import "./App.css";
import Header from "./guess/Header";
import Main from "./guess/Main";

class Lesson1 extends Component {
  state = {
    count: 0,
    value: 0,
    randomValue: Math.floor(Math.random() * 100),
    win: false,
    loose: false,
  };

  newGame = () => {
    this.setState({
      count: 0,
      value: 0,
      randomValue: Math.floor(Math.random() * 100),
      win: false,
      loose: false,
    });
  };

  guess = () => {
    if (this.state.value >= this.state.randomValue) {
      this.setState({
        win: true,
        count: 0,
        value: 0,
        randomValue: Math.floor(Math.random() * 100),
      });
    } else if (this.state.count > 4) {
      this.setState({
        loose: true,
        count: 0,
        value: 0,
        randomValue: Math.floor(Math.random() * 100),
      });
    } else {
      this.setState({
        count: this.state.count + 1,
        win: false,
        loose: false,
        value: 0,
      });
    }
  };

  handleChange = (newValue) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    const { count, value, win, loose } = this.state;
    const { newGame, guess, handleChange } = this;
    return (
      <div className="container pt-5">
        <div className="row">
          <div className="col-sm-8 mx-auto">
            <Header />
            <Main
              count={count}
              value={value}
              win={win}
              loose={loose}
              newGame={newGame}
              guess={guess}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Lesson1;
// data chỉ được truyền 1 chiều từ component cha đến component con (binding data là 1 chiều)
// việc comp cha nhận được dữ liệu từ comp con là do các method của comp cha, nó muốn nhận được
// value thì nó phải có method để cập nhật
//
// when use export {A} => use import {A} from
