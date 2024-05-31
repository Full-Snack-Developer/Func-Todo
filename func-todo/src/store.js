import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer";
import asyncMiddleware from "./middleware/customMiddle";

const store = createStore(rootReducer);
export default store;
