import { panigationType } from "../reducer/paginationReducer";

export const paginationTodo = (page, itemsPerPage) => ({
  type: panigationType.LOAD_MORE,
  payload: {
    page: page,
    itemsPerPage: itemsPerPage,
  },
});
