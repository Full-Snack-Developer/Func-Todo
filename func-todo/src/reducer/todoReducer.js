import { FILTER } from "./filterReducer";
import {apiType} from "../action/apiTodoAction"

export const type = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  EDIT_TODO: "EDIT_TODO",
  STATUS_TODO: "STATUS_TODO",
};

export const initialState = {
  list: [],
  filter: FILTER.ALL,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case apiType.FETCH_TODO_DATA_SUCCESS:
      return {
        ...state,
        list: [...state.list, ...action.payload],
      }
  
    case type.ADD_TODO:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case type.DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((todo) => todo.id !== action.payload),
      };

    case type.STATUS_TODO:
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.payload ? { ...todo, status: !todo.status } : todo
        ),
      };

    case type.EDIT_TODO:
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };

    default:
      return state;
  }
};
export default todoReducer;
