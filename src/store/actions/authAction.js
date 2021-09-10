import {
  LOGIN,
  LOGOUT,
  START_LOGIN,
  START_LOGOUT,
} from "../constants/authAction.js";

export const login = (uid) => ({
  type: LOGIN,
  uid,
});
export const startLogin = () => ({
  type: START_LOGIN,
});
export const logout = (uid) => ({
  type: LOGOUT,
  uid,
});
export const startLogout = () => ({
  type: START_LOGOUT,
});
