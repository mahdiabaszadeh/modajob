import { getStorage, setStorage } from "../utilities/appManager";
import { SETTINGS, CURRENT_USER } from "../utilities/constants/localstorage/index";

export const DATE_FORMAT = "DD-MM-YYYY HH:mm:ss";

export let settings = getStorage(SETTINGS, true)
  ? getStorage(SETTINGS, true)
  : {
      languages: [],
      locations: [],
      users: [],
      generationTime: null,
      currencySymbols: [],
    };

/** index of current address url */
export const index = () => {
    const user = getStorage(CURRENT_USER, true);
    const userCode = user && user.code;
    if (userCode) {
      const index =
        settings &&
        settings.users &&
        settings.users.findIndex((item) => item && item.code === userCode);
      return index;
    } else return -1;
  };


export const isLogin = () => {
    if (getStorage(SETTINGS) && getStorage(SETTINGS, true).users[index()]) {
      return true;
    }
    return false;
  };

  /** returns ID of default language for current user */
export const getDefaultLanguageID = () => {
  if (settings.users[index()] && settings.users[index()].language) {
    return settings.users[index()].language.id || "English";
  }
  return "English";
};

/** returns ID of default location for current user */
export const getDefaultLocationID = () => {
  if (settings.users[index()] && settings.users[index()].location) {
    return settings.users[index()].location.id || "";
  }
  return "";
};

export const logOut = () => {
  settings = {
    ...settings,
    users: [
      ...settings.users.slice(0, index()),
      ...settings.users.slice(index() + 1),
    ],
  };
  setStorage(SETTINGS, settings, true);
  setStorage(CURRENT_USER, null, true);
};