import { type } from "../reducer/todoReducer";

export const statusTodo = (id) => {
  return {
    type: type.STATUS_TODO,
    payload: id,
  };
};
