import { type } from "../reducer/todoReducer";

export const editTodo = (updatedTodo) => {
  return {
    type: type.EDIT_TODO,
    payload: updatedTodo,
  };
};
