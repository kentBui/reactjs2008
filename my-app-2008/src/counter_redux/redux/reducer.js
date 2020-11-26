const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "INCREASE_COUNTER":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "DECREASE_COUNTER":
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    case "ASYNC_INCREASE_COUNTER":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
