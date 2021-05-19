import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectAuth = (state) => state.auth || initialState;

const makeSelectIsAuthenticated = () =>
  createSelector(selectAuth, (substate) => !!substate.token);

const makeSelectUser = () =>
  createSelector(selectAuth, (substate) => substate.user);

const makeSelectError = () =>
  createSelector(selectAuth, (substate) => substate.error);

const makeSelectToken = () =>
  createSelector(selectAuth, (substate) => substate.token);

const makeSelectIsRegistered = () =>
  createSelector(selectAuth, (substate) => substate.registerSuccess);

export {
  makeSelectUser,
  makeSelectError,
  makeSelectIsAuthenticated,
  makeSelectIsRegistered,
  makeSelectToken,
};
