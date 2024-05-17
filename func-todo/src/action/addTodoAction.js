import { type } from "../reducer/todoReducer";

export const addTodo = (newTodo) => {
  return {
    type: type.ADD_TODO,
    payload: newTodo,
  };
};
