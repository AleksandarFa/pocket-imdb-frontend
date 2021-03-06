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
  FETCH_POPULAR_MOVIES_REQUEST,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_WATCH_LIST_REQUEST,
  FETCH_WATCH_LIST_SUCCESS,
  ADD_WATCH_LIST_ITEM_REQUEST,
  ADD_WATCH_LIST_ITEM_SUCCESS,
  UPDATE_WATCH_LIST_ITEM_REQUEST,
  UPDATE_WATCH_LIST_ITEM_SUCCESS,
  REMOVE_WATCH_LIST_ITEM,
  REMOVE_WATCH_LIST_ITEM_SUCCESS,
  CREATE_MOVIE_REQUEST,
  CREATE_MOVIE_SUCCESS,
  CREATE_MOVIE_ERROR,
  FETCH_MOVIE_OMDB_REQUEST,
  FETCH_MOVIE_OMDB_SUCCESS,
  POST_MOVIE_IMAGE_REQUEST,
  POST_MOVIE_IMAGE_SUCCESS,
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

export function fetchPopularMoviesRequest(url) {
  return {
    type: FETCH_POPULAR_MOVIES_REQUEST,
    url,
  };
}

export function fetchPopularMoviesSuccess(popular) {
  return {
    type: FETCH_POPULAR_MOVIES_SUCCESS,
    popular,
  };
}

export function fetchWatchListRequest(url) {
  return {
    type: FETCH_WATCH_LIST_REQUEST,
    url,
  };
}

export function fetchWatchListSuccess(watchList) {
  return {
    type: FETCH_WATCH_LIST_SUCCESS,
    watchList,
  };
}

export function addToWatchListRequest(movie) {
  return {
    type: ADD_WATCH_LIST_ITEM_REQUEST,
    movie,
  };
}

export function addToWatchListSuccess(movie) {
  return {
    type: ADD_WATCH_LIST_ITEM_SUCCESS,
    movie,
  };
}

export function updateWatchedRequest(data) {
  return {
    type: UPDATE_WATCH_LIST_ITEM_REQUEST,
    data,
  };
}

export function updateWatchedSuccess(data) {
  return {
    type: UPDATE_WATCH_LIST_ITEM_SUCCESS,
    data,
  };
}

export function deleteWatchListItem(data) {
  return {
    type: REMOVE_WATCH_LIST_ITEM,
    data,
  };
}

export function delteWatchListItemSuccess(movieId) {
  return {
    type: REMOVE_WATCH_LIST_ITEM_SUCCESS,
    movieId,
  };
}

export function createMovieRequest(data) {
  return {
    type: CREATE_MOVIE_REQUEST,
    data,
  };
}

export function createMovieSuccess() {
  return {
    type: CREATE_MOVIE_SUCCESS,
  };
}

export function createMovieError(err) {
  return {
    type: CREATE_MOVIE_ERROR,
    err,
  };
}

export function fetchMovieOMDBRequest(data) {
  return {
    type: FETCH_MOVIE_OMDB_REQUEST,
    data,
  };
}

export function fetchMovieOMDBSuccess(data) {
  return {
    type: FETCH_MOVIE_OMDB_SUCCESS,
    data,
  };
}

export function postMovieImageRequest(data) {
  return {
    type: POST_MOVIE_IMAGE_REQUEST,
    data,
  };
}

export function postMovieImageSuccess() {
  return {
    type: POST_MOVIE_IMAGE_SUCCESS,
  };
}
