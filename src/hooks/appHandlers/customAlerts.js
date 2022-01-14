import React from "react";
import { useSelector } from "react-redux";

import { HELPER, CONSTANTS } from "../../utils";


const useCustomAlerts = () => {
  const { message, type, group, autoDismiss } = useSelector(state => state.alert);
  

  //clear alert msg in mobile after 3 sec
  const clearMessage=()=>{
    setTimeout(() => {
      // dispatch(alertActions.clear());
    }, 3000)
  }

  if(!HELPER.isEmpty(message) && !HELPER.isEmpty(type)){
    if (
      HELPER.sendEventToAndroid("alertMessage")) {
      window.Android.alertMessage(type, Array.isArray(message) ? message[0] : message, CONSTANTS.APP_ALERT_TYPE.CUSTOM, autoDismiss);
      clearMessage()
    } else if (
      HELPER.sendEventToiOS("alertMessage")) {
      window.webkit.messageHandlers.alertMessage.postMessage(
        JSON.stringify({ type, msg: Array.isArray(message) ? message[0] : message, group: CONSTANTS.APP_ALERT_TYPE.DEFAULT})
      );
      clearMessage()
    } else {
      const clearAlert = () => {
        // dispatch(alertActions.clear())
      };
      return (
        (
        group === CONSTANTS.ERROR_TYPE.ALERT &&
        !HELPER.sendEventToiOS("alertMessage") &&
        !HELPER.sendEventToAndroid("alertMessage")
      ) ?
        <div className="row">
        <div className={`col-12 alert_classes `}>
            <div className={`alertCustom  ${HELPER.isEmpty(type) ? "default" : type}`} role="alert">
              <div className={`alertAction ${HELPER.isEmpty(type) ? "default" : type}`}>
                  < span className={`${type === "error" ? "icomoon-close" :
                    type === "warning" ?
                    "icomoon-info" : "icomoon-check"}`}
                    onClick={clearAlert}></span>
              </div>
              <div className="alertMsg">{message}</div>
            </div>
          </div>
        </div>
      : <></>)
      }
    }
  return(<></>);
};

export default useCustomAlerts;
