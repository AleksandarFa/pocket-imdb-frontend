import { call, put, takeLatest } from "@redux-saga/core/effects";

import movieService from "../../services/movieService";

import {
  FETCH_ALL_MOVIES_REQUEST,
  FETCH_SINGLE_MOVIE_REQUEST,
} from "./actionTypes";
import { fetchMoviesSuccess, fetchSingleMovieSuccess } from "./actions";

export function* fetchAllMovies() {
  const response = yield call(movieService.retrieveAllMovies);
  yield put(fetchMoviesSuccess(response.results));
}

export function* fetchSingleMovie(id) {
  const response = yield call(movieService.retrieveMovie, id);
  yield put(fetchSingleMovieSuccess(response));
}

function* movieSagas() {
  yield takeLatest(FETCH_ALL_MOVIES_REQUEST, fetchAllMovies);
  yield takeLatest(FETCH_SINGLE_MOVIE_REQUEST, fetchSingleMovie);
}

export default movieSagas;
