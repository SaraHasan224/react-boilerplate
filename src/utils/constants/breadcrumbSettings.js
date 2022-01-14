import {
    CONSTANTS
} from "./"

export const BREADCRUMB_SETTINGS_JSON = {
    INVOICE_CHECKOUT: {
        TYPE: CONSTANTS.BREADCRUMB_TYPE.GENERAL,
        LABEL: "BREADCRUMB.INVOICE",
        ICON: "icomoon-breadcrumb-payment-colored",
        ICON_CLASS: "iconW font18",
        CLASS: "",
        HEADER_CLASS: "",
        SHOW: true,
        SHOW_CART_ICON: true,
        PROGRESS: 16.6666666667,
        NO_PROGRESS: true,
        HEADER_PADDING: false
    },
    PHONE_SCREEN: {
        TYPE: CONSTANTS.BREADCRUMB_TYPE.GENERAL,
        LABEL: "PHONE.BREADCRUMB.HEADING",
        ICON: "icomoon-breadcrumb-phone",
        ICON_CLASS: "iconW font18",
        CLASS: "",
        HEADER_CLASS: "",
        SHOW: true,
        SHOW_CART_ICON: true,
        PROGRESS: 16.6666666667,
        NO_PROGRESS: false,
        HEADER_PADDING: true
    },
    ONE_TAP_LOGIN: {
        TYPE: CONSTANTS.BREADCRUMB_TYPE.GENERAL,
        LABEL: "one_tap_login",
        ICON: "",
        ICON_CLASS: "",
        CLASS: "",
        HEADER_CLASS: " oneTap",
        SHOW: true,
        SHOW_CART_ICON: false,
        PROGRESS: 0,
        NO_PROGRESS: false,
        HEADER_PADDING: true
    },
    NETWORK: {
        TYPE: CONSTANTS.BREADCRUMB_TYPE.GENERAL,
        LABEL: "phone_field",
        ICON: "icomoon-breadcrumb-phone",
        ICON_CLASS: "iconW font18",
        CLASS: "",
        HEADER_CLASS: " oneTap",
        SHOW: true,
        SHOW_CART_ICON: true,
        PROGRESS: 16.6666666667,
        NO_PROGRESS: false,
        HEADER_PADDING: true
    },
    OUT_OF_RETRIES: {
        TYPE: CONSTANTS.BREADCRUMB_TYPE.ORDER_STATUS,
        LABEL: "",
        ICON: "icomoon-close",
        ICON_CLASS: "icomoon-close",
        CLASS: "orderStatus Failure",
        HEADER_CLASS: "",
        SHOW: true,
        SHOW_CART_ICON: false,
        PROGRESS: 100,
        NO_PROGRESS: false,
        HEADER_PADDING: true
    },
    FAILED_ORDER: {
        TYPE: CONSTANTS.BREADCRUMB_TYPE.ORDER_STATUS,
        LABEL: "",
        ICON: "icomoon-close",
        ICON_CLASS: "icomoon-close",
        CLASS: "orderStatus Failure",
        HEADER_CLASS: "",
        SHOW: true,
        SHOW_CART_ICON: true,
        PROGRESS: 83.3333333333,
        NO_PROGRESS: false,
        HEADER_PADDING: true
    },
    PLACED_ORDER: {
        VERIFICATION_CALL: {
            TYPE: CONSTANTS.BREADCRUMB_TYPE.ORDER_STATUS,
            LABEL: "",
            ICON: "icon-icon-calling",
            ICON_CLASS: "icon-icon-calling",
            CLASS: "orderStatus Success",
            HEADER_CLASS: "",
            SHOW: true,
            SHOW_CART_ICON: false,
            PROGRESS: 100,
            NO_PROGRESS: false,
            HEADER_PADDING: true
        },
        GENERAL: {
            TYPE: CONSTANTS.BREADCRUMB_TYPE.ORDER_STATUS,
            LABEL: "",
            ICON: "icomoon-check",
            ICON_CLASS: "icomoon-check",
            CLASS: "orderStatus Success",
            HEADER_CLASS: "",
            SHOW: true,
            SHOW_CART_ICON: false,
            PROGRESS: 100,
            NO_PROGRESS: false,
            HEADER_PADDING: true
        }
    },
    PRE_PAYMENT_ORDER: {
        VERIFICATION_CALL: {
            TYPE: CONSTANTS.BREADCRUMB_TYPE.ORDER_STATUS,
            LABEL: "",
            ICON: "icon-icon-calling",
            ICON_CLASS: "icon-icon-calling",
            CLASS: "orderStatus Processing",
            HEADER_CLASS: "",
            SHOW: true,
            SHOW_CART_ICON: false,
            PROGRESS: 100,
            NO_PROGRESS: false,
            HEADER_PADDING: true
        },
        GENERAL: {
            TYPE: CONSTANTS.BREADCRUMB_TYPE.ORDER_STATUS,
            LABEL: "",
            ICON: "icomoon-check",
            ICON_CLASS: "icomoon-check",
            CLASS: "orderStatus Processing",
            HEADER_CLASS: "",
            SHOW: true,
            SHOW_CART_ICON: false,
            PROGRESS: 100,
            NO_PROGRESS: false,
            HEADER_PADDING: true
        }
    },
    PROCESSING: {
        TYPE: CONSTANTS.BREADCRUMB_TYPE.ORDER_STATUS,
        LABEL: "",
        ICON: "icomoon-check",
        ICON_CLASS: "icomoon-check",
        CLASS: "orderStatus Success",
        HEADER_CLASS: "",
        SHOW: true,
        SHOW_CART_ICON: false,
        PROGRESS: 50,
        NO_PROGRESS: false,
        HEADER_PADDING: true
    },
    EP_PROCESSING: {
        TYPE: CONSTANTS.BREADCRUMB_TYPE.CHECKOUT,
        LABEL: "",
        ICON: "icomoon-check",
        ICON_CLASS: "icomoon-check",
        CLASS: "orderStatus Success",
        HEADER_CLASS: "",
        SHOW: true,
        SHOW_CART_ICON: false,
        PROGRESS: 50,
        NO_PROGRESS: false,
        HEADER_PADDING: true
    },
    CHECKOUT: {
        TYPE: CONSTANTS.BREADCRUMB_TYPE.CHECKOUT,
        LABEL: "",
        ICON: "",
        ICON_CLASS: "",
        CLASS: "",
        HEADER_CLASS: "",
        SHOW: true,
        SHOW_CART_ICON: true,
        PROGRESS: 83.3333333333,
        NO_PROGRESS: false,
        HEADER_PADDING: true
    },
    REVIEW: {
        TYPE: CONSTANTS.BREADCRUMB_TYPE.CHECKOUT,
        LABEL: "",
        ICON: "",
        ICON_CLASS: "",
        CLASS: "",
        HEADER_CLASS: "",
        SHOW: true,
        SHOW_CART_ICON: false,
        PROGRESS: 83.3333333333,
        NO_PROGRESS: false,
        HEADER_PADDING: true
    },
    OTP: {
        TYPE: CONSTANTS.BREADCRUMB_TYPE.OTP,
        LABEL: "",
        ICON: "",
        ICON_CLASS: "",
        CLASS: "",
        HEADER_CLASS: "",
        SHOW: true,
        SHOW_CART_ICON: true,
        PROGRESS: 33.3333333333,
        NO_PROGRESS: false,
        HEADER_PADDING: true
    },
    DEFAULT: {
        TYPE: CONSTANTS.BREADCRUMB_TYPE.NONE,
        LABEL: "",
        ICON: "",
        ICON_CLASS: "",
        CLASS: "",
        HEADER_CLASS: "",
        SHOW: true,
        SHOW_CART_ICON: false,
        PROGRESS: 50,
        NO_PROGRESS: true,
        HEADER_PADDING: false
    }
};
