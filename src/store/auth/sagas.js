import { takeLatest, call, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import {
  fetchAuthenticatedUser,
  fetchAuthenticatedUserSuccess,
  logoutSuccess,
  logoutError,
  loginSuccess,
  loginError,
  setToken,
  forgotPasswordSuccess,
  forgotPasswordError,
  registerSuccess,
  registerError,
  resetPasswordSuccess,
  resetPasswordError,
  socialAuthSuccess,
  socialAuthError,
} from "./actions";
import {
  LOGIN_REQUEST,
  FETCH_AUTHENTICATED_USER_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
} from "./actionTypes";
import { DASHBOARD, LOGIN } from "../../routes";
import authService from "../../services/AuthService";
import { removeItem } from "../../utils/localStorage";

export function* authorize({ email, password }) {
  try {
    const token = yield call(authService.login, { email, password });
    yield put(loginSuccess());
    yield put(setToken(token));
    yield put(push(DASHBOARD));
  } catch (error) {
    const errorData = error.response.data;
    yield put(loginError(errorData));
  }
}

export function* register({
  firstName: first_name,
  lastName: last_name,
  username,
  email,
  password,
}) {
  try {
    const token = yield call(authService.register, {
      first_name,
      last_name,
      email,
      password,
      username,
    });

    yield put(setToken(token));
    yield put(registerSuccess(true));
    yield put(registerError(null));
    yield put(push(LOGIN));
  } catch (error) {
    let errorData = error.response.data;
    yield put(registerError(errorData));
  }
}

export function* logout() {
  try {
    yield put(logoutSuccess());
    yield put(removeItem("token"));
  } catch (error) {
    yield put(logoutError());
  }
}

export function* fetchUser() {
  try {
    const user = yield call(authService.fetchAuthenticatedUser);
    yield put(fetchAuthenticatedUserSuccess(user.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, authorize);
  yield takeLatest(FETCH_AUTHENTICATED_USER_REQUEST, fetchUser);
  yield takeLatest(LOGOUT_REQUEST, logout);
  yield takeLatest(REGISTER_REQUEST, register);
}
