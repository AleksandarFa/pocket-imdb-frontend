import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "../utils/history";
import authReducer from "./auth/reducer";
import movieReducer from "./movies/reducers";
import commentReducer from "./comments/reducers";

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  movies: movieReducer,
  comments: commentReducer,
});

export default rootReducer;
