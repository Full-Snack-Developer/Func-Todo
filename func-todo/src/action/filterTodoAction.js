import { FILTER } from "../reducer/filterReducer";

export const filterTodo = (filter) => {
  return {
    type: filter,
    payload: filter,
  };
};
