import React from "react";

function Main(props) {
  const { win, value, loose, count, guess, newGame, handleChange } = props;

  const newGame1 = () => {
    newGame();
  };

  const guess1 = () => {
    guess();
  };

  const handleChange1 = (e) => {
    const tempValue = e.target.value;
    handleChange(tempValue);
  };

  return (
    <>
      <button className="btn btn-success btn-block" onClick={newGame1}>
        New Game
      </button>
      {/* <p>Số random ban đầu: {randomValue}</p> */}
      <p className="mt-3">
        Số lần đoán: <span className="alert alert-info">{count}</span>
      </p>
      <div className="form-group">
        <input
          type="number"
          min="1"
          max="100"
          value={value}
          onChange={handleChange1}
          className="form-control"
        />
      </div>
      <button className="btn btn-info" onClick={guess1}>
        Guess
      </button>
      {win && <p className="alert alert-info mt-3">You win</p>}
      {loose && <p className="alert alert-danger mt-3">You Loose</p>}
    </>
  );
}

export default Main;
