import { apiType } from "../action/apiTodoAction";

const initialState = {
  data: null,
  isLoaded: false,
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case apiType.FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case apiType.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoaded: true,
        data: action.response,
      };
    case apiType.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default dataReducer;
