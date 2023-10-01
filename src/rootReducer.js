import { combineReducers } from "redux";
import cardReducer from "./redux/card/cardReducer";
import userReducer from "./redux/user/userReducer";

const rootReducer = combineReducers({
  card: cardReducer,
  user: userReducer,
});

export default rootReducer;
