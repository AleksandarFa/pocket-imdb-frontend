import {
  FETCH_ALL_MOVIES_REQUEST,
  FETCH_ALL_MOVIES_SUCCESS,
} from "./actionTypes";

export function fetchMovies() {
  return {
    type: FETCH_ALL_MOVIES_REQUEST,
  };
}

export function fetchMoviesSuccess(movies) {
  return {
    type: FETCH_ALL_MOVIES_SUCCESS,
    movies,
  };
}
