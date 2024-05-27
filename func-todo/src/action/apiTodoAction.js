export const apiType = {
  FETCH_DATA_REQUEST: "FETCH_DATA_REQUEST",
  FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
  FETCH_DATA_FAILURE: "FETCH_DATA_FAILURE",
};

export const fetchData = () => ({
  types: [
    apiType.FETCH_DATA_REQUEST,
    apiType.FETCH_DATA_SUCCESS,
    apiType.FETCH_DATA_FAILURE,
  ],
  callAPI: () =>
    fetch("https://664f7068ec9b4a4a602ecbcc.mockapi.io/listTodo").then(
      (response) => response.json()
    ),
  shouldCallAPI: (state) => {
    return !state.data.isLoaded;
  },
  payload: {},
});
