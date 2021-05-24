import { call, put, takeLatest } from "@redux-saga/core/effects";

import movieService from "../../services/movieService";

import {
  FETCH_ALL_MOVIES_REQUEST,
  FETCH_PAGE_OF_MOVIES_REQUEST,
  FETCH_SINGLE_MOVIE_REQUEST,
  FETCH_GENRES_REQUEST,
} from "./actionTypes";
import {
  fetchMoviesSuccess,
  fetchSingleMovieSuccess,
  fetchGenresSuccess,
  setNext,
  setPrevious,
} from "./actions";

export function* fetchAllMovies() {
  const response = yield call(movieService.retrieveAllMovies);
  yield put(fetchMoviesSuccess(response));
  yield put(setNext(response.next));
}

export function* fetchSingleMovie(id) {
  const response = yield call(movieService.retrieveMovie, id);
  yield put(fetchSingleMovieSuccess(response));
}

export function* fetchPageOfMovies(url) {
  const response = yield call(movieService.fetchPage, url);
  yield put(fetchMoviesSuccess(response));
  yield put(setNext(response.next));
  yield put(setPrevious(response.previous));
}

export function* fetchGenres(url) {
  const response = yield call(movieService.fetchPage, url);
  yield put(fetchGenresSuccess(response));
}

function* movieSagas() {
  yield takeLatest(FETCH_ALL_MOVIES_REQUEST, fetchAllMovies);
  yield takeLatest(FETCH_SINGLE_MOVIE_REQUEST, fetchSingleMovie);
  yield takeLatest(FETCH_PAGE_OF_MOVIES_REQUEST, fetchPageOfMovies);
  yield takeLatest(FETCH_GENRES_REQUEST, fetchGenres);
}

export default movieSagas;
