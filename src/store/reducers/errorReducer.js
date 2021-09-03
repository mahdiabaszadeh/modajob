import { sortBy } from "lodash";
import {
  REQUEST_DID_CATCH,
  REQUEST_DISMISS_CATCH,
} from "../constants/errorConstants";

const initState = {
  hasError: false,
  errors: [],
};

const errorReducer = (state = initState, action) => {
  let newState = state;
  let temp = [];
  switch (action.type) {
    case REQUEST_DID_CATCH:
      temp = sortBy([...state.errors, ...action.payload], "order");
      newState = {
        ...state,
        hasError: true,
        errors: temp,
      };
      break;

    case REQUEST_DISMISS_CATCH: {
      temp = state.errors.filter((error) => error.order !== action.payload);
      newState = {
        ...state,
        hasError: temp.length > 0,
        errors: temp,
      };
      break;
    }
    default:
      break;
  }
  return newState;
};
export default errorReducer;
