/** @format */

import { getStorage, setStorage } from "../utilities/appManager";
import moment from "moment";
import { REFRESH_TOKEN } from "../utilities/constants/api";
import {
  getDefaultLocationID,
  getDefaultLanguageID,
  logOut,
  DATE_FORMAT,
} from "../router/routing";
import { CURRENT_USER, SETTINGS } from "../utilities/constants/localstorage";
import { getDeviceType } from "../utilities/helpers/generalHelper";
import { history } from "../router/index";

const baseURL =
  // process.env.REACT_APP_BASE_URL ||
  "http://185.208.175.209:3300/" ||
  document.getElementsByTagName("base")[0].getAttribute("href");

/**
 * log out user
 * @param {string} token
 * @param {string} refreshToken
 */
const _logOut = () => {
  setStorage(CURRENT_USER, null, true);
  const currentPath = history.location.pathname + history.location.search;
  if (history.pushState && typeof history.pushState == "function")
    history.pushState({ pathname: "/login", from: currentPath });
  return logOut();
};

/**
 * request to server for refreshing token
 * @param {string} token
 * @param {string} refreshToken
 */
const _onRefreshToken = (token, refreshToken) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  };
  const params = {
    currentToken: token,
    refreshToken: refreshToken,
  };
  // we can't use axios here because the interceptor caus a infinite loop
  const response = fetch(`${baseURL}${REFRESH_TOKEN}`, {
    ...options,
    body: JSON.stringify(params),
  }).then((res) => res.json());
  return response;
};

/**
 * A function for choosing the token
 */
const _getRefreshToken = async () => {
  var user = getStorage(CURRENT_USER, true);
  const token = user && user.token;
  if (token) {
    var settings = getStorage(SETTINGS, true);
    const refreshToken = user && user.refreshToken;
    const refreshTokenExpiredTime =
      user && user.refreshTokenExpiresAfterMinutes;
    const tokenExpiredTime = user && user.tokenExpiresAfterMinutes;
    const now = moment().format(DATE_FORMAT);
    const differentTime = moment(now, DATE_FORMAT).diff(
      moment(settings.generationTime, DATE_FORMAT),
      "minutes"
    );

    if (
      differentTime >= refreshTokenExpiredTime &&
      differentTime < tokenExpiredTime
    ) {
      try {
        const response = await _onRefreshToken(token, refreshToken);
        user.token = response.token;
        user.refreshToken = response.refreshToken;
        if (response.refreshTokenExpiresAfterMinutes)
          user.refreshTokenExpiresAfterMinutes =
            response.refreshTokenExpiresAfterMinutes;
        if (response.tokenExpiresAfterMinutes)
          user.tokenExpiresAfterMinutes = response.tokenExpiresAfterMinutes;
        setStorage(CURRENT_USER, user, true);
        settings.generationTime = moment().format(DATE_FORMAT);
        setStorage(SETTINGS, settings, true);
        return `Bearer ${response.token}`;
      } catch {
        return _logOut();
      }
    } else if (differentTime >= tokenExpiredTime) {
      return _logOut();
    } else return `Bearer ${token}`;
  }
  return "";
};

const getDefaultOptions = async (options) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "X-Frame-Options": "DENY",
      Authorization: await _getRefreshToken(),
      Language: getDefaultLanguageID(),
      Location: getDefaultLocationID(),
      DeviceType: getDeviceType(),
      ...options,
    },
  };
  return config;
};

export default getDefaultOptions;
