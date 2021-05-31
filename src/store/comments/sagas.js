import { call, put, takeLatest } from "@redux-saga/core/effects";

import commentService from "../../services/commentService";

import {
  FETCH_MOVIE_COMMENTS_REQUEST,
  POST_MOVIE_COMMENT_REQUEST,
} from "./actionTypes";

import {
  fetchMovieCommentsSuccess,
  postMovieCommentSuccess,
  postMovieCommentError,
  fetchMovieCommentPageSuccess,
} from "./actions";

export function* fetchMovieComments({ endpoint, page }) {
  if (!page) {
    const response = yield call(
      commentService.fetchMovieComments,
      endpoint,
      page
    );
    yield put(fetchMovieCommentsSuccess(response));
  } else {
    const response = yield call(
      commentService.fetchMovieComments,
      endpoint,
      page
    );
    yield put(fetchMovieCommentPageSuccess(response));
  }
}

export function* postMovieComment({ data }) {
  try {
    const response = yield call(commentService.postMovieComment, data);
    yield put(postMovieCommentSuccess(response));
  } catch (err) {
    yield put(postMovieCommentError(err));
  }
}

function* commentSaga() {
  yield takeLatest(FETCH_MOVIE_COMMENTS_REQUEST, fetchMovieComments);
  yield takeLatest(POST_MOVIE_COMMENT_REQUEST, postMovieComment);
}

export default commentSaga;
