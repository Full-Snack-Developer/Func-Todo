import { initialState } from "./todoReducer";

export const FILTER = {
  ALL: "ALL",
  DONE: "DONE",
  DOING: "DOING",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER.ALL:
      return {
        ...state,
        filter: FILTER.ALL,
      };
    case FILTER.DONE:
      return {
        ...state,
        filter: FILTER.DONE,
      };
    case FILTER.DOING:
      return {
        ...state,
        filter: FILTER.DOING,
      };
    default:
      return state;
  }
};

export default filterReducer;
