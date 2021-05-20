import {
  FETCH_ALL_MOVIES_REQUEST,
  FETCH_ALL_MOVIES_SUCCESS,
  FETCH_SINGLE_MOVIE_REQUEST,
  FETCH_SINGLE_MOVIE_SUCCESS,
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

export function fetchSingleMovie({ id }) {
  return {
    type: FETCH_SINGLE_MOVIE_REQUEST,
    id,
  };
}

export function fetchSingleMovieSuccess(movie) {
  return {
    type: FETCH_SINGLE_MOVIE_SUCCESS,
    movie,
  };
}
