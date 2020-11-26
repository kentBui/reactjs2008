export const increase = (val) => {
  console.log(val);
  return (dispatch) => {
    return dispatch({
      type: "INCREASE_COUNTER",
      payload: 1,
    });
  };
};

export const decrease = () => {
  return (dispatch) => {
    return dispatch({
      type: "DECREASE_COUNTER",
      payload: 1,
    });
  };
};

export const asyncIncrease = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: "ASYNC_INCREASE_COUNTER",
        payload: 1,
      });
    }, 2000);
  };
};
