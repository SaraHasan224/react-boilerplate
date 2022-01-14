import axios from "axios";
// import history from "./history";
import {
  CONSTANTS,
  LOCAL_STORAGE_SERVICE,
  history,
  HELPER
} from "../../utils";

// // axios.defaults.baseURL = url;
var mainInstance = axios.create({
  // `timeout` specifies the number of milliseconds before the request times out.
  // If the request takes longer than `timeout`, the request will be aborted.
  // timeout: 120000, // default is `0` (no timeout)
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

const makeRequest = (instance) => (
  method,
  url,
  token,
  allow_error_pages,
  ...params
) => {
  const locale = LOCAL_STORAGE_SERVICE._getFromLocalStorage("locale")
  // Set Language Headers
  mainInstance.defaults.headers.common["Accept-Language"] = HELPER.isNotEmpty(locale) ? locale : "en";
  // Set Access token
  const access_token = LOCAL_STORAGE_SERVICE._getAccessTokenFromSession();
  if (access_token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
    mainInstance.defaults.headers.common["Authorization"] =
      "Bearer " + access_token;
  }

  if (!token) {
    delete axios.defaults.headers.common["Authorization"];
    delete mainInstance.defaults.headers.common["Authorization"];
  }
  // Add a response interceptor
  instance.interceptors.response.use(
    (response) => {
      // trigger 'loading=false' event here
      return Promise.resolve(response);
    },
    (error) => {
      // trigger 'loading=false' event here
      if (
        error?.response?.status === CONSTANTS.HTTP_RESPONSE.UNAUTHORIZED &&
        allow_error_pages
      ) {
        history.push("/401");
      } else {
        return Promise.reject(error);
      }
    }
  );
  return instance[method](url, ...params);
};

const API_REQUEST = (method, url, token, allow_error_pages) => (...params) => {
  return makeRequest(mainInstance)(
    method,
    url,
    token,
    allow_error_pages,
    ...params
  );
};
export default API_REQUEST;
