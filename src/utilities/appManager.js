import httpService from "../services/httpServices";

export const http = new httpService();
const SUCCESS = 200;
/** getItem for local storage, if use decode parse value  */
export function getStorage(key, decode) {
  try {
    var val = localStorage.getItem(key);
    if (!val) return null;
    if (decode) return JSON.parse(val);
    else return val;
  } catch (error) {
    return null;
  }
}

/** setItem for local storage, if use encode stringify value  */
export function setStorage(key, value, encode) {
  try {
    var val = value;
    if (encode) val = JSON.stringify(val);
    return localStorage.setItem(key, val);
  } catch (error) {
    return null;
  }
}

/**
 * @async
 * @function postRequestToServer - HTTP Request Method POST
 * @param {string} address - Request EndPoint Address
 * @param {any} dataEntry - Any Data Send To Server
 * @param {function} onRequest - Pre Request Function Called
 * @param {function} onSuccess - Fired On Success Request
 * @param {function} onFailed - Fired On Failed Request
 * @param {any} distinguishing - this data return when request success or fail as argument
 * @param {function} setCancelTokenSource - this function will set the cancel token for the caller ( module, component)
 */
export const postRequestToServer = async (
  address,
  dataEntry,
  onRequest,
  onSuccess,
  onFailed,
  distinguishing,
  setCancelTokenSource
) => {
  onRequest && onRequest();
  const response = await http.post(address, dataEntry, (a, b) => {
    console.log(a, b);
  });
  if (response.status === SUCCESS)
    return (
      onSuccess && onSuccess(response.data, distinguishing && distinguishing)
    );
  else if (response.status === 499) {
    return;
  }
  return onFailed && onFailed(response, distinguishing && distinguishing);
};

/**
 * @async
 * @function postRequestToServer - HTTP Request Method POST
 * @param {string} address - Request EndPoint Address
 * @param {any} dataEntry - Any Data Send To Server
 * @param {function} onRequest - Pre Request Function Called
 * @param {function} onSuccess - Fired On Success Request
 * @param {function} onFailed - Fired On Failed Request
 * @param {any} distinguishing - this data return when request success or fail as argument
 * @param {function} setCancelTokenSource - this function will set the cancel token for the caller ( module, component)
 */
export const getRequestToServer = async (
  address,
  onRequest,
  onSuccess,
  onFailed,
  distinguishing,
  setCancelTokenSource
) => {
  onRequest && onRequest();
  const response = await http.get(address);
  console.log(response);
  if (response.status === SUCCESS)
    return (
      onSuccess && onSuccess(response.data, distinguishing && distinguishing)
    );
  else if (response.status === 499) {
    return;
  }
  return onFailed && onFailed(response, distinguishing && distinguishing);
};
