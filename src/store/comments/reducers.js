import {
  FETCH_MOVIE_COMMENTS_SUCCESS,
  POST_MOVIE_COMMENT_SUCCESS,
} from "./actionTypes";

export const initialState = {
  comments: null,
};

function commentReducer(state = initialState, actions) {
  switch (actions.type) {
    case FETCH_MOVIE_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: actions.comments,
      };
    case POST_MOVIE_COMMENT_SUCCESS:
      const comments = { results: [...state.comments.results, actions.data] };
      return {
        ...state,
        comments: comments,
      };
    default:
      return state;
  }
}

export default commentReducer;
