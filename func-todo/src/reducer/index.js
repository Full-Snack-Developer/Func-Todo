import filterReducer from "./filterReducer";
import todoReducer from "./todoReducer";
import apiReducer from "./apiReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducer: todoReducer,
  filterReducer: filterReducer,
  apiReducer: apiReducer,
});

export default rootReducer;
