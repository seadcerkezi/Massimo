export const localStorageMiddleware = (store) => (next) => (action) => {
  // Invoke the next middleware or the dispatch function
  const result = next(action);

  // Save the current state to local storage
  localStorage.setItem("myAppReduxState", JSON.stringify(store.getState()));

  return result;
};
