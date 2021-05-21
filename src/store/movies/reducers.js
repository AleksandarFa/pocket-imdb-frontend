import {
  FETCH_ALL_MOVIES_SUCCESS,
  FETCH_SINGLE_MOVIE_SUCCESS,
  SET_NEXT_PAGE,
  SET_PREVIOUS_PAGE,
} from "./actionTypes";

export const initialState = {
  movies: null,
  movie: null,
  next: null,
  previous: null,
};

function movieReducer(state = initialState, actions) {
  switch (actions.type) {
    case FETCH_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        movies: actions.movies,
      };
    case FETCH_SINGLE_MOVIE_SUCCESS:
      return {
        ...state,
        movie: actions.movie,
      };
    case SET_NEXT_PAGE:
      return {
        ...state,
        next: actions.next,
      };
    case SET_PREVIOUS_PAGE:
      return {
        ...state,
        previous: actions.previous,
      };
    default:
      return state;
  }
}

export default movieReducer;
