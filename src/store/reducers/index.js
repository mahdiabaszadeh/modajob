import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
const reducers = combineReducers({
  errorReducer,
});

export default reducers;
