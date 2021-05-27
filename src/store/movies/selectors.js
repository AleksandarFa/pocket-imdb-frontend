import { createSelector } from "reselect";
import { initialState } from "./reducers";

const selectMovies = (state) => state.movies || initialState;

const makeSelectAllMovies = () =>
  createSelector(selectMovies, (substate) => substate.movies);

const makeSelectMovie = () =>
  createSelector(selectMovies, (substate) => substate.movie);

const makeSelectNextMovie = () =>
  createSelector(selectMovies, (substate) => substate.next);

const makeSelectPreviousMovie = () =>
  createSelector(selectMovies, (substate) => substate.previous);

const makeSelectGenre = () =>
  createSelector(selectMovies, (substate) => substate.genres);

const makeSelectPopular = () =>
  createSelector(selectMovies, (substate) => substate.popular);

export {
  makeSelectAllMovies,
  makeSelectMovie,
  makeSelectNextMovie,
  makeSelectPreviousMovie,
  makeSelectPopular,
  makeSelectGenre,
};
