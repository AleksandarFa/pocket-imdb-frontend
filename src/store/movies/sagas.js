import { call, put, takeLatest } from "@redux-saga/core/effects";

import movieService from "../../services/movieService";

import { FETCH_ALL_MOVIES_REQUEST } from "./actionTypes";
import { fetchMoviesSuccess } from "./actions";

export function* fetchAllMovies() {
  const response = yield call(movieService.retrieveAllMovies);
  yield put(fetchMoviesSuccess(response.results));
}

function* movieSagas() {
  yield takeLatest(FETCH_ALL_MOVIES_REQUEST, fetchAllMovies);
}

export default movieSagas;
