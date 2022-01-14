import { CONSTANTS } from "../";
import { isMobile } from "react-device-detect";

function CART_DEVICE_TYPE() {
  var device_type = CONSTANTS.DEVICE_TYPE.WEB;
  if(isMobile || document.documentElement.clientWidth < 500)
  {
    device_type = CONSTANTS.DEVICE_TYPE.MOBILE
  }
  return device_type;
}

const CART_HELPER = {
  CART_DEVICE_TYPE

};
export default CART_HELPER;
