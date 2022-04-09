/* eslint-disable import/no-useless-path-segments */
import { combineReducers } from "redux";

import user from "./user/reducer";

export default combineReducers({
  user,
});
