import {
  FETCH_ALL_MOVIES_REQUEST,
  FETCH_ALL_MOVIES_SUCCESS,
  FETCH_SINGLE_MOVIE_REQUEST,
  FETCH_SINGLE_MOVIE_SUCCESS,
  FETCH_PAGE_OF_MOVIES_REQUEST,
  FETCH_GENRES_REQUEST,
  FETCH_GENRES_SUCCESS,
  SET_NEXT_PAGE,
  SET_PREVIOUS_PAGE,
  POST_LIKE_MOVIE_REQUEST,
  POST_LIKE_MOVIE_SUCCESS,
  POST_LIKE_MOVIE_ERROR,
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

export function fetchPageOfMoviesRequest(url) {
  return {
    type: FETCH_PAGE_OF_MOVIES_REQUEST,
    url,
  };
}

export function setNext(next) {
  return {
    type: SET_NEXT_PAGE,
    next,
  };
}

export function setPrevious(previous) {
  return {
    type: SET_PREVIOUS_PAGE,
    previous,
  };
}

export function fetchGenresRequest(url) {
  return {
    type: FETCH_GENRES_REQUEST,
    url,
  };
}

export function fetchGenresSuccess(genres) {
  return {
    type: FETCH_GENRES_SUCCESS,
    genres,
  };
}

export function postLikeRequest(like) {
  return {
    type: POST_LIKE_MOVIE_REQUEST,
    like,
  };
}

export function postLikeSuccess(like) {
  return {
    type: POST_LIKE_MOVIE_SUCCESS,
    like,
  };
}

export function postLikeError(err) {
  return {
    type: POST_LIKE_MOVIE_ERROR,
    err,
  };
}
