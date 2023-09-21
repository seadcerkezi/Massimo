import { combineReducers } from "redux";
import cardReducer from "./redux/card/cardReducer";

const rootReducer = combineReducers({
  card: cardReducer,
});

export default rootReducer;
