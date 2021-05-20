import {
  FETCH_ALL_MOVIES_SUCCESS,
  FETCH_SINGLE_MOVIE_SUCCESS,
} from "./actionTypes";

export const initialState = {
  movies: null,
  movie: null,
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
    default:
      return state;
  }
}

export default movieReducer;
