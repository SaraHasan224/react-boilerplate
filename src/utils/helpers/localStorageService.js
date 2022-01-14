import { HELPER } from "../../utils";
import Cookies from "universal-cookie";

const cookies = new Cookies();
// Set expiry time
var days = parseInt(process.env.REACT_APP_COOKIE_EXPIRY);
var expiry = new Date();
expiry.setDate(expiry.getDate() + days);

const cookieSettings = {
  path: "/",
  // httpOnly: true,
  expires: expiry,
  secure: true,
  domain: process.env.REACT_APP_SUB_DOMAIN_URL,
  sameSite: "lax", // A String, with possible values lax or strict, prevents the browser from sending cookie along with cross-site requests.
};

var _service;
function _getService() {
  if (!_service) {
    _service = this;
    return _service;
  }
  return _service;
}
/**
 *
 * COOKIE STORAGE SERVICE
 */

function _getAccessToken() {
  return cookies.get("_access_token");
}
function _getAccessTokenFromSession() {
  const sessionAT = sessionStorage.getItem("_access_token");
  const cookiesAT = cookies.get("_access_token");
  return HELPER.isNotEmpty(sessionAT) ? sessionAT : cookiesAT;
}
function _updateAccessToken(access_token) {
  sessionStorage.setItem("_access_token", access_token);
  cookies.set("_access_token", access_token, cookieSettings);
}
function _removeAccessToken() {
  sessionStorage.removeItem("_access_token");
  if (cookies.get("_access_token") !== undefined) {
    return cookies.remove("_access_token", cookieSettings);
  }
}

function _saveToCookieStorage(key, value) {
  cookies.set(key, value, cookieSettings);
}

function _updateInCookieStorage(key, value) {
  cookies.set(key, value, cookieSettings);
}

function _getFromCookieStorage(token) {
  return cookies.get(token);
}

function _deleteFromCookieStorage(key) {
  cookies.remove(key, cookieSettings);
}

/**
 *
 * LOCAL STORAGE SERVICE
 */
function _saveToSessionStorage(key, value) {
  sessionStorage.setItem(key, value);
}

function _getFromSessionStorage(key) {
  return sessionStorage.getItem(key);
}

function _updateInSessionStorage(key, value) {
  sessionStorage.setItem(key, value);
}

function _deleteFromSessionStorage(key) {
  sessionStorage.removeItem(key);
}
function _clearSessionStorage() {
  sessionStorage.clear();
}
/**
 *
 * LOCAL STORAGE SERVICE
 */
function _saveToLocalStorage(key, value) {
  sessionStorage.setItem(key, value);
  // localStorage.setItem(key, value);
}

function _getFromLocalStorage(key) {
  return sessionStorage.getItem(key);
  // return localStorage.getItem(key);
}

function _updateInLocalStorage(key, value) {
  sessionStorage.setItem(key, value);
}

function _deleteFromLocalStorage(key) {
  sessionStorage.removeItem(key);
  localStorage.removeItem(key);
}
function _clearLocalStorage() {
  localStorage.clear();
  // localStorage.clear();
}

function _nextScreen() {
  const screen = parseInt(LOCAL_STORAGE_SERVICE._getFromLocalStorage("screen"));
  LOCAL_STORAGE_SERVICE._updateInLocalStorage("screen", screen + 1);
}

function _PreviousScreen() {
  const screen = parseInt(LOCAL_STORAGE_SERVICE._getFromLocalStorage("screen"));
  LOCAL_STORAGE_SERVICE._updateInLocalStorage("screen", screen - 1);
  return true;
}

function _isFirstScreen() {
  const screen = parseInt(LOCAL_STORAGE_SERVICE._getFromLocalStorage("screen"));
  var value = screen === 1 ? true : false;
  return value;
}

function _setFirstScreen() {
  LOCAL_STORAGE_SERVICE._updateInLocalStorage("screen", 1);
  return true;
}

function _getTimer(timer) {
  return Date.now()+ HELPER.isNotEmpty(timer) ? timer : 0;
}

export const LOCAL_STORAGE_SERVICE = {
  _getService,
  _getAccessToken,
  _getAccessTokenFromSession,
  _updateAccessToken,
  _removeAccessToken,
  _saveToCookieStorage,
  _getFromCookieStorage,
  _updateInCookieStorage,
  _deleteFromCookieStorage,
  _saveToSessionStorage,
  _getFromSessionStorage,
  _updateInSessionStorage,
  _deleteFromSessionStorage,
  _clearSessionStorage,
  _saveToLocalStorage,
  _getFromLocalStorage,
  _updateInLocalStorage,
  _deleteFromLocalStorage,
  _clearLocalStorage,
  _nextScreen,
  _PreviousScreen,
  _isFirstScreen,
  _setFirstScreen,
  _getTimer,
};
