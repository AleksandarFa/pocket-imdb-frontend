import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "../utils/history";
import authReducer from "./auth/reducer";
import movieReducer from "./movies/reducers";

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  movies: movieReducer,
});

export default rootReducer;
