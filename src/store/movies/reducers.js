import { FETCH_ALL_MOVIES_SUCCESS } from "./actionTypes";

export const initialState = {
  movies: null,
};

function movieReducer(state = initialState, actions) {
  switch (actions.type) {
    case FETCH_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        movies: actions.movies,
      };
    default:
      return state;
  }
}

export default movieReducer;
