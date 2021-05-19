import { fork } from "redux-saga/effects";

import AuthSagas from "./auth/sagas";
import MovieSagas from "./movies/sagas";

export default function* rootSaga() {
  yield fork(AuthSagas);
  yield fork(MovieSagas);
}
