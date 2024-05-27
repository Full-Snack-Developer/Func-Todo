import { type } from "../reducer/todoReducer";
import { postData } from "../API/todoData";
export const addTodo = (newTodo) => {
  return {
    type: type.ADD_TODO,
    payload: newTodo,
  };
};
