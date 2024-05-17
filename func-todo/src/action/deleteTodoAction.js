import { type } from "../reducer/todoReducer";

export const deleteTodo = (id) => {
  return {
    type: type.DELETE_TODO,
    payload: id,
  };
};
