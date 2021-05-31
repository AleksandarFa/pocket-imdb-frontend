import { fork } from "redux-saga/effects";

import AuthSagas from "./auth/sagas";
import MovieSagas from "./movies/sagas";
import CommentSagas from "./comments/sagas";

export default function* rootSaga() {
  yield fork(AuthSagas);
  yield fork(MovieSagas);
  yield fork(CommentSagas);
}
