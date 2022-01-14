export const CONSTANTS = {
  // Payment Screen
  DEFAULT_PAYMENT_METHOD_UI: "none",
  EASYPAISA_PAYMENT_METHOD_UI: "mobile_account_number",
  CC_PAYMENT_METHOD_UI: "credit_card",
  APP_TYPE: {
    CHECKOUT: 1,
    SINGLE_SIGN_ON: 2,
  },
  DIALOG: {
    CATEGORY: {
      POPUP: "POPUP",
      MODAL: "MODAL",
    },
    TYPE: {
      POPUP: {
        ORDER_EXPIRED: "ORDER_EXPIRED_POPUP",
        LANGUAGE: "LANGUAGE_POPUP",
      },
      MODAL: {
        TERMS: "TERMS_POPUP",
        PRIVACY: "PRIVACY_POPUP",
      }
    }
  },
  ERROR_TYPE: {
    TOAST: "TOAST",
    ALERT: "ALERT"
  },
  APP_ALERT_TYPE: {
    DEFAULT: 1,
    CUSTOM: 2,
  },
  YES: 1,
  NO: 0,
  //API RESPONSE
  HTTP_RESPONSE: {
    SUCCESS: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    INPROCESSIBLE: 422,
    SERVER_ERROR: 500,
  },
  //GENERAL
  IS_RTL: "rtl",
  IS_URDU: "ur",
  IS_ENGLISH: "en",
  SCREEN_REDIRECT: {
    PHONE: "phone",
    OTP: "otp",
    CHECKOUT: "checkout",
  },
  ORDER_STATUS: {
    CREATED: 1,
    INITIATED: 2,
    PLACED: 3,
    AWAITING_CONFIRMATION: 4,
    CANCLED: 5,
    EXPIRED: 6,
    FAILED: 7,
    AWAITING_PAYMENT: 8,
  },
  PAYMENT_STATUS: {
    PROCESSING: 0,
    SUCCESS: 1,
    FAILED: 2,
  },
  PAYMENT_METHOD: {
    INPUT_TYPE: {
      CREDIT_CARD: "card",
      CVV: "cvv",
      NONE: "none",
    },
    FORM_TYPE: {
      DEFAULT: "none",
      CREDIT_CARD: {
        GENERAL: "none",
        API_BASED: "credit_card",
        NIFT: "nift_cc_form",
        QISSTPAY: "qisst_pay_form",
      },
      QISSTPAY: "qisst_pay_form",
      EASY_PAISA_ACCOUNT: "mobile_account_number",
      DBT: "direct_bank_transfer",
      APG: {
        WALLET: "apg_wallet",
        BANK_ACCOUNT_NUMBER: "apg_bank_account",
      },
    },
    INSTRUCTIONS: {
      EASYPAISA: "easypaisa",
      JAZZCASH: "jazzcash",
      NONE: "none"
    },
    MOBILE_ACCOUNT: {
      INSTRUCTIONS: {
        EASYPAISA: {
          TEXT_1: "PAYMENT_METHODS.INSTRUCTIONS.EASYPAISA.TEXT_1",
          TEXT_2: "PAYMENT_METHODS.INSTRUCTIONS.EASYPAISA.TEXT_2",
          TEXT_3: "PAYMENT_METHODS.INSTRUCTIONS.EASYPAISA.TEXT_3",
          TEXT_4: "PAYMENT_METHODS.INSTRUCTIONS.EASYPAISA.TEXT_4",
          TEXT_4_1: "PAYMENT_METHODS.INSTRUCTIONS.EASYPAISA.TEXT_4_1",
          TEXT_4_2: "PAYMENT_METHODS.INSTRUCTIONS.EASYPAISA.TEXT_4_2",
        },
        JAZZCASH: {
          TEXT_1: "PAYMENT_METHODS.INSTRUCTIONS.JAZZCASH.TEXT_1",
          TEXT_2: "PAYMENT_METHODS.INSTRUCTIONS.JAZZCASH.TEXT_2",
          TEXT_3: "PAYMENT_METHODS.INSTRUCTIONS.JAZZCASH.TEXT_3",
          TEXT_4: "PAYMENT_METHODS.INSTRUCTIONS.JAZZCASH.TEXT_4",
          TEXT_4_1: "PAYMENT_METHODS.INSTRUCTIONS.JAZZCASH.TEXT_4_1",
          TEXT_4_2: "PAYMENT_METHODS.INSTRUCTIONS.JAZZCASH.TEXT_4_2",
        }
      },
      SUGGESTION_LIST: {
        EASYPAISA: "PAYMENT_METHODS.SUGGESTION_LIST.EASYPAISA",
        JAZZCASH: "PAYMENT_METHODS.SUGGESTION_LIST.JAZZCASH",
      }
    }
  },
  PAYMENT_SCREEN_RULE: {
    DEFAULT: "DEFAULT",
    DBT: "DIRECT_BANK_TRANSFER",
    CREDIT_CARD: {
      ADD_NEW: "ADD_NEW_CREDIT_CARD",
      SAVED: "SAVED_CREDIT_CARD",
    },
    EASY_PAISA: {
      ADD_NEW: "ADD_NEW_EASY_PAISA",
      SAVED: "SAVED_EASY_PAISA",
    },
    EASY_PAISA_ACCOUNT: "ep_mobile_account",
    EP_WALLET: "ep_wallet",
    APG_WALLET: {
      SAVED: "apg_wallet_saved",
      ADD_NEW: "add_new_apg_wallet"
    },
    QISSTPAY: "QISST_PAY",
    APG_BANK_ACCOUNT_NUMBER: {
      SAVED: "apg_bank_account_number_saved",
      ADD_NEW: "add_new_apg_bank_account_number"
    },
  },
  PAYMENT: {
    GATEWAY: {
      EASY_PAISA: "mobile_account_number",
      APG: "apg",
      DBT: "direct_bank_transfer",
      SAFEPAY: "safepay",
    },
  },
  CHECKOUT_INFO: {
    PAYMENT_METHOD: {
      TOOLTIP: {
        CVV: "cvv",
        DBT: "dbt",
        PAYMENT_GUARENTEED: "PAYMENT_GUARENTEED"
      },
    },
  },
  ORDER_PLACEMENT_TYPE: {
    APP: "App",
    MANUAL: "Manual",
    COD_VERIFICATION: "COD_verification",
    PAYMENT_GATEWAY: "Payment_gateway",
    INVOICE: "Invoice"
  },
  DISCOUNT_TYPE: {
    1: "flat",
    2: "percentage",
  },
  SUCCESS_MESSAGE_TEXT: {
    GENERAL: {
      ORDER_PLACED: "order_placed",
      CALL_BY_CR: "call_by_cr",
      CALL_BY_ROBOT: "call_by_robot",
    },
    PRE_PAYMENT_OTC: {
      ORDER_PLACED: "order_processing",
      CALL_BY_CR: "order_processing",
      CALL_BY_ROBOT: "order_processing",
    },
  },
  BREADCRUMB_LABEL: {
    CHECKOUT: "checkout",
    ORDER_STATUS: "order-status",
    GENERAL: "general",
    NONE: "none"
  },
  BREADCRUMB_TYPE: {
    GENERAL: 1,
    OTP: 2,
    CHECKOUT: 3,
    ORDER_STATUS: 4,
    NONE: 5
  },
  DEVICE_TYPE: {
    MOBILE: "MOBILE",
    WEB: "WEB",
  },
  NIFT_RESPONSE_HANDLER: {
    UI: 1,
    API: 2,
  },
  PERMISSIONS: {
    GRANTED: "granted",
    DENIED: "denied",
    PROMPT: "prompt"
  }
};


export const SAVED_PAYEMENT_CONSTANTS = [
  CONSTANTS.PAYMENT_SCREEN_RULE.CREDIT_CARD.SAVED,
  CONSTANTS.PAYMENT_SCREEN_RULE.EASY_PAISA.SAVED,
  CONSTANTS.PAYMENT_SCREEN_RULE.APG_WALLET.SAVED,
  CONSTANTS.PAYMENT_SCREEN_RULE.APG_BANK_ACCOUNT_NUMBER.SAVED
];
