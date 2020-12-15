import { userApi } from "../../api";
import { getUserConstant } from "./constant";

export const getAllListUsers = (data) => {
  return (dispatch) => {
    dispatch({
      type: "GET_LIST_USERS_REQUEST",
    });

    userApi
      .getAllUsers(data)
      .then((res) => {
        console.log(res.data);

        dispatch({
          type: "GET_LIST_USERS_SUCCESS",
          payload: {
            users: res.data,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "GET_LIST_USERS_FAIL",
          payload: {
            error: err,
          },
        });
      });
  };
};

export const addUser = (data) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_USER_REQUEST",
    });

    userApi
      .addUser(data)
      .then((res) => {
        console.log(res);
        dispatch({
          type: "ADD_USER_SUCCESS",
          payload: {
            user: res.data.user,
            message: res.data.message,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "ADD_USER_FAIL",
          payload: {
            error: err,
            message: err,
          },
        });
      });
  };
};

export const getUser = (id) => {
  return (dispatch) => {
    dispatch({
      type: getUserConstant.GET_USER_REQUEST,
    });

    userApi
      .getUser(id)
      .then((res) => {
        console.log(res);
        dispatch({
          type: getUserConstant.GET_USER_SUCCESS,
          payload: {
            user: res.data.user,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: getUserConstant.GET_USER_FAIL,
          payload: {
            message: err,
          },
        });
      });
  };
};
