import { getData } from "../API/todoData";

export const apiType = {
  FETCH_TODO_DATA_SUCCESS: "FETCH_TODO_DATA_SUCCESS",
  FETCH_TODO_DATA_FAILURE: "FETCH_TODO_DATA_FAILURE",
};

export const fetchTodoDataSuccess = (data) => ({
  type: apiType.FETCH_TODO_DATA_SUCCESS,
  payload: data,
});

export const fetchTodoDataFailure = (error) => ({
  type: apiType.FETCH_TODO_DATA_FAILURE,
  payload: error,
});

export const fetchTodoData = () => {
  return getData()
    .then((response) => {
      return {
        type: apiType.FETCH_TODO_DATA_SUCCESS,
        payload: response.data,
      };
    })
    .catch((error) => {
      return {
        type: apiType.FETCH_TODO_DATA_FAILURE,
        payload: error.message,
      };
    });
};
