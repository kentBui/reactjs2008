const initialState = {
  isLogined: false,
  username: "",
  token: null,
  message: "",
  sendingRequest: false,
};

const authReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        sendingRequest: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLogined: true,
        username: action.payload.username,
        token: action.payload.token,
        message: action.payload.message,
        sendingRequest: false,
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        isLogined: false,
        message: action.payload.message,
        sendingRequest: false,
      };
    default:
      return state;
  }
};

export default authReducer;
