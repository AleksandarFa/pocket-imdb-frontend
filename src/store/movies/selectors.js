import { createSelector } from "reselect";
import { initialState } from "./reducers";

const selectMovies = (state) => state.movies || initialState;

const makeSelectAllMovies = () =>
  createSelector(selectMovies, (substate) => substate.movies);

export { makeSelectAllMovies };
