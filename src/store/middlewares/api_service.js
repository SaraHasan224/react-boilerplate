import axios from "axios";
import {
  LOCAL_STORAGE_SERVICE,
  history,
  API_REQUEST,
  API_ENDPOINTS,
  CONSTANTS
} from "../../utils";
const baseURL = process.env.REACT_APP_API_URL;

export const apiService = {
  // ORDER INITIATE
  verifyClientAcessToken,
  verifyCatalogOrder,
  identifyCustomer,
  // META DATA
  getMetaData,
  getCountryDropdownList,
  getAllNetworks,
  // OTP
  verifyOtp,
  resendOtp,
  sendOtp,
  sendOtpAfterCheckout,
  // Addresses
  getAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
  getAddressDropdownByCustomerId,
  getLocationDetails,
  // PAYMENT METHODS
  getPaymentMethods,
  setPaymentMethod,
  validatePaymentMethod,
  deleteCreditCard,
  setDefaultPaymentMethod,
  getNIFTDetails,
  submitNIFTResponse,
  getQisstPayPaymentInstrument,
  savePaymentInstrument,
  // SHIPPING METHODS
  getShippingMethods,
  setShippingMethod,
  // CART
  getCartdetail,
  updateCartdetail,
  applyVoucher,
  // PROFILE
  getCustomerProfile,
  // ORDER
  updateOrderAddress,
  placeOrder,
  getPaymentInfo,
};

/*
 *ORDER INITIATE
 */

async function verifyClientAcessToken(requestData) {
  let response = await API_REQUEST(
    "post",
    `${baseURL}` + API_ENDPOINTS.INITIATE_ORDER,
    false,
    true
  )(requestData);
  return response;
}

async function verifyCatalogOrder(product_reference) {
  let response = await API_REQUEST(
    "get",
    `${baseURL}` +
      API_ENDPOINTS.INITIATE_CATLOG_ORDER +
      "/" +
      product_reference,
    false,
    true
  )();
  return response;
}

async function identifyCustomer(requestData) {
  let response = await API_REQUEST(
    "post",
    `${baseURL}` + API_ENDPOINTS.IDENTIFY_CUSTOMER,
    true,
    false
  )(requestData);
  return response;
}

/*
 *META DATA APIS
 */
async function getMetaData() {
  let response = await API_REQUEST(
    "get",
    `${baseURL}` + API_ENDPOINTS.GET_META,
    true,
    true
  )();
  return response;
}

async function getCountryDropdownList() {
  let response = await API_REQUEST(
    "get",
    `${baseURL}` + API_ENDPOINTS.GET_COUNTRY_DROPDOWN_LIST,
    false,
    true
  )();
  return response;
}

async function getAllNetworks(requestData) {
  let response = await API_REQUEST(
    "post",
    `${baseURL}` + API_ENDPOINTS.GET_ALL_NETWORKS,
    true,
    true
  )(requestData);
  return response;
}

/*
 * OTP
 */
async function verifyOtp(requestData) {
  let response = await API_REQUEST(
    "post",
    `${baseURL}` + API_ENDPOINTS.OTP_VERIFY,
    true,
    true
  )(requestData);
  return response;
}

async function resendOtp(requestData) {
  let response = await API_REQUEST(
    "post",
    `${baseURL}` + API_ENDPOINTS.OTP_RESEND,
    true,
    true
  )(requestData);
  return response;
}
async function sendOtp(requestData) {
  let response = await API_REQUEST(
    "post",
    `${baseURL}` + API_ENDPOINTS.OTP_SEND,
    true,
    true
  )(requestData);
  return response;
}

async function sendOtpAfterCheckout(requestData) {
  let response = await API_REQUEST(
    "post",
    `${baseURL}` + API_ENDPOINTS.CHECKOUT_OTP_SEND,
    true,
    true
  )(requestData);
  return response;
}

/*
 * Addresses
 */

async function addAddress(requestData) {
  let response = await API_REQUEST(
    "post",
    `${baseURL}` + API_ENDPOINTS.ADD_ADDRESS,
    true,
    true
  )(requestData);
  return response;
}

async function updateAddress(requestData) {
  let response = await API_REQUEST(
    "put",
    `${baseURL}` + API_ENDPOINTS.UPDATE_ADDRESS,
    true,
    true
  )(requestData);
  return response;
}

async function deleteAddress(requestData) {
  const access_token = LOCAL_STORAGE_SERVICE._getAccessTokenFromSession();
  let axiosrequest = axios
    .delete(`${baseURL}` + API_ENDPOINTS.DELETE_ADDRESS, {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": LOCAL_STORAGE_SERVICE._getFromLocalStorage("locale"),
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + access_token,
      },
      data: requestData,
    })
    .then(
      (response) => {
        return Promise.resolve(response);
      },
      (error) => {
        // trigger 'loading=false' event here
        if (error?.response?.status === CONSTANTS.HTTP_RESPONSE.UNAUTHORIZED) {
          history.push("/401");
        } else if (
          error?.response?.status === CONSTANTS.HTTP_RESPONSE.SERVER_ERROR
        ) {
          history.push("/500");
        } else {
          return Promise.reject(error);
        }
      }
    );
  // let response = await API_REQUEST(
  //   "delete",
  //   `${baseURL}` + API_ENDPOINTS.DELETE_ADDRESS,
  //   true,
  //   true
  // )(requestData);
  return axiosrequest;
}

async function getAddressDropdownByCustomerId(requestData) {
  let response = await API_REQUEST(
    "post",
    `${baseURL}` + API_ENDPOINTS.GET_ADDRESS_DROPDOWN_BY_CUSTOMER_ID,
    true,
    true
  )(requestData);
  return response;
}

async function getLocationDetails(requestData) {
  let response = await API_REQUEST(
    "post",
    `${baseURL}` + API_ENDPOINTS.GET_LOCATION_DETAILS,
    true,
    true
  )(requestData);
  return response;
}

async function getAddresses(requestData) {
  let response = await API_REQUEST(
    "get",
    `${baseURL}` + API_ENDPOINTS.GET_ADDRESS,
    true,
    true
  )(requestData);
  return response;
}

/*
 * PAYMENT METHODS
 */
async function getPaymentMethods() {
  let response = await API_REQUEST(
    "get",
    `${baseURL}` + API_ENDPOINTS.GET_ALL_PAYMENT_METHODS,
    true,
    true
  )();
  return response;
}
async function setPaymentMethod(requestData) {
  let response = await API_REQUEST(
    "put",
    `${baseURL}` + API_ENDPOINTS.SET_PAYMENT_METHOD,
    true,
    true
  )(requestData);
  return response;
}

async function setDefaultPaymentMethod(requestData) {
  let response = await API_REQUEST(
    "post",
    `${baseURL}` + API_ENDPOINTS.SET_DEFAULT_PAYMENT_METHOD,
    true,
    true
  )(requestData);
  return response;
}

async function getNIFTDetails() {
  let response = await API_REQUEST(
    "get",
    `${baseURL}` + API_ENDPOINTS.PAYMENT_PROCESSOR_DETAIL,
    true,
    true
  )();
  return response;
}

async function submitNIFTResponse(requestData) {
  let response = await API_REQUEST(
    "post",
    `${baseURL}` + API_ENDPOINTS.POST_NIFT_RESPONSE,
    true,
    true
  )(requestData);
  return response;
}

async function getQisstPayPaymentInstrument() {
  let response = await API_REQUEST(
    "get",
    `${baseURL}` + API_ENDPOINTS.PAYMENT_PROCESSOR_DETAIL,
    true,
    true
  )();
  return response;
}

async function savePaymentInstrument(requestData) {
  let response = await API_REQUEST(
    "post",
    `${baseURL}` + API_ENDPOINTS.SAVE_PAYMENT_INSTRUMENT,
    true,
    false
  )(requestData);
  return response;
}

async function validatePaymentMethod(requestData) {
  let response = await API_REQUEST(
    "post",
    `${baseURL}` + API_ENDPOINTS.VALIDATE_PAYMENT_METHOD,
    true,
    true
  )(requestData);
  return response;
}

async function deleteCreditCard(requestData) {
  const access_token = LOCAL_STORAGE_SERVICE._getAccessTokenFromSession();
  let axiosrequest = axios
    .delete(`${baseURL}` + API_ENDPOINTS.DELETE_SAVED_CARD, {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": LOCAL_STORAGE_SERVICE._getFromLocalStorage("locale"),
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + access_token,
      },
      data: requestData,
    })
    .then(
      (response) => {
        return Promise.resolve(response);
      },
      (error) => {
        // trigger 'loading=false' event here
        if (error?.response?.status === CONSTANTS.HTTP_RESPONSE.UNAUTHORIZED) {
          history.push("/401");
        } else if (
          error?.response?.status === CONSTANTS.HTTP_RESPONSE.SERVER_ERROR
        ) {
          history.push("/500");
        } else {
          return Promise.reject(error);
        }
      }
    );
  // let response = await API_REQUEST(
  //   "delete",
  //   `${baseURL}` + API_ENDPOINTS.DELETE_ADDRESS,
  //   true,
  //   true
  // )(requestData);
  return axiosrequest;
}
/*
 * SHIPPING METHODS
 */
async function getShippingMethods() {
  let response = await API_REQUEST(
    "get",
    `${baseURL}` + API_ENDPOINTS.GET_ALL_SHIPMENT_METHODS,
    true,
    true
  )();
  return response;
}
async function setShippingMethod(requestData) {
  let response = await API_REQUEST(
    "put",
    `${baseURL}` + API_ENDPOINTS.SET_SHIPMENT_METHOD,
    true,
    true
  )(requestData);
  return response;
}
/*
 * CART
 */
async function getCartdetail() {
  let response = await API_REQUEST(
    "get",
    `${baseURL}` + API_ENDPOINTS.GET_CART_DETAILS,
    true,
    true
  )();
  return response;
}

async function updateCartdetail() {
  let response = await API_REQUEST(
    "get",
    `${baseURL}` + API_ENDPOINTS.UPDATE_CART_ITEMS,
    true,
    true
  )();
  return response;
}

async function applyVoucher(requestData) {
  let response = await API_REQUEST(
    "post",
    `${baseURL}` + API_ENDPOINTS.APPLY_VOUCHER,
    true,
    true
  )(requestData);
  return response;
}

/*
 * PROFILE
 */

async function getCustomerProfile() {
  let response = await API_REQUEST(
    "get",
    `${baseURL}` + API_ENDPOINTS.CUSTOMER_PROFILE,
    true,
    true
  )();
  return response;
}
/*
 * ORDER
 */
async function updateOrderAddress(requestData) {
  let response = await API_REQUEST(
    "put",
    `${baseURL}` + API_ENDPOINTS.UPDATE_ORDER_ADDRESS,
    true,
    true
  )(requestData);
  return response;
}

async function placeOrder(requestData) {
  let response = await API_REQUEST(
    "post",
    `${baseURL}` + API_ENDPOINTS.PLACE_ORDER,
    true,
    true
  )(requestData);
  return response;
}

async function getPaymentInfo(requestData) {
  let response = await API_REQUEST(
    "post",
    `${baseURL}` + API_ENDPOINTS.GET_PAYMENT_INFO,
    true,
    true
  )(requestData);
  return response;
}
