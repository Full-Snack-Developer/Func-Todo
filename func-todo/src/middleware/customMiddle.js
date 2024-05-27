export const apiMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }

  const { types, callAPI, shouldCallAPI = () => true, payload = {} } = action;

  if (!types) {
    return next(action);
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error("Expected an array of three action types.");
  }

  if (typeof callAPI !== "function") {
    throw new Error("Expected callAPI to be a function.");
  }

  if (!shouldCallAPI(store.getState())) {
    return;
  }

  const [requestType, successType, failureType] = types;

  next({ ...payload, type: requestType });

  return callAPI().then(
    (response) => next({ ...payload, response, type: successType }),
    (error) => next({ ...payload, error, type: failureType })
  );
};
