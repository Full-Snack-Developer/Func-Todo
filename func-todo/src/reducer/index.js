import filterReducer from "./filterReducer";
import todoReducer from "./todoReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducer: todoReducer,
  filterReducer: filterReducer,
});

export default rootReducer;
