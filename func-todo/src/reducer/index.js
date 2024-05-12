import addTodoReducer from "./addTodoReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  addTodo: addTodoReducer,
});

export default rootReducer;
