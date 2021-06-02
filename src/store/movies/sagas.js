import { call, put, takeLatest } from "@redux-saga/core/effects";

import movieService, { ROUTES } from "../../services/movieService";
import { HTTP_METHODS } from "../../consts";

import {
  FETCH_ALL_MOVIES_REQUEST,
  FETCH_PAGE_OF_MOVIES_REQUEST,
  FETCH_SINGLE_MOVIE_REQUEST,
  FETCH_GENRES_REQUEST,
  POST_LIKE_MOVIE_REQUEST,
  FETCH_POPULAR_MOVIES_REQUEST,
  FETCH_WATCH_LIST_REQUEST,
  ADD_WATCH_LIST_ITEM_REQUEST,
  UPDATE_WATCH_LIST_ITEM_REQUEST,
  REMOVE_WATCH_LIST_ITEM,
  CREATE_MOVIE_REQUEST,
  FETCH_MOVIE_OMDB_REQUEST,
  POST_MOVIE_IMAGE_REQUEST,
} from "./actionTypes";
import {
  fetchMoviesSuccess,
  fetchSingleMovieSuccess,
  fetchGenresSuccess,
  fetchPopularMoviesSuccess,
  fetchWatchListSuccess,
  addToWatchListSuccess,
  updateWatchedSuccess,
  delteWatchListItemSuccess,
  createMovieSuccess,
  createMovieError,
  postLikeSuccess,
  fetchMovieOMDBSuccess,
  postMovieImageSuccess,
  postLikeError,
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

export function* postLike({ like }) {
  try {
    const response = yield call(movieService.setLike, like);
    yield put(postLikeSuccess(like));
  } catch (err) {
    yield put(postLikeError(err));
  }
}

export function* fetchPopularMovies(url) {
  const response = yield call(movieService.fetchPage, url);
  yield put(fetchPopularMoviesSuccess(response));
}

export function* fetchWatchList(url) {
  const response = yield call(movieService.fetchPage, url);
  yield put(fetchWatchListSuccess(response));
}

export function* addWatchListItem({ movie }) {
  const url = ROUTES.WATCHLIST;
  const method = HTTP_METHODS.POST;
  try {
    const response = yield call(
      movieService.watchListManipulation,
      url,
      method,
      movie
    );
    yield put(addToWatchListSuccess(movie));
  } catch (err) {
    console.log(err);
  }
}

export function* updateWatched({ data }) {
  const url = ROUTES.WATCHLIST;
  const method = HTTP_METHODS.PUT;
  try {
    const response = yield call(
      movieService.watchListManipulation,
      url,
      method,
      data
    );
    yield put(updateWatchedSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

export function* deleteWatchListItem({ data }) {
  const url = ROUTES.WATCHLIST;
  const method = HTTP_METHODS.DELETE;
  try {
    const response = yield call(
      movieService.watchListManipulation,
      url,
      method,
      data
    );
    yield put(delteWatchListItemSuccess(data.movie.id));
  } catch (err) {
    console.log(err);
  }
}

export function* createMovie({ data }) {
  const formData = new FormData();
  formData.append("file", data.file);
  try {
    const response = yield call(movieService.postMovieImage, formData);
    const response2 = yield call(movieService.createMovie, {
      ...data,
      cover_image: response.id,
    });
    yield put(createMovieSuccess());
  } catch (err) {
    yield put(createMovieError(err));
  }
}

export function* fetchFromOMDB({ data }) {
  try {
    const response = yield call(movieService.fetchFromOMDB, data);
    const genre = response.Genre.split(", ")[0];
    const data2 = {
      title: response.Title,
      description: response.Plot,
      genre: genre,
    };
    yield put(fetchMovieOMDBSuccess(data2));
  } catch (err) {
    yield put(createMovieError(err));
  }
}

export function* postMovieImage({ data }) {
  const formData = new FormData();
  formData.append("file", data);
  try {
    const response = yield call(movieService.postMovieImage, formData);
    console.log(response);
    yield put(postMovieImageSuccess());
  } catch (err) {
    console.log(err);
  }
}

function* movieSagas() {
  yield takeLatest(FETCH_ALL_MOVIES_REQUEST, fetchAllMovies);
  yield takeLatest(FETCH_SINGLE_MOVIE_REQUEST, fetchSingleMovie);
  yield takeLatest(FETCH_PAGE_OF_MOVIES_REQUEST, fetchPageOfMovies);
  yield takeLatest(FETCH_GENRES_REQUEST, fetchGenres);
  yield takeLatest(POST_LIKE_MOVIE_REQUEST, postLike);
  yield takeLatest(FETCH_POPULAR_MOVIES_REQUEST, fetchPopularMovies);
  yield takeLatest(FETCH_WATCH_LIST_REQUEST, fetchWatchList);
  yield takeLatest(ADD_WATCH_LIST_ITEM_REQUEST, addWatchListItem);
  yield takeLatest(UPDATE_WATCH_LIST_ITEM_REQUEST, updateWatched);
  yield takeLatest(REMOVE_WATCH_LIST_ITEM, deleteWatchListItem);
  yield takeLatest(CREATE_MOVIE_REQUEST, createMovie);
  yield takeLatest(FETCH_MOVIE_OMDB_REQUEST, fetchFromOMDB);
  yield takeLatest(POST_MOVIE_IMAGE_REQUEST, postMovieImage);
}

export default movieSagas;
