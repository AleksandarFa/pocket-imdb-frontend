import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import createReducer from "./reducer";
import rootSaga from "./sagas";

import history from "../utils/history";

let composeEnhancers = compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const enhancers = [applyMiddleware(...middlewares)];

const store = createStore(createReducer, {}, composeEnhancers(...enhancers));

sagaMiddleware.run(rootSaga);
window.store = store;
export default store;
