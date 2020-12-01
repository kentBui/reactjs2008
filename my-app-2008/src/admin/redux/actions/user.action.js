import { userApi } from "../../api";

export const getAllListUsers = (data) => {
  return (dispatch) => {
    dispatch({
      type: "GET_LIST_USERS_REQUEST",
    });

    userApi
      .getAllUsers()
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
