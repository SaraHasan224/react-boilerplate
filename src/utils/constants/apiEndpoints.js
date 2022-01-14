export const API_ENDPOINTS = {
  // Customer
  GET_ADDRESS: "v1/customer/address",
  UPDATE_ADDRESS: "v1/customer/address",
  ADD_ADDRESS: "v1/customer/address",
  DELETE_ADDRESS: "v1/customer/address",
  CUSTOMER_PROFILE: "v1/customer/profile",
  GET_LOCATION_DETAILS: "v1/customer/get-location-details",

  // VALIDATE ACCESS TOKEN
  IDENTIFY_CUSTOMER: "v1/token/identify-customer",

  // ORDER - PAYMENT METHOD
  GET_ALL_PAYMENT_METHODS: "v1/order/payment-method",
  SET_PAYMENT_METHOD: "v1/order/payment-method",
  VALIDATE_PAYMENT_METHOD: "v1/order/validate-payment",
  DELETE_SAVED_CARD: "v1/customer/instrument",
  SET_DEFAULT_PAYMENT_METHOD: "v1/order/set-default-payment-method",

  //NIFT - GATEWAY
  PAYMENT_PROCESSOR_DETAIL: "v1/order/payment-processor-detail",
  POST_NIFT_RESPONSE: "v1/order/post-nift-response",

  //PAYMENT INSTRUMENT
  QIST_PAY_RESPONSE: "api/send-data",

  //QIST-PAY GATEWAY
  SAVE_PAYMENT_INSTRUMENT: "v1/order/save-payment-instrument",

  // ORDER - SHIPPING METHOD
  GET_ALL_SHIPMENT_METHODS: "v1/order/shipment-method",
  SET_SHIPMENT_METHOD: "v1/order/shipment-method",

  // ORDER - ADDRESS
  UPDATE_ORDER_ADDRESS: "v1/order/customer-address",

  // ORDER
  CREATE_ORDER: "v1/order/create",
  INITIATE_ORDER: "v1/order/initiate",
  INITIATE_CATLOG_ORDER: "v1/product-catalogue/create-order",
  GET_CART_DETAILS: "v1/order/checkout-detail",
  UPDATE_CART_ITEMS: "v1/order/cart-details",
  PLACE_ORDER: "v1/order/place",
  GET_PAYMENT_INFO: "v1/order/get-payment-info",
  APPLY_VOUCHER: "v1/order/apply-voucher",

  // OTP
  CHECKOUT_OTP_SEND: "v1/checkout/otp/send",
  OTP_SEND: "v1/otp/send",
  OTP_VERIFY: "v1/otp/verify",
  OTP_RESEND: "v1/otp/resend",

  // META
  GET_META: "v1/metadata",
  GET_COUNTRY_DROPDOWN_LIST: "v1/countries-dropdown-list",
  GET_ALL_NETWORKS: "v1/network-providers/list",
};
