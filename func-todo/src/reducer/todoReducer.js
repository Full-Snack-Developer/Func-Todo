import { FILTER } from "./filterReducer";

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
    case type.ADD_TODO:
      const addList = [...state.list];
      addList.push(action.payload);
      return {
        ...state,
        list: addList,
      };

    case type.DELETE_TODO:
      const deleteList = state.list.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        list: deleteList,
      };

    case type.STATUS_TODO:
      const statusList = state.list.map((todo) =>
        todo.id === action.payload ? { ...todo, status: !todo.status } : todo
      );
      return {
        ...state,
        list: statusList,
      };

    case type.EDIT_TODO:
      const editList = state.list.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      return {
        ...state,
        list: editList,
      };

    default:
      return state;
  }
};
export default todoReducer;
