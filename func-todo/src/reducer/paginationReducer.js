import { initialState } from "./todoReducer";

export const panigationType = {
  LOAD_MORE: "LOAD_MORE",
};

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case panigationType.LOAD_MORE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: state.pagination.page + 1,
        },
      };
    default:
      return state;
  }
};

export default paginationReducer;
