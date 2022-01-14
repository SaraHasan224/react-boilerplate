import ReactGA from 'react-ga';
import {
    store
} from "../../store";

const GTM_EVENT_CATEGORY = {
    NAVIGATION: "General Navigation",
    BREADCRUMB: "Breadcrumb Navigation",
    LOGIN: "Login",
    PHONE: "Phone screen",
    OTP: "OTP",
    ADDRESS: "Address",
    SHIPMENT: "Shipping",
    PAYMENT: "Payment",
    REVIEW: "Review",
    FAILURE: "Failure",
    MERCHANT: "Merchant Info"
}


const GTM_EVENT = {
    NAVIGATION: {
        LANG_CHANGE: {
            ACTION: "Change language button",
            LABEL: "Globe button",
        },
        PROFILE_DROPDOWN: {
            ACTION: "Profile dropdown is clicked",
            LABEL: "Profile button",
        },
        CART_MENU: {
            ACTION: "Cart button is pressed",
            LABEL: "Cart button",
        },
        POPUP: {
            TERMS: {
                ACTION: "Terms Popup is pressed",
                LABEL: "Terms Popup",
            },
            PRIVACY: {
                ACTION: "Privacy Popup is pressed",
                LABEL: "Privacy Popup",
            },
        },
    },
    BREADCRUMB: {
        NAVIGATION: {
            ADDRESS: {
                ACTION: "Move to address screen",
                LABEL: "Address",
            },
            SHIPPING: {
                ACTION: "Move to shipping screen",
                LABEL: "Shipping",
            },
            PAYMENT: {
                ACTION: "Move to payment screen",
                LABEL: "Payment",
            },
            REVIEW: {
                ACTION: "Move to review screen",
                LABEL: "Review",
            }
        },
    },
    MERCHANT: {
        PLUGIN: {
            ACTION: "Plugin Version",
            LABEL: "",
        },
        STORE: {
            ACTION: "Store Url",
            LABEL: "",
        }
    },
    PHONE_NUMBER: {
        INPUT: {
            ACTION: "Phone number input is pressed",
            LABEL: "Phone input",
        },
        SUBMIT: {
            ACTION: "Phone Number submission button",
            LABEL: "Step buttons",
        },
    },
    OTP: {
        INPUT: {
            ACTION: "OTP code input",
            LABEL: "OTP input",
        },
        RETRY: {
            ACTION: "Retry OTP button pressed",
            LABEL: "OTP retry",
        },
        SUBMIT: {
            ACTION: "OTP code submission button",
            LABEL: "Step button",
        },
    },
    ADDRESS: {
        INPUT: {
            NAME: {
                ACTION: "Name input is pressed",
                LABEL: "Name input",
            },
            EMAIL: {
                ACTION: "Email input is pressed",
                LABEL: "Email input",
            },
            COUNTRY: {
                ACTION: "Country input is pressed",
                LABEL: "Country input",
            },
            PROVINCE: {
                ACTION: "Province input is pressed",
                LABEL: "Province input",
            },
            CITY: {
                ACTION: "City input is pressed",
                LABEL: "City input",
            },
            AREA: {
                ACTION: "Area input is pressed",
                LABEL: "Area input",
            },
            ADDRESS: {
                ACTION: "Address input is pressed",
                LABEL: "Address input",
            },
        },
        SELECTION: {
            ACTION: "Address input is selected",
            LABEL: "Address input",
        },
        ADD: {
            ACTION: "Add new address button is pressed",
            LABEL: "Add new address button",
        },
        EDIT: {
            ACTION: "Edit Address button is pressed",
            LABEL: "Edit address button",
        },
        DELETE: {
            ACTION: "Address delete button is pressed",
            LABEL: "Delete address",
        },
        SUBMIT: {
            ACTION: "Address submission button",
            LABEL: "Step button",
        },
    },
    SHIPMENT: {
        SELECTION: {
            ACTION: "Shipping input is selected",
            LABEL: "Shipping method input",
        },
        SUBMIT: {
            ACTION: "Shipping submission button",
            LABEL: "Step button",
        },
    },
    PAYMENT: {
        SELECTION: {
            ACTION: "Payment input is selected",
            LABEL: "Payment method input",
        },
        INPUT: {
            PHONE: {
                ACTION: "Payment - phone input",
                LABEL: "Phone input inside Payments",
            },
            EMAIL: {
                ACTION: "Payment - email input",
                LABEL: "Email input inside payments",
            },
            EP_PHONE: {
                ACTION: "Payment - easy paisa phone input",
                LABEL: "easy paisa phone input inside Payments",
            },
            BANK_ACCOUNT_NUMBER: {
                ACTION: "Payment - bank account number input",
                LABEL: "Bank account number input Inside Payments",
            },
            WALLET_NUMBER: {
                ACTION: "Payment - wallet number input",
                LABEL: "Wallet number input inside payments",
            },
        },
        SUBMIT: {
            ACTION: "Payment submission button",
            LABEL: "Step button",
        },
        DOWNLOAD: {
            ACTION: "Transaction slip downlaoded",
            LABEL: "Transaction slip",
        },
    },
    REVIEW: {
        CNIC_INPUT: {
            ACTION: "CNIC input",
            LABEL: "CNIC input",
        },
        VOUCHER: {
            INPUT: {
                ACTION: "Voucher input",
                LABEL: "Voucher input",
            },
            SUBMIT: {
                ACTION: "Voucher submit",
                LABEL: "Voucher submit",
            }
        },
        BUY_NOW: {
            ACTION: "Buy now button is pressed",
            LABEL: "Step button",
        },
    },
}


function _initializeGA() {
    // Initialize google analytics page view tracking
    ReactGA.initialize(process.env.REACT_APP_ANALYTICS_ID);
    // Initialize e-com plugin of analytics
    ReactGA.plugin.require('ec');
}

function _setPageView(location) {
    ReactGA.set({ page: location });
    ReactGA.pageview(location);
    // ReactGA.ga('send', 'pageview', location);
}

function _generalEventLog(SUB_EVENT, properties) {
    window.bSecureCheckout = window.bSecureCheckout || [];
    const action = properties?.action;
    const label = properties?.label;

    delete properties.action;
    delete properties.label;

    window.bSecureCheckout.push({
        event: SUB_EVENT,
        eventProps: {
            category: SUB_EVENT,
            action,
            label,
            value: {
                nonInteraction: false,
            },
        }
    });

    ReactGA.event({
        category: SUB_EVENT,
        action,
        label,
        nonInteraction: false
    });

    return true;
}

function _navigationEventLog(type, properties) {
    window.bSecureCheckout = window.bSecureCheckout || [];
    const action = properties?.action;
    const label = properties?.label;

    delete properties.action;
    delete properties.label;

    window.bSecureCheckout.push({
        event: type,
        eventProps: {
            category: type,
            action,
            label,
            value: {
                ...properties,
                nonInteraction: false,
            },
        }
    });

    ReactGA.event({
        category: type,
        action,
        label,
        nonInteraction: false
    });
    return true;
}

/**
 * Call this function when a user clicks on a product link. This function uses the event
 * callback datalayer variable to handle navigation after the ecommerce data has been sent
 * to Google Analytics.
 * @param {Object} productObj An object representing a product.
 */
function _productClick(productObj, position) {
    ReactGA.plugin.execute('ec', 'setAction', 'click', {
        'name': productObj.product_name,                      // Name or ID is required.
        'id': productObj.product_id,
        'price': productObj.product_total,
        // 'brand': productObj.brand,
        // 'category': productObj.cat,
        // 'variant': productObj.variant,
        'position': position
    });
    return null;
}

/**
 * Call this function when a user clicks on a product link. This function uses the event
 * callback datalayer variable to handle navigation after the ecommerce data has been sent
 * to Google Analytics.
 * @param {Object} productObj An object representing a product.
 */
function _productDetail(productObj) {
    ReactGA.plugin.execute('ec', 'setAction', 'detail', {
        'name': productObj.product_name,                      // Name or ID is required.
        'id': productObj.product_id,
        'price': productObj.product_total,                 // Product variant (string).
        'position': 2
    });
    return true;
}

function _purchaseOrder(cart_details) {
    let state = store.getState();
    const { order_ref, config } = state.configuration;
    const { merchant_name } = config;

    const cart_items = cart_details?.items;
    const cartItems = cart_items.map((product, i) => {
        return ({
            position: i,
            name: product?.product_name,       // Name or ID is required.
            id: product?.product_id,
            price: product?.product_total,
            sku: product?.product_sku,
            quantity: product?.product_qty,
            // 'brand': 'Google',
            // 'category': 'Apparel',
            // 'variant': 'Black',
            // 'list': 'Search Results',
        })
    });
    // Initialize e-com plugin of analytics
    // ReactGA.plugin.require('ec');
    ReactGA.plugin.execute('ec', 'setAction', 'purchase', {
        id: order_ref, // the same as for addItem to connect them
        affiliation: merchant_name, //store or affiliation name
        revenue: cart_details?.summary?.total_amount, // obviously it's price * quantity
        shipping: cart_details?.summary?.shipment_charges,
        currencyCode: cart_details?.summary?.currency_code,
        products: cartItems
    });
    ReactGA.plugin.execute('ec', 'setAction', 'addTransaction', {
        id: order_ref, // the same as for addItem to connect them
        affiliation: merchant_name, //store or affiliation name
        revenue: cart_details?.summary?.total_amount, // obviously it's price * quantity
        shipping: cart_details?.summary?.shipment_charges,
        currencyCode: cart_details?.summary?.currency_code,
        products: cartItems
    });
    ReactGA.plugin.execute('ec', 'clear');
    window.bSecureCheckout = window.bSecureCheckout || [];

    window.bSecureCheckout.push({
        ecommerce: {
            purchase: {
                actionField: {
                    id: order_ref,    // Transaction ID. Required for purchases and refunds.
                    affiliation: merchant_name, //store or affiliation name
                    revenue: cart_details?.summary?.total_amount, // Total transaction value (incl. tax and shipping)
                    shipping: cart_details?.summary?.shipment_charges,
                },
                products: cartItems
            }
        }
    });


}

function _initOrderLogging(response) {
    const cart = response?.cart
    GTM_HELPER._addItemsToCart(cart);
    ReactGA.plugin.execute('ec', 'setAction', 'checkout', { step: 1, option: GTM_EVENT_CATEGORY.LOGIN })

    GTM_HELPER._generalEventLog(
        GTM_HELPER.GTM_EVENT_CATEGORY.MERCHANT,
        {
            action: GTM_HELPER.GTM_EVENT.MERCHANT.PLUGIN.ACTION,
            label: response?.app_setup?.plugin_version,
            properties: {}
        }
    );

    GTM_HELPER._generalEventLog(
        GTM_HELPER.GTM_EVENT_CATEGORY.MERCHANT,
        {
            action: GTM_HELPER.GTM_EVENT.MERCHANT.STORE.ACTION,
            label: response?.config?.store_url,
            properties: {}
        }
    );

}

function _addItemsToCart(cart) {
    const cart_items = cart?.items;
    const cartItems = cart_items.map((product, i) => {
        ReactGA.plugin.execute('ec', 'addProduct', {
            id: product?.product_id,
            name: product?.product_name,
            sku: product?.product_sku,
            price: product?.product_total,
            quantity: product?.product_qty,
            currency: cart?.summary?.currency_code,
        });
        ReactGA.plugin.execute('ec', 'setAction', 'add');
        return ({
            position: i,
            name: product?.product_name,       // Name or ID is required.
            id: product?.product_id,
            price: product?.product_total,
            sku: product?.product_sku,
            quantity: product?.product_qty,
            // 'brand': 'Google',
            // 'category': 'Apparel',
            // 'variant': 'Black',
            // 'list': 'Search Results',
        })
    });
    ReactGA.plugin.execute('ec', 'setAction', 'view_item_list', {
        "items": cartItems
    });
    ReactGA.plugin.execute('ec', 'addImpression', {
        currencyCode: cart?.summary?.currency_code,
        impressions: cartItems,
    });

    // Measures product impressions and also tracks a standard
    // pageview for the tag configuration.
    // Product impressions are sent by pushing an impressions object
    // containing one or more impressionFieldObjects.
    //Measuring Product Impressions
    window.bSecureCheckout = window.bSecureCheckout || [];
    window.bSecureCheckout.push({
        ecommerce: {
            currencyCode: cart?.summary?.currency_code,
            impressions: cartItems,
        }
    })
}

function _checkoutSteps(step, name) {
    ReactGA.plugin.execute('ec', 'setAction', 'checkout', { step: step, option: name })
    return true;
}

export const GTM_HELPER = {
    GTM_EVENT_CATEGORY: GTM_EVENT_CATEGORY,
    GTM_EVENT,
    _initializeGA,
    _setPageView,
    _generalEventLog,
    _navigationEventLog,

    _addItemsToCart,
    _checkoutSteps,
    _initOrderLogging,

    _productClick,
    _productDetail,

    _purchaseOrder,
};
