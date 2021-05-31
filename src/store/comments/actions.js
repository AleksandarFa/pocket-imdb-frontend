import {
  FETCH_MOVIE_COMMENTS_REQUEST,
  FETCH_MOVIE_COMMENTS_SUCCESS,
  POST_MOVIE_COMMENT_REQUEST,
  POST_MOVIE_COMMENT_SUCCESS,
  POST_MOVIE_COMMENT_ERROR,
  FETCH_MOVIE_COMMENT_PAGE_SUCCESS,
} from "../../store/comments/actionTypes";

export function fetchMovieCommentsRequest(endpoint, page) {
  return {
    type: FETCH_MOVIE_COMMENTS_REQUEST,
    endpoint,
    page,
  };
}

export function fetchMovieCommentsSuccess(comments) {
  return {
    type: FETCH_MOVIE_COMMENTS_SUCCESS,
    comments,
  };
}

export function postMovieCommentRequest(data) {
  return {
    type: POST_MOVIE_COMMENT_REQUEST,
    data,
  };
}

export function postMovieCommentSuccess(data) {
  return {
    type: POST_MOVIE_COMMENT_SUCCESS,
    data,
  };
}

export function postMovieCommentError(err) {
  return {
    type: POST_MOVIE_COMMENT_ERROR,
    err,
  };
}

export function fetchMovieCommentPageSuccess(data) {
  return {
    type: FETCH_MOVIE_COMMENT_PAGE_SUCCESS,
    data,
  };
}
