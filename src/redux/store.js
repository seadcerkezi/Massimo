import { createStore, applyMiddleware } from "redux";
import rootReducer from "../rootReducer";
import { localStorageMiddleware } from "./localStorageMiddleware";

// Load the initial state from local storage
const initialState = JSON.parse(localStorage.getItem("myAppReduxState")) || {}; // Corrected this line

// Create the Redux store with the middleware
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(localStorageMiddleware)
);

export default store;
