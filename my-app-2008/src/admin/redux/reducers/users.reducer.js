import { getUserConstant } from "../actions/constant";

const initialState = {
  list: {
    users: [],
    loading: false,
    error: null,
  },
  addUser: {
    loading: false,
    message: "",
    error: null,
    success: false,
  },
  getUser: {
    loading: false,
    message: "",
    user: {},
    success: false,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST_USERS_REQUEST":
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
        },
      };
    case "GET_LIST_USERS_SUCCESS":
      return {
        ...state,
        list: {
          ...state.list,
          users: action.payload.users,
          loading: false,
        },
      };
    case "GET_LIST_USERS_FAIL":
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          error: action.payload.error,
        },
      };
    case "ADD_USER_REQUEST":
      return {
        ...state,
        addUser: {
          ...state.addUser,
          loading: true,
        },
      };
    case "ADD_USER_SUCCESS":
      return {
        ...state,
        addUser: {
          ...state.addUser,
          loading: false,
          message: action.payload.message,
          success: true,
        },
      };
    case "ADD_USER_FAIL":
      return {
        ...state.state,
        addUser: {
          loading: false,
          message: action.payload.message,
          success: false,
          error: action.payload.error,
        },
      };
    case getUserConstant.GET_USER_REQUEST:
      return {
        ...state,
        getUser: {
          ...state.getUser,
          loading: true,
        },
      };
    case getUserConstant.GET_USER_SUCCESS:
      return {
        ...state,
        getUser: {
          ...state.getUser,
          loading: false,
          user: action.payload.user,
          success: true,
        },
      };
    case getUserConstant.GET_USER_FAIL:
      return {
        ...state,
        getUser: {
          ...state.getUser,
          loading: false,
          message: action.payload.message,
          success: false,
          error: action.payload.error,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
