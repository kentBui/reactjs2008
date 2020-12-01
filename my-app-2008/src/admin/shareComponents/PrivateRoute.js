import React from "react";
import { connect, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getToken } from "../ultil/localStorageHandle";

function PrivateRoute({ component: Component, isLogined, ...rest }) {
  // const isLogined = useSelector((state) => state.auth.isLogined);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogined ? <Component {...props} /> : <Redirect to="/signin" />
      }
    ></Route>
  );
}

const mapState = (state) => {
  return {
    isLogined: state.auth.isLogined,
  };
};

export default connect(mapState)(PrivateRoute);
