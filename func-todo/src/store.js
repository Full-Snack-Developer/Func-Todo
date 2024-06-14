import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer";
import rootSaga from "./saga/rootSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
