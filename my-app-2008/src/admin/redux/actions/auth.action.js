import { authApi } from "../../api";
import { saveToken, saveUser } from "../../ultil/localStorageHandle";

export const login = (user) => {
  console.log(user);
  return (dispatch) => {
    dispatch({
      type: "LOGIN_REQUEST",
    });

    authApi
      .login(user)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            token: res.data.token,
            message: "Success",
            username: res.data.username,
          },
        });
        saveToken(res.data.token);
        saveUser(res.data.username);
        window.location = "/"; // redirect ve home page, refresh page,
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "LOGIN_FAIL",
          payload: {
            message: "UnAuthorized",
          },
        });
      });
  };
};
