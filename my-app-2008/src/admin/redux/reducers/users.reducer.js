const initialState = {
  list: {
    users: [],
    loading: false,
    error: null,
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
    default:
      return state;
  }
};

export default userReducer;
