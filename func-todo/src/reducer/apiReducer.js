import { initialState } from "./todoReducer";
import { apiType } from "../action/apiTodoAction";

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case apiType.FETCH_TODO_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case apiType.FETCH_TODO_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default apiReducer;
