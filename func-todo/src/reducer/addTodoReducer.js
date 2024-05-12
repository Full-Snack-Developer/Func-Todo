import { combineReducers } from "redux";

const initialState = {
  list: [],
};

const addTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
      };

    default:
      return state;
  }
};
export default addTodoReducer;
