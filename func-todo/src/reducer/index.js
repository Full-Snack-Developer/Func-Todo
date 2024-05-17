import filterReducer from "./filterReducer";
import todoReducer from "./todoReducer";
import paginationReducer from "./paginationReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducer: todoReducer,
  filterReducer: filterReducer,
  paginationReducer: paginationReducer,
});

export default rootReducer;
