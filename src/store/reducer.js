import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "../utils/history";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
});

export default rootReducer;
