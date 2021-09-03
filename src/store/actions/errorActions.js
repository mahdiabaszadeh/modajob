import {
    REQUEST_DID_CATCH,
    REQUEST_DISMISS_CATCH,
  } from "../constants/errorConstants";
  
  export const requestDidCatch = (payload) => ({
    type: REQUEST_DID_CATCH,
    payload,
  });
  
  export const requestDismissCatch = (payload) => ({
    type: REQUEST_DISMISS_CATCH,
    payload,
  });
  