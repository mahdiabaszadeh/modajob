/** @format */

import axios from "axios";
import { onFailResponse, onSuccessRequest, onSuccessResponse } from "./utility";

const CancelToken = axios.CancelToken;
const baseURL = "http://185.208.175.209:3300/";
console.log(baseURL);
const instance = axios.create({ baseURL: baseURL });

instance.interceptors.request.use(onSuccessRequest);

//on successful response
instance.interceptors.response.use(onSuccessResponse, onFailResponse);

export default class HttpHandler {
  constructor() {
    this.preUrl = baseURL;
  }

  /**
   * @async
   * @method get - HTTP Request GET Method
   * @param {string} url - End Point Address
   * @param {object} options - Request Option (Headers and etc)
   */
  async get(url, options) {
    try {
      const response = await axios.get(`${this.preUrl}${url}`, options);
      return response;
    } catch (error) {
      return error;
    }
  }

  /**
   * @async
   * @method delete - HTTP Request DELETE Method
   * @param {string} url - End Point Address
   * @param {object} options - Request Option (Headers and etc)
   */
  async delete(url, options) {
    try {
      const data = options &&
        Object.keys(options).length && {
          data: {
            ...options,
          },
        };

      const response = await axios.delete(`${this.preUrl}${url}`, data);

      return response;
    } catch (error) {
      return error;
    }
  }

  /**
   * @async
   * @method post - HTTP Request POST Method
   * @param {string} url - End Point Address
   * @param {any} params - Any Data Send To Server
   * @param {object} options - Request Option (Headers and etc)
   * @param {function} setCancelTokenSourceState this will be called before the actual request with cancel token of the current request as parameter ( we will use this token to cancel the request)
   */
  async post(url, params, options, setCancelTokenSource) {
    try {
      const source = CancelToken.source();
      setCancelTokenSource && setCancelTokenSource(source);
      const response = await axios.post(`${this.preUrl}${url}`, params, {
        cancelToken: source.token,
      });

      return response;
    } catch (error) {
      return error;
    }
  }
  /**
   * @async
   * @method put - HTTP Request PUT Method
   * @param {string} url - End Point Address
   * @param {any} params - Any Data Send To Server
   * @param {object} options - Request Option (Headers and etc)
   */
  async put(url, params, options) {
    try {
      const response = await axios.put(`${this.preUrl}${url}`, params);

      return response;
    } catch (error) {
      return error;
    }
  }
}
