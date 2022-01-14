import {
  ACTION_CONSTANTS,
  PAYMENT_CONSTANT,
  META_CONSTANTS,
  SHIPMENT_CONSTANTS,
  ADDRESS_CONSTANTS,
  CUSTOMER_CONSTANTS,
  CART_CONSTANTS,
  FORM_CONSTANTS,
  CONFIG_CONSTANTS,
  ERROR_CONSTANTS,
} from "../actionTypes";

import queryString from "query-string";
import {
  CONSTANTS,
  HELPER
} from "../../utils";

const initState = {
  showPageLoader: false,
  showBtnLoader: false,
  disableNextBtn: false,
  showBackBtnLoader: false,
  loadingStatus: 2.5,
  callProfileApi: false,
  placeOrder: false
};

// Save query string parameters
const params = queryString.parse(location.search);
const secure_id = params?.secure_id;

const loadingReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_CONSTANTS.ORDER_EXPIRED:
      return {
        ...state,
        showPageLoader: false,
        showBtnLoader: false,
        disableNextBtn: false,
        showBackBtnLoader: false,
      };
    case CART_CONSTANTS.DEVICE_FINGERPRINT_FOUND:
      return {
        ...state,
        showBtnLoader: false,
      };
    case CART_CONSTANTS.DEVICE_FINGERPRINT_ERROR:
      return {
        ...state,
        disableNextBtn: true,
      };
    case ERROR_CONSTANTS.ERROR:
      return {
        ...state,
        showPageLoader: false,
      };
    case CUSTOMER_CONSTANTS.PROFILE_FAILURE:
    case CONFIG_CONSTANTS.INITIATE_ORDER_SUCCESS: //hide loader on start page
      return {
        ...state,
        showPageLoader: false,
      };
    //META DATA CALL
    // State update for API: GET_META
    // GET v1/metadata
    case META_CONSTANTS.META_REQUEST:
      return {
        ...state,
        showPageLoader: true,
      };
    case META_CONSTANTS.META_SUCCESS:
      return {
        ...state,
        showPageLoader: false,
      };
    case META_CONSTANTS.META_FAILURE:
      return {
        ...state,
        showPageLoader: false,
      };
    //COUNTRY DROPDOWN LIST DATA CALL
    // State update for API: GET_COUNTRY_DROPDOWN_LIST
    // GET v1/countries-dropdown-list
    case META_CONSTANTS.COUNTRY_LIST_REQUEST:
      return {
        ...state,
        showPageLoader: true,
        loadingStatus: 10.75
      };
    case META_CONSTANTS.COUNTRY_LIST_SUCCESS:
      return {
        ...state,
        showPageLoader: false,
        loadingStatus: 15.25
      };
    case META_CONSTANTS.COUNTRY_LIST_FAILURE:
      return {
        ...state,
        showPageLoader: false,
        loadingStatus: 5.75
      };
    // State update for API: GET_META
    // GET v1/metadata
    case META_CONSTANTS.DEFAULT_META_REQUEST:
      return {
        ...state,
        showPageLoader: true,
      };
    case META_CONSTANTS.DEFAULT_META_SUCCESS:
      return {
        ...state,
        showPageLoader: false,
      };
    case META_CONSTANTS.DEFAULT_META_FAILURE:
      return {
        ...state,
        showPageLoader: false,
      };
    case CUSTOMER_CONSTANTS.PHONE_NUMBER_CHANGED:
      return {
        ...state,
        callProfileApi: true,
      };
    case CONFIG_CONSTANTS.PHONE_VERIFICATION_REQUEST:
      return {
        ...state,
        loadingStatus: 20.25
      };
    case CONFIG_CONSTANTS.PHONE_VERIFICATION_SUCCESS:
      return {
        ...state,
        loadingStatus: 25.25
      };
    case CONFIG_CONSTANTS.PHONE_VERIFICATION_FAILURE:
      return {
        ...state,
        loadingStatus: 16.25,
        showPageLoader: false,
        showBtnLoader: false,
      };
    case CONFIG_CONSTANTS.OTP_VERIFY_REQUEST:
      return {
        ...state
      }
    case CONFIG_CONSTANTS.OTP_VERIFY_SUCCESS:
      return {
        ...state,
        loadingStatus: 45
      }
    case CONFIG_CONSTANTS.DISABLE_OTP_TIMER:
      return {
        ...state,
        loadingStatus: 40,
      };
    /**
   *  ADDRESS EVENTS
   */
    // State update for GET ALL ADDRESS: GET_ADDRESS
    // GET v1/customer/address
    case ADDRESS_CONSTANTS.GET_CUSTOMER_ADDRESS_LIST_REQUEST:
      return {
        ...state,
        showPageLoader: true,
      };
    case ADDRESS_CONSTANTS.GET_CUSTOMER_ADDRESS_LIST_SUCCESS:
      return {
        ...state,
        showPageLoader: false,
        loadingStatus: 60
      };
    case ADDRESS_CONSTANTS.GET_CUSTOMER_ADDRESS_LIST_FAILURE:
      return {
        ...state,
        showPageLoader: false,
      };
    // State update for ADD CUSTOMER ADDRESS: ADD_ADDRESS
    // POST v1/customer/address
    case ADDRESS_CONSTANTS.ADD_CUSTOMER_ADDRESS_REQUEST:
      return {
        ...state,
        showPageLoader: true,
      };
    case ADDRESS_CONSTANTS.ADD_CUSTOMER_ADDRESS_SUCCESS:
      return {
        ...state,
        showPageLoader: false,
        loadingStatus: 60
      };
    case ADDRESS_CONSTANTS.ADD_CUSTOMER_ADDRESS_FAILURE:
      return {
        ...state,
        showPageLoader: false,
      };
    // State update for ADD CUSTOMER ADDRESS: ADD_ADDRESS
    // POST v1/customer/address
    case ADDRESS_CONSTANTS.ADD_NEW_ADDRESS_REQUEST:
      return {
        ...state,
        showPageLoader: true,
      };
    case ADDRESS_CONSTANTS.ADD_NEW_ADDRESS_SUCCESS:
      return {
        ...state,
        showPageLoader: false,
        loadingStatus: 60
      };
    case ADDRESS_CONSTANTS.ADD_NEW_ADDRESS_FAILURE:
      return {
        ...state,
        showPageLoader: false,
      };
    // State update for UPDATE CUSTOMER ADDRESS: UPDATE_ADDRESS
    // PUT v1/customer/address
    case ADDRESS_CONSTANTS.UPDATE_CUSTOMER_ADDRESS_REQUEST:
      return {
        ...state,
        showPageLoader: true,
      };
    case ADDRESS_CONSTANTS.UPDATE_CUSTOMER_ADDRESS_SUCCESS:
      return {
        ...state,
        showPageLoader: false,
        loadingStatus: 60
      };
    case ADDRESS_CONSTANTS.UPDATE_CUSTOMER_ADDRESS_FAILURE:
      return {
        ...state,
        showPageLoader: false,
      };
    // State update for DELETE CUSTOMER ADDRESS: DELETE_ADDRESS
    // DELETE v1/customer/address
    case ADDRESS_CONSTANTS.DELETE_CUSTOMER_ADDRESS_REQUEST:
      return {
        ...state,
        showPageLoader: true,
      };
    case ADDRESS_CONSTANTS.DELETE_CUSTOMER_ADDRESS_SUCCESS:
      return {
        ...state,
        showPageLoader: false,
        loadingStatus: 60
      };
    case ADDRESS_CONSTANTS.DELETE_CUSTOMER_ADDRESS_FAILURE:
      return {
        ...state,
        showPageLoader: false,
      };
    // State update for SET ORDER ADDRESS METHOD: UPDATE_ORDER_ADDRESS
    // POST v1/order/customer-address
    case ADDRESS_CONSTANTS.UPDATE_ORDER_ADDRESS_REQUEST:
      return {
        ...state,
        showPageLoader: true,
      };
    case ADDRESS_CONSTANTS.UPDATE_ORDER_ADDRESS_SUCCESS:
      return {
        ...state,
        showPageLoader: false,
        loadingStatus: 60
      };
    case ADDRESS_CONSTANTS.UPDATE_ORDER_ADDRESS_FAILURE:
      return {
        ...state,
        showPageLoader: false,
      };
    // State update for GET CUSTOMER LOCATION: GET_LOCATION_DETAILS
    // POST v1/customer/get-location-details
    case ADDRESS_CONSTANTS.GET_LOCATION_DETAILS_REQUEST:
      return {
        ...state,
        showPageLoader: true,
      };
    case ADDRESS_CONSTANTS.GET_LOCATION_DETAILS_SUCCESS:
      return {
        ...state,
        showPageLoader: false,
        loadingStatus: 60
      };
    case ADDRESS_CONSTANTS.GET_LOCATION_DETAILS_FAILURE:
      return {
        ...state,
        showPageLoader: false,
      };
    /**
     *  SHIPPING SCREEN
     */
    // State update for GET MERCHANT SHIPMENT METHOD: GET_ALL_SHIPMENT_METHODS
    // GET v1/order/shipment-method
    case SHIPMENT_CONSTANTS.GET_MERCHANT_SHIPMENT_METHODS_REQUEST:
      return {
        ...state,
        showPageLoader: true,
      };
    case SHIPMENT_CONSTANTS.GET_MERCHANT_SHIPMENT_METHODS_SUCCESS:
      return {
        ...state,
        showPageLoader: false,
        loadingStatus: 70,
      };
    case SHIPMENT_CONSTANTS.GET_MERCHANT_SHIPMENT_METHODS_FAILURE:
      return {
        ...state,
        showPageLoader: false,
      };
    // State update for SET ORDER SHIPMENT METHOD: SET_SHIPMENT_METHOD
    // POST v1/order/shipment-method
    case SHIPMENT_CONSTANTS.UPDATE_ORDER_SHIPMENT_METHOD_REQUEST:
      return {
        ...state,
        showBtnLoader: true,
      };
    case SHIPMENT_CONSTANTS.UPDATE_ORDER_SHIPMENT_METHOD_SUCCESS:
      return {
        ...state,
        showBtnLoader: false,
        loadingStatus: 75,
      };
    case SHIPMENT_CONSTANTS.UPDATE_ORDER_SHIPMENT_METHOD_FAILURE:
      return {
        ...state,
        showBtnLoader: false,
      };
    case PAYMENT_CONSTANT.NIFT.RE_LOAD_NIFT_SCRIPT:
      return {
        ...state,
        showPageLoader: !action?.code ? false : true,
      };
    case PAYMENT_CONSTANT.QIST_PAY.GET_QIST_PAY_DETAILS_REQUEST:
      return {
        ...state,
        showPageLoader: true,
      };
    case PAYMENT_CONSTANT.QIST_PAY.GET_QIST_PAY_DETAILS_SUCCESS:
      return {
        ...state,
        showPageLoader: true,
      };
    case PAYMENT_CONSTANT.QIST_PAY.SHOW_LOADER:
      return {
        ...state,
        showPageLoader: true,
      };
    case PAYMENT_CONSTANT.QIST_PAY.HIDE_LOADER:
      return {
        ...state,
        showPageLoader: false,
      };
    /**
     *  PAYMENT SCREEN
     */
    // State update for GET MERCHANT PAYMENT METHOD: GET_ALL_PAYMENT_METHODS
    // GET v1/order/payment-method
    case PAYMENT_CONSTANT.GET_MERCHANT_PAYMENT_METHOD_REQUEST:
      return {
        ...state,
        showPageLoader: true,
      };
    case PAYMENT_CONSTANT.GET_MERCHANT_PAYMENT_METHOD_SUCCESS:
      return {
        ...state,
        showPageLoader: false,
        showBtnLoader: false,
        disableNextBtn: false,
        loadingStatus: 80
      };
    case PAYMENT_CONSTANT.GET_MERCHANT_PAYMENT_METHOD_FAILURE:
      return {
        ...state,
        showPageLoader: false,
      };
    // State update for SET ORDER PAYMENT METHOD: SET_PAYMENT_METHOD
    // POST v1/order/payment-method
    case PAYMENT_CONSTANT.UPDATE_ORDER_PAYMENT_METHOD_REQUEST:
      return {
        ...state,
        showBtnLoader: true,
      };
    case PAYMENT_CONSTANT.UPDATE_ORDER_PAYMENT_METHOD_SUCCESS:
      return {
        ...state,
        showBtnLoader: false,
        loadingStatus: 85,
      };
    case PAYMENT_CONSTANT.UPDATE_ORDER_PAYMENT_METHOD_FAILURE:
      return {
        ...state,
        showBtnLoader: false,
      };
    // State update for DELETE CARD: DELETE_SAVED_CARD
    // DELETE v1/customer/instrument
    case PAYMENT_CONSTANT.DELETE_CREDIT_CARD_REQUEST:
      return {
        ...state,
        showPageLoader: true,
      };
    case PAYMENT_CONSTANT.DELETE_CREDIT_CARD_SUCCESS:
      return {
        ...state,
        showPageLoader: false,
      };
    case PAYMENT_CONSTANT.DELETE_CREDIT_CARD_FAILURE:
      return {
        ...state,
        showPageLoader: false,
      };
    /*
     *  CREDIT CARD SCREEN
     */
    // CREDIT CARD PAYMENT METHOD SET AS DEFAULT MARK
    // State update for Save Credit Card API: SET_DEFAULT_PAYMENT_METHOD
    // POST v1/order/set-default-payment-method
    case PAYMENT_CONSTANT.GENERAL.PAYMENT_PROCESSOR_DETAIL_REQUEST:
      return {
        ...state,
        showPageLoader: true,
      };
    case PAYMENT_CONSTANT.GENERAL.PAYMENT_PROCESSOR_DETAIL_SUCCESS:
      return {
        ...state,
        showPageLoader: true,
      };
    case PAYMENT_CONSTANT.GENERAL.PAYMENT_PROCESSOR_DETAIL_FAILURE:
      return {
        ...state,
        showPageLoader: true,
      };
    case PAYMENT_CONSTANT.NIFT.UPDATE_NIFT_RESP_REQUEST:
      return {
        ...state,
        showPageLoader: true,
        showBackBtnLoader: false,
      };
    case PAYMENT_CONSTANT.NIFT.UPDATE_NIFT_RESP_SUCCESS:
      return {
        ...state,
        showPageLoader: false,
        showBackBtnLoader: true,
      };
    case PAYMENT_CONSTANT.NIFT.UPDATE_NIFT_RESP_FAILURE:
      return {
        ...state,
        showPageLoader: false,
        showBackBtnLoader: false,
      };
    // State update for Save Credit Card Instrument Token: SAVE_PAYMENT_INSTRUMENT
    // POST v1/order/save-payment-instrument
    case PAYMENT_CONSTANT.GENERAL.SAVE_PAYMENT_INSTRUMENT_REQUEST:
      return {
        ...state,
        showPageLoader: true,
        showBtnLoader: true,
      };
    case PAYMENT_CONSTANT.GENERAL.SAVE_PAYMENT_INSTRUMENT_SUCCESS:
      return {
        ...state,
        showPageLoader: false,
        showBtnLoader: false,
      };
    case PAYMENT_CONSTANT.GENERAL.SAVE_PAYMENT_INSTRUMENT_FAILURE:
      return {
        ...state,
        showPageLoader: false,
        showBtnLoader: false,
      };
    /*
     *  CART SCREEN
     */
    // State update for CREDIT CARD PAYMENT VERIFICATION UPDATE API: Validate PrePayment
    // POST v1/order/validate-payment
    case PAYMENT_CONSTANT.VALIDATE_PAYMENT_METHOD_REQUEST:
      return {
        ...state,
        showPageLoader: true,
        showBtnLoader: true,
      };
    case PAYMENT_CONSTANT.VALIDATE_PAYMENT_METHOD_SUCCESS:
      return {
        ...state,
        showPageLoader: false,
        showBtnLoader: false,
      };
    case PAYMENT_CONSTANT.VALIDATE_PAYMENT_METHOD_FAILURE:
      return {
        ...state,
        showBtnLoader: false,
        showPageLoader: false,
      };
    // State update for GET CART DETAILS: GET_CART_DETAILS
    // GET v1/order/checkout-detail
    case CART_CONSTANTS.GET_CART_DETAILS_REQUEST:
      return {
        ...state,
        showPageLoader: true,
        showBtnLoader: false,
      };
    case CART_CONSTANTS.GET_CART_DETAILS_SUCCESS:
      return {
        ...state,
        showPageLoader: HELPER.isEmpty(secure_id) || !state?.placeOrder ? false : true,
        loadingStatus: 90,
        callProfileApi: false,
        disableNextBtn: false,
        showBtnLoader: action.cart_data?.dfp.required === CONSTANTS.YES && action.cart_data?.dfp.error === CONSTANTS.NO ? CONSTANTS.YES : CONSTANTS.NO,
      };
    case CART_CONSTANTS.GET_CART_DETAILS_FAILURE:
      return {
        ...state,
        showPageLoader: false,
        showBtnLoader: false,
      };
    // State update for GET CART DETAILS: GET_CART_DETAILS
    // GET v1/order/checkout-detail
    case CART_CONSTANTS.VOUCHER_REQUEST:
      return {
        ...state,
        showPageLoader: true,
      };
    case CART_CONSTANTS.VOUCHER_SUCCESS:
      return {
        ...state,
        showPageLoader: false,
      };
    case CART_CONSTANTS.VOUCHER_FAILURE:
      return {
        ...state,
        showPageLoader: false,
      };
    // State update for PLACE ORDER: PLACE_ORDER
    // GET v1/order/place
    case CART_CONSTANTS.PLACE_ORDER_REQUEST:
      return {
        ...state,
        showPageLoader: true,
        showBtnLoader: true,
        loadingStatus: 95,
        placeOrder: true,
      };
    case CART_CONSTANTS.PLACE_ORDER_SUCCESS:
      return {
        ...state,
        showPageLoader: false,
        showBtnLoader: false,
        loadingStatus: 100,
        placeOrder: false,
      };
    case CART_CONSTANTS.PLACE_ORDER_FAILURE:
      return {
        ...state,
        showPageLoader: false,
        showBtnLoader: false,
        loadingStatus: 80,
        placeOrder: false,
      };
    /**
     * PROCESSING SCREEN -> AFTER CARD, BANK WALLET, BANK TRANSFER ON APG IS COMPLETED
     */
    case CART_CONSTANTS.VALIDATE_PAYMENT_INFO_REQUEST:
      return {
        ...state,
        showPageLoader: true,
      };
    case CART_CONSTANTS.VALIDATE_PAYMENT_INFO_SUCCESS:
      return {
        ...state,
        showPageLoader: false,
      };
    case CART_CONSTANTS.VALIDATE_PAYMENT_INFO_FAILURE:
      return {
        ...state,
        showPageLoader: false,
      };
    case FORM_CONSTANTS.SHOW_LOADER:
      return {
        ...state,
        showPageLoader: true,
        showBtnLoader: true,
      };
    case FORM_CONSTANTS.HIDE_LOADER:
      return {
        ...state,
        showPageLoader: false,
        showBtnLoader: false,
      };
    default:
      return state;
  }
};
export default loadingReducer;
