import { getItem } from "../../utils/localStorage";

import {
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_ERROR,
  SET_TOKEN,
  SESSION_EXPIRED,
  FETCH_AUTHENTICATED_USER_SUCCESS,
} from "./actionTypes";

export const initialState = {
  token: getItem("token") || null,
  user: null,
  registerSuccess: null,
  error: null,
};

const appReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case LOGOUT_SUCCESS:
      return {
        token: null,
        user: null,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: actions.token,
      };
    case SESSION_EXPIRED:
      return {
        user: null,
        token: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: actions.success,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        error: actions.error,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: actions.error,
      };
    case FETCH_AUTHENTICATED_USER_SUCCESS:
      return {
        ...state,
        user: actions.user,
      };
    default:
      return state;
  }
};

export default appReducer;
