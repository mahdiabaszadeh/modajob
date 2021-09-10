import axios from "axios";
import { history } from "../router/index";
// import { logOut } from "routers/routing";
import { requestDidCatch } from "../store/actions/errorActions";
import store from "../store";
import { HTTP_DEFAULT_ERROR_MESSAGE } from "../utilities/constants/messages";
import getDefaultOptions from "./headerBuilder";

const ERROR_MESSAGE = [
  {
    type: 3,
    code: "",
    text: HTTP_DEFAULT_ERROR_MESSAGE,
    order: 0,
  },
];

const handleWarning = (messages = []) => {
  if (messages?.length > 0) {
    store.dispatch(requestDidCatch(messages));
  }
};

/**
 * @method handleError - dispatch into redux make hasError True
 * @param {string} error - response Error
 * @param {string} url - EndPoint of Error
 * [TODO] : [reza]:HTTP_DEFAULT_ERROR_MESSAGE must be translate on other langs
 */
const handleError = (error) => {
  const errorMessages = error?.response?.data?.messages ?? ERROR_MESSAGE;
  store.dispatch(requestDidCatch(errorMessages));
  if (axios.isCancel(error)) {
    store.dispatch({ type: "SET_LOADING", payload: { isLoading: false } });
    return error.message;
  }
};

// /**
//  *
//  * @returns
//  */
// const _logOut = () => {
//   history.push(`/login`);
//   logOut();
// };

/**
 *
 * @param {object} response
 * @returns response
 * @description this function is called on every single successful axios request
 */
export const onSuccessResponse = (response) => {
  if (response?.headers?.["unauthorized"]) {
    // _logOut();
  } else if (response?.data?.messages?.length) {
    handleWarning(response?.data?.messages);
  }
  return response;
};

/**
 *
 * @param {object} error
 * @returns
 */
export const onFailResponse = (error) => {
  if (error?.response?.headers?.["unauthorized"]) {
    // _logOut();
  } else {
    handleError(error);
  }
  return Promise.reject(error);
};

/**
 *
 * @param {object} config
 * @returns config
 * @description this function is called by axios on every single successful request (before making request)
 * we check the token here if the life is expired the new token will be asked from the server then inserted in the header
 */
export const onSuccessRequest = async (config) => {
  const data = await getDefaultOptions();
  config.headers = data.headers;
  return config;
};
