import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducer";
import rootSaga from "./saga/rootSaga";
import createSagaMiddleware from "redux-saga";
import { configureStore } from '@reduxjs/toolkit'


const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

// const store = configureStore({rootReducer, applyMiddleware(sagaMiddleware), devTools: process.env.NODE_ENV !== 'production'});

const store = configureStore({
    reducer : rootReducer ,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production', // cái này tham khảo, dùng để xem state reducer , dòng này kích hoạt redux devtools
  });

sagaMiddleware.run(rootSaga);
export default store;
