import { createSelector } from "reselect";
import { initialState } from "./reducers";

const selectComments = (state) => state.comments || initialState;

const makeSelectComments = () =>
  createSelector(selectComments, (substate) => substate.comments);

export { makeSelectComments };
