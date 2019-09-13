import { combineReducers } from "redux";
import UserReducer from "./UserReducer";

export { UserReducer };

export default combineReducers({
  user: UserReducer,
});