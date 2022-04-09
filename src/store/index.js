/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import rootSaga from "./modules/rootSaga";
import rootReducer from "./modules/rootReducer";

import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

export default store;
