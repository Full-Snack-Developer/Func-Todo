import { getData } from "../API/todoData";

export const apiType = {
  FETCH_TODO_DATA_SUCCESS: "FETCH_TODO_DATA_SUCCESS",
  FETCH_TODO_DATA_FAILURE: "FETCH_TODO_DATA_FAILURE",
  FETCH_TODO_DATA: "FETCH_TODO_DATA"
};

export const fetchTodoDataSuccess = () => ({
  type: apiType.FETCH_TODO_DATA,
});

// export const fetchTodoDataFailure = (error) => ({
//   type: apiType.FETCH_TODO_DATA_FAILURE,
//   payload: error,
// });

// export const fetchTodoData = async () => {
//   return await getData()
//     .then((response) => {
//       return {
//         type: apiType.FETCH_TODO_DATA_SUCCESS,
//         payload: response.data,
//       };
//     })
//     .catch((error) => {
//       return {
//         type: apiType.FETCH_TODO_DATA_FAILURE,
//         payload: error.message,
//       };
//     });
// };
