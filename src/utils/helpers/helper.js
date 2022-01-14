import { CONSTANTS, LOCAL_STORAGE_SERVICE } from "../../utils";
import { store } from "../../store";
import { isIOS, isAndroid, isMobile } from "react-device-detect";

function capitalizeFirstLetter(string) {
  var val = "";
  if (isNotEmpty(string)) {
    val = string.charAt(0).toString().toUpperCase() + string.slice(1);
  }
  return val;
}

function capitalize(string) {
  var val = "";
  if (isNotEmpty(string)) {
    val = string.toString().toUpperCase();
  }
  return val;
}

function setFavicon(icon) {
  (function () {
    var link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/png,image/jpg,image/x-icon";
    link.rel = "icon";
    link.href = icon;
    document.getElementsByTagName("head")[0].appendChild(link);
  })();
}

function isEmpty(x) {
  return (
    typeof x === "undefined" ||
    x === null ||
    x === "null" ||
    x === "undefined" ||
    x === false ||
    x.length === 0 ||
    x === ""
  );
}

function isNotEmpty(x) {
  return !isEmpty(x);
}

function ucfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function checkLocalStorage(key, propVal) {
  let localStorageVal = LOCAL_STORAGE_SERVICE._getFromLocalStorage(key);
  return isNotEmpty(localStorageVal) ?  localStorageVal : propVal;
}

function parseMetaData(data) {
  const countries = data?.countries;
  var default_country = null;
  var countryObject = [];
  var countryData = {};
  var networks, networkObject, networkData;
  var provinces, provinceObject, provinceData;
  var cities, cityObject, cityData;
  var areas, areaObject, areaData;

  // Country
  countries &&
    countries.map((country) => {
      countryData.value = country?.country_id;
      countryData.label = country?.name;
      if (country?.is_default === 1) {
        default_country = {
          value: country?.country_id,
          label: country?.name,
          country_code: country?.country_code,
          code: country?.code,
        };
      }
      // Provinces
      provinces = country?.provinces;
      provinceObject = [];
      provinces &&
        provinces.map((province) => {
          provinceData = {};
          provinceData.value = province?.id;
          provinceData.label = province?.name;
          // Cities
          cities = province?.cities;
          cityObject = [];
          cities &&
            cities.map((city) => {
              cityData = {};
              cityData.value = city?.id;
              cityData.label = city?.name;
              //Area
              areas = city?.areas;
              areaObject = [];
              areas &&
                areas.map((area) => {
                  areaData = {};
                  areaData.value = area?.id;
                  areaData.label = area?.name;
                  areaObject.push(areaData);
                  return null;
                });
              cityData.areas = areaObject;
              cityObject.push(cityData);
              return null;
            });
          provinceData.cities = cityObject;
          provinceObject.push(provinceData);
          return null;
        });
      countryData.provinces = provinceObject;
      //Telecom Networks
      networks = country?.teleco_networks;
      networkObject = [];
      networks &&
        networks.map((network) => {
          networkData = {};
          networkData.value = network?.id;
          networkData.label = network?.name;
          networkObject.push(networkData);
          return null;
        });
      countryData.networks = networkObject;
      //Save country data with province, city, area and telecom networks
      countryObject.push(countryData);
      return null;
    });
  let responseObject = { default_country, countryObject };
  return responseObject;
}

function parseDefaultMetaData(data, selected) {
  let cityId = selected?.city_id;

  const countries = data?.countries;
  var countryObject = [];
  var countryData = {};
  var provinces, provinceObject, provinceData;
  var cities, cityObject, cityData;
  var areas, areaObject, areaData;
  var defaultAreaObject = [];

  // Country
  countries &&
    countries.map((country) => {
      countryData.value = country?.country_id;
      countryData.label = country?.name;
      // Provinces
      provinces = country?.provinces;
      provinceObject = [];
      provinces &&
        provinces.map((province) => {
          provinceData = {};
          provinceData.value = province?.id;
          provinceData.label = province?.name;
          // Cities
          cities = province?.cities;
          cityObject = [];
          cities &&
            cities.map((city) => {
              cityData = {};
              cityData.value = city?.id;
              cityData.label = city?.name;
              //Area
              areas = city?.areas;
              areaObject = [];
              areas &&
                areas.map((area) => {
                  areaData = {};
                  areaData.value = area?.id;
                  areaData.label = area?.name;
                  areaObject.push(areaData);
                  if (city?.id === cityId) {
                    defaultAreaObject.push(areaData);
                  }
                  return null;
                });
              cityData.areas = areaObject;
              cityObject.push(cityData);
              return null;
            });
          provinceData.cities = cityObject;
          provinceObject.push(provinceData);
          return null;
        });
      countryData.provinces = provinceObject;
      //Save country data with province, city, area and telecom networks
      countryObject.push(countryData);
      return null;
    });
  const dropdown = {
    countryData: countryObject,
    provinceData: provinceObject,
    citiesData: cityObject,
    areasData: defaultAreaObject,
  };
  return dropdown;
}

function findProvinceByCountryId(meta, countryId) {
  const countries = meta;
  var provinces, provinceObject, provinceData;
  var cities, cityObject, cityData;
  var areas, areaObject, areaData;
  // Country
  provinceObject = [];
  countries &&
    countries.map((country) => {
      if (country?.value === countryId) {
        // Provinces
        provinces = country?.provinces;
        provinces &&
          provinces.map((province) => {
            provinceData = {};
            provinceData.value = province?.value;
            provinceData.label = province?.label;
            // Cities
            cities = province?.cities;
            cityObject = [];
            cities &&
              cities.map((city) => {
                cityData = {};
                cityData.value = city?.value;
                cityData.label = city?.label;
                //Area
                areas = city?.areas;
                areaObject = [];
                areas &&
                  areas.map((area) => {
                    areaData = {};
                    areaData.value = area?.value;
                    areaData.label = area?.label;
                    areaObject.push(areaData);
                    return null;
                  });
                cityData.areas = areaObject;
                cityObject.push(cityData);
                return null;
              });
            provinceData.cities = cityObject;
            provinceObject.push(provinceData);
            return null;
          });
      }
      return null;
    });
  return provinceObject;
}

function findCityByProvinceId(provinces, provinceId) {
  var cities, cityObject, cityData;
  var areas, areaObject, areaData;
  // Provinces
  provinces &&
    provinces.map((province) => {
      if (province?.value === provinceId) {
        // Cities
        cities = province?.cities;
        cityObject = [];
        cities &&
          cities.map((city) => {
            cityData = {};
            cityData.value = city?.value;
            cityData.label = city?.label;
            //Area
            areas = city?.areas;
            areaObject = [];
            areas &&
              areas.map((area) => {
                areaData = {};
                areaData.value = area?.value;
                areaData.label = area?.label;
                areaObject.push(areaData);
                return null;
              });
            cityData.areas = areaObject;
            cityObject.push(cityData);
            return null;
          });
        return null;
      }
      return null;
    });
  return cityObject;
}

function findAreaByCityId(cities, cityId) {
  var areas, areaObject, areaData;
  // Cities
  areaObject = [];

  cities &&
    cities.map((city) => {
      if (parseInt(city?.value) === parseInt(cityId)) {
        //Area
        areas = city?.areas;
        areaObject = [];
        areas &&
          areas.map((area) => {
            areaData = {};
            areaData.value = area?.value;
            areaData.label = area?.label;
            areaObject.push(areaData);
            return null;
          });
      }
      return null;
    });
  return areaObject;
}

function parseToFloat(value, digit) {
  var digits;
  if (isNotEmpty(value)) {
    digits = parseFloat(value).toFixed(parseInt(digit));
  } else {
    digits = "PKR 00";
  }
  return digits;
}

function createNetworkList(networks) {
  // Network
  let networkObject = [];
  networks &&
    networks.map((network) => {
      let networkList = {};
      networkList.value = network?.id;
      networkList.label = network?.name;
      networkObject.push(networkList);
      return null;
    });
  return networkObject;
}

function getNetworkIdFromName(networks, network_name) {
  // Network
  let network_id = "";
  networks &&
    networks.map((network) => {
      if (network.label === network_name) {
        network_id = network.value;
      }
      return null;
    });
  return network_id;
}

function getNetworkNameFromId(networks, network_id) {
  // Network
  let network_name = "";
  networks &&
    networks.map((network) => {
      if (network.value === network_id) {
        network_name = network.label;
      }
      return null;
    });
  return network_name;
}

function getNetworkIdFromPhoneNumber(networks, phone_number) {
  let phone_code = phone_number.substring(0, 2);
  let network_name = "";

  networks &&
    networks.map((network) => {
      var network_code = network.codes;
      Object.keys(network_code).map((key) => {
        // [Number(key), obj[key]]
        if (parseInt(network_code[key]) === parseInt(phone_code)) {
          network_name = network.name;
        }
        return null;
      });
      return null;
    });
  return network_name;
}

function addressFormatting(address) {
  let formatted_address = "";
  let country = address.country_name;
  let province = address.province_name;
  let city = address.city_name;
  let area = address.area_name;

  if (isNotEmpty(area)) {
    formatted_address += area + ", ";
  }
  if (isNotEmpty(city)) {
    formatted_address += city + ", ";
  }
  if (isNotEmpty(province)) {
    formatted_address += province + ", ";
  }
  if (isNotEmpty(country)) {
    formatted_address += country + ".";
  }

  return formatted_address;
}

function stringToBoolean(string) {
  switch (string) {
    case "true":
    case "yes":
    case "1":
    case 1:
      return true;
    case "false":
    case "no":
    case "0":
    case 0:
    case null:
      return false;
    default:
      return Boolean(string);
  }
}

function intPadding(number) {
  return (number < 10 ? "0" : "") + number;
}

function getCCTypeValidation(twoDigits) {
  // Visa	4
  // Mastercard	5
  // American Express	34
  // American Express	37
  // UnionPay	62
  // UnionPay	81
  let scheme = "unknown";
  if (twoDigits.startsWith("4")) {
    scheme = "visa";
  } else if (twoDigits.startsWith("5")) {
    scheme = "mastercard";
  } else if (twoDigits.startsWith("34")) {
    scheme = "american express";
  } else if (twoDigits.startsWith("37")) {
    scheme = "american express";
  } else if (twoDigits.startsWith("62")) {
    scheme = "unionpay";
  } else if (twoDigits.startsWith("81")) {
    scheme = "unionpay";
  }
  return scheme;
}

function getLngDirection(lngLocale) {
  let direction = "ltr";
  if (lngLocale === CONSTANTS.SUPPORTED_LANG.URDU) {
    direction = "rtl";
  }
  return direction;
}

function replaceUrduText(string_to_replace, regex, text_to_replace) {
  // The substituted value will be contained in the result variable
  const result = string_to_replace.replace(regex, text_to_replace);

  return result;
}

function oneTapTEXT_FORMAT(string_to_replace, user_name, type) {
  const continue_as_regex = /(?=\s|)({بطور})(?=\s|$)/g;
  // const continue_as_regex = /(?=\s|)(۔{بطور})(?=\s|$)/g;
  const not_as_regex = /(?=\s|)(۔{بطور})(?=\s|$)/g;
  let formatted_text;

  if (type === "AS_USER") {
    formatted_text = replaceUrduText(
      string_to_replace,
      continue_as_regex,
      user_name
    );
  } else {
    formatted_text = replaceUrduText(string_to_replace, not_as_regex, user_name);
  }

  return formatted_text;
}

function dbtMessageFormatting(
  string_to_replace,
  merchant_support_email,
  merchant_whatsapp_no
) {
  const merchant_support_email_regex = /(?=\s|)({مرچنٹ ای میل})(?=\s|$)/g;
  const merchant_whatsapp_no_regex = /(?=\s|)({مرچنٹ نمبر})(?=\s|$)/g;

  let formatted_text = replaceUrduText(
    string_to_replace,
    merchant_support_email_regex,
    ' <b dir="ltr"> &nbsp;' + merchant_support_email + " </b>"
  );

  formatted_text = replaceUrduText(
    formatted_text,
    merchant_whatsapp_no_regex,
    ' <b dir="ltr"> &nbsp;' + merchant_whatsapp_no + " </b>"
  );

  return formatted_text;
}

function otpTEXT_FORMATting(string_to_replace, network_name, phone_number) {
  const phone_number_regex = /(?=\s|)({0345 111 1111})(?=\s|$)/g;
  const network_regex = /(?=\s|)({ٹیلی نار})(?=\s|$)/g;

  let formatted_text = replaceUrduText(
    string_to_replace,
    phone_number_regex,
    ' <span className="num" dir="ltr">' + phone_number + "</span>"
  );

  formatted_text = replaceUrduText(formatted_text, network_regex, network_name);

  return formatted_text;
}


function successMessageFormatting(
  string_to_replace,
  merchant_name,
  order_number,
  calling_number = null
) {
  const merchant_name_regex = /(?=\s|)({مرچنٹ نام})(?=\s|$)/g;
  const order_number_regex = /(?=\s|)({آرڈر نمبر})(?=\s|$)/g;
  const calling_number_regex = /(?=\s|)({0900-78601})(?=\s|$)/g;

  let formatted_text = replaceUrduText(
    string_to_replace,
    merchant_name_regex,
    merchant_name
  );

  formatted_text = replaceUrduText(
    formatted_text,
    order_number_regex,
    order_number
  );
  formatted_text = replaceUrduText(
    formatted_text,
    calling_number_regex,
    calling_number
  );

  return formatted_text;
}

function transactionReciptText(string_to_replace, payment_gateway_name, time) {
  const payment_gateway_name_regex = /(?=\s|)({او ٹی سی})(?=\s|$)/g;
  const time_regex = /(?=\s|)({وقت})(?=\s|$)/g;

  let formatted_text = replaceUrduText(
    string_to_replace,
    payment_gateway_name_regex,
    payment_gateway_name
  );

  formatted_text = replaceUrduText(formatted_text, time_regex, time);

  return formatted_text;
}

function validationMessageFormat(string_to_replace, limit, digit) {
  const limit_regex = /(?=\s|)({فیلڈ})(?=\s|$)/g;
  const digit_regex = /(?=\s|)({کم})(?=\s|$)/g;

  let formatted_text = replaceUrduText(string_to_replace, limit_regex, limit);

  formatted_text = replaceUrduText(formatted_text, digit_regex, digit);

  return formatted_text;
}

function getDefaultLocale(propLocale) {
  const storageLocale = LOCAL_STORAGE_SERVICE._getFromLocalStorage("locale");
  const defaultLocale = HELPER.isNotEmpty(propLocale) ? propLocale :  "en";
  const locale = propLocale !== storageLocale ? storageLocale : defaultLocale;
  return HELPER.isNotEmpty(storageLocale) ? locale : defaultLocale;
}

function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}


function formatPrice(currency, charges, roundOff = true) {
  let charge =
    HELPER.isNotEmpty(charges) && charges !== "" ? parseFloat(charges) : 0;
  let roundOffCharge = roundOff ? charge.toFixed(2) : charge;
  const storageLocale = LOCAL_STORAGE_SERVICE._getFromSessionStorage("locale");
  if (storageLocale === CONSTANTS.SUPPORTED_LANG.ENGLISH) {
    return {
      charges: thousands_separators(roundOffCharge),
      currency,
      default: currency + " " + thousands_separators(roundOffCharge),
    }
  } else {
    return {
      charges: thousands_separators(roundOffCharge),
      currency,
      default: thousands_separators(roundOffCharge) + " " + currency,
    }
  }
}

function showPrice(currency, charges, roundOff = true) {
  let charge =
    HELPER.isNotEmpty(charges) && charges !== "" ? parseFloat(charges) : 0;
  if (HELPER.isNotEmpty(charge)) {
    let roundOffCharge = roundOff ? charge.toFixed(2) : charge;
    const storageLocale = LOCAL_STORAGE_SERVICE._getFromLocalStorage("locale");
    if (storageLocale === CONSTANTS.SUPPORTED_LANG.ENGLISH) {
      return currency + " " + thousands_separators(roundOffCharge);
    } else {
      return thousands_separators(roundOffCharge) + " " + currency;
    }
  }
}

function parseQuantity(text, quantity) {
  const storageLocale = LOCAL_STORAGE_SERVICE._getFromLocalStorage("locale");
  if (storageLocale === CONSTANTS.SUPPORTED_LANG.ENGLISH) {
    return text + ": " + quantity;
  } else {
    return quantity + " <span>" + text + "</span>";
  }
}

function wordCount(text) {
  return text.split(" ").length;
}

function getBodyDirection() {
  let bodyEl = document.querySelector("body");
  return bodyEl.getAttribute("dir");
}

function downloadURI(uri, name) {
  var link = document.createElement("a");

  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  // clearDynamicLink(link);
}

function findInJson(object, value) {
  var record = object.filter(function (data) {
    return data.id === value;
  });
  return record[0];
}

function reverseObject(object) {
  let newObj = {};

  Object.keys(object)
    .sort()
    .reverse()
    .forEach((key) => {
      newObj[object[key]] = key;
    });

  return newObj;
}

function redirectToPath(path) {
  const state = store.getState();
  const { is_customer_app } = state.configuration.config;

  if (window.opener !== null) {
    // window.onunload = null;
    window.onbeforeunload = null;
  }
  if(is_customer_app === 1){
    HELPER.linkHandler(false, path, path)
  }else if (is_customer_app === 0) {
    window.location.href = path;
  }
}

function redirectToPathAndClearLocalStorage(path, store_redirect_url = path) {
  const state = store.getState();
  const { is_customer_app } = state.configuration.config;

  if(store_redirect_url === null){
    store_redirect_url = path
  }
  if(is_customer_app === 1){
    HELPER.linkHandler(false, path, path)
  }else if (HELPER.isNotEmpty(path) && HELPER.isNotEmpty(store_redirect_url)) {
    if (window.opener !== null) {
      window.onbeforeunload = null;
      // Send message to bulider website for hosted checkout //
      let msg = { hrf: path, app_type: CONSTANTS.APP_TYPE.CHECKOUT };
      window.opener.postMessage(msg, store_redirect_url);
      window.close();
    } else {
        window.location.href = path;
    }
  }
  LOCAL_STORAGE_SERVICE._clearLocalStorage();
  return true;
}

function sendMerchantBeforeUnloadListener(redirect_url, store_url) {
  let msg;
  try {
    // Send message to bulider website for hosted checkout //
    if (window.opener !== null) {
      // window.onbeforeunload = function handler(e) {
      window.onunload = function handler(e) {
        // Cancel the event
        // e.preventDefault();
        // If you prevent default behavior in Mozilla Firefox prompt will always be shown
        // Chrome requires returnValue to be set
        setTimeout(() => {
          e.returnValue = "";
          msg = { hrf: redirect_url };
          window.opener.postMessage(msg, store_url);
          window.onbeforeunload = null;
          // window.onunload = null;
          return undefined;
        }, 100)
      };
    }
  } catch (e) {
    HELPER.sendParentWindowUnloadListener(redirect_url, store_url)
  }
}

function sendParentWindowUnloadListener(redirect_url, store_url) {
  let msg;
  if (window.parent !== null) {
    window.onunload = function handler(e) {
      e.returnValue = "";
      msg = { hrf: redirect_url };
      window.parent.opener.postMessage(msg, store_url)
      window.onbeforeunload = null;
      return undefined;
    };
  }
}

// VGS UI Styling

function getStyledCCAttributes() {

  const css = {
    color: "#1b1d1f",
    cursor: "text",
    display: "inline-flex",
    lineHeight: "1.1876em",
    letterSpacing: "0.00938em",
    fontSize: "1rem",
    // direction: HELPER.getBodyDirection() === "rtl" ? "rtl" : "ltr",
    // border: "solid 1px #1b1d1f",
    transition: "border-color .15s ease-in-out",
    "border-radius": "5px",
    padding: "0 10px",
    "text-align": HELPER.getBodyDirection() === "ltr" ? "left" : "right",
    "box-sizing": "border-box",
    "&:focus": {
      "border-color": "#11bef5",
    },
    "&.invalid.touched": {
      color: "red",
    },
    "&.valid": {
      color: "green",
    },
    "@media (min-width: 420px)": {
      "border-color": "red",
    },
    "@font-face": {
      "font-family": "SF Pro Display",
      "font-style": "normal",
      "font-weight": "400",
      "font-display": "swap",
      src:
        'url(cdnUrl("fonts/sfprodisplay-bold.eot")), url(cdnUrl("fonts/sfprodisplay-bold.eot?#iefix")) format("embedded-opentype"), url(cdnUrl("fonts/sfprodisplay-bold.woff2)) format("woff2"), url(cdnUrl("fonts/sfprodisplay-bold.woff")) format("woff"), url(cdnUrl("fonts/sfprodisplay-bold.ttf")) format("truetype"),url(cdnUrl("fonts/sfprodisplay-bold.svg#SF Pro Display")) format("svg")',
      "unicode-range": "U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    },
  };

  const cardNumberCss = {
    color: "#1b1d1f",
    cursor: "text",
    display: "inline-flex",
    lineHeight: "1.1876em",
    letterSpacing: "0.00938em",
    fontSize: "1rem",
    // padding: "0px 0px 0px 60px",
    padding: HELPER.getBodyDirection() === "rtl" ? "0px 15px 0px 0px" : "0px 12px 0px 47px",
    // direction: HELPER.getBodyDirection() === "rtl" ? "rtl" : "ltr",
    // border: "solid 1px #1b1d1f",
    transition: "border-color .15s ease-in-out",
    "border-radius": "5px",
    "box-sizing": "border-box",
    "text-align": HELPER.getBodyDirection() === "ltr" ? "left" : "right",
    "&:focus": {
      "border-color": "#11bef5",
    },
    "&.invalid.touched": {
      color: "red",
    },
    "&.valid": {
      color: "green",
    },
    "@media (min-width: 420px)": {
      "border-color": "red",
    },
    "@font-face": {
      "font-family": "SF Pro Display",
      "font-style": "normal",
      "font-weight": "400",
      "font-display": "swap",
      src:
        'url(cdnUrl("fonts/sfprodisplay-bold.eot")), url(cdnUrl("fonts/sfprodisplay-bold.eot?#iefix")) format("embedded-opentype"), url(cdnUrl("fonts/sfprodisplay-bold.woff2)) format("woff2"), url(cdnUrl("fonts/sfprodisplay-bold.woff")) format("woff"), url(cdnUrl("fonts/sfprodisplay-bold.ttf")) format("truetype"),url(cdnUrl("fonts/sfprodisplay-bold.svg#SF Pro Display")) format("svg")',
      "unicode-range": "U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    },
  };


  const checkoutCvv = {
    height: "50px",
    color: "#1b1d1f",
    cursor: "text",
    display: "inline-flex",
    lineHeight: "1.1876em",
    letterSpacing: "0.00938em",
    fontSize: "1.15rem",
    // padding: "0px 0px 0px 60px",
    padding: HELPER.getBodyDirection() === "rtl" ? "0px 15px 0px 0px" : "0px 12px 0px 47px",
    // direction: HELPER.getBodyDirection() === "rtl" ? "rtl" : "ltr",
    // border: "solid 1px #1b1d1f",
    transition: "border-color .15s ease-in-out",
    "border-radius": "5px",
    "box-sizing": "border-box",
    "text-align": HELPER.getBodyDirection() === "ltr" ? "left" : "right",
    "&:focus": {
      "border-color": "#11bef5",
    },
    "&.invalid.touched": {
      color: "red",
    },
    "&.valid": {
      color: "green",
    },
    "@media (min-width: 420px)": {
      "border-color": "red",
    },
    "@font-face": {
      "font-family": "SF Pro Display",
      "font-style": "normal",
      "font-weight": "400",
      "font-display": "swap",
      src:
        'url(cdnUrl("fonts/sfprodisplay-bold.eot")), url(cdnUrl("fonts/sfprodisplay-bold.eot?#iefix")) format("embedded-opentype"), url(cdnUrl("fonts/sfprodisplay-bold.woff2)) format("woff2"), url(cdnUrl("fonts/sfprodisplay-bold.woff")) format("woff"), url(cdnUrl("fonts/sfprodisplay-bold.ttf")) format("truetype"),url(cdnUrl("fonts/sfprodisplay-bold.svg#SF Pro Display")) format("svg")',
      "unicode-range": "U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    },
  };
  return {
    css,
    cardNumberCss,
    checkoutCvv
  }
}


// FOOTER EVENT

function hideShowFooter(show = false) {
  if (isMobile) {
    const element = document.getElementsByClassName("footerWrap");
    if (show) {
      element[0].classList.add("footer-transition");
    } else {
      element[0].classList.remove("footer-transition");
    }
  }
}

function linkHandler(bool, selectedUrl, path){
  if (HELPER.sendEventToAndroid("externalLinkAllowed")) {
    window.Android.externalLinkAllowed(bool, selectedUrl, path);
  }else if (HELPER.sendEventToiOS("externalLinkAllowed")) {
    window.webkit.messageHandlers.externalLinkAllowed.postMessage(JSON.stringify(
      {
        show_navigation_bar: bool,
        linked_to_be_redirected_on:selectedUrl ,
        linked_to_be_redirected_back: path
      }));
  }else {
    window.location.href = selectedUrl;
  }
}

const sendEventToAndroid = functionType => {
  return isAndroid && window.Android && functionType in window.Android;
};

const sendEventToiOS = (functionType) => {
  return isIOS && (HELPER.isNotEmpty(window.webkit) && HELPER.isNotEmpty(window.webkit.messageHandlers)) && functionType in window.webkit.messageHandlers;
};

const HELPER = {
  sendParentWindowUnloadListener,
  reverseObject,
  redirectToPath,
  sendMerchantBeforeUnloadListener,
  findInJson,
  downloadURI,
  getBodyDirection,
  wordCount,
  transactionReciptText,
  showPrice,
  formatPrice,
  parseQuantity,
  validationMessageFormat,
  stringToBoolean,
  capitalizeFirstLetter,
  capitalize,
  setFavicon,
  checkLocalStorage,
  createNetworkList,
  isNotEmpty,
  parseMetaData,
  parseDefaultMetaData,
  findProvinceByCountryId,
  findCityByProvinceId,
  findAreaByCityId,
  getNetworkNameFromId,
  getNetworkIdFromName,
  getNetworkIdFromPhoneNumber,
  ucfirst,
  parseToFloat,
  addressFormatting,
  intPadding,
  getCCTypeValidation,
  getLngDirection,
  otpTEXT_FORMATting,
  successMessageFormatting,
  oneTapTEXT_FORMAT,
  getDefaultLocale,
  redirectToPathAndClearLocalStorage,
  dbtMessageFormatting,

  // VGS UI Styling
  getStyledCCAttributes,

  //FOOTER EVENT
  hideShowFooter,
  linkHandler,

  sendEventToAndroid,
  sendEventToiOS,

};
export default HELPER;
