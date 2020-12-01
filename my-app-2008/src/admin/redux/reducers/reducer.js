import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import userReducer from "./users.reducer";

export const reducer = combineReducers({
  auth: authReducer,
  userReducer,
});
