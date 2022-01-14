import { useEffect } from "react";
import { useSelector } from "react-redux";

import { animateScroll as scroll } from "react-scroll";

import { HELPER, CONSTANTS } from "../../utils";
import { useCustomAlerts, useToaster } from "../../hooks";
import { scroller } from "react-scroll";

let timeoutTime

function AlertComponent() {
  // let dispatch = useDispatch();
  let { addToast, removeAllToasts } = useToaster();

  const { message, hide, type, clearAll, autoDismiss, group } = useSelector(state => state.alert);

  useEffect(() => {
    // returned function will be called on component unmount
    return () => {
      if (HELPER.isNotEmpty(message) && hide) {
        /*
          SCROLL SCREEN TO TOP ON EACH RENDER
        */
        scroll.scrollToTop();
      }
      clearTimeout(timeoutTime);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    removeAllToasts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearAll]);

  useEffect(() => {
    /*
      TOAST ALERTS
    */
    if (HELPER.isNotEmpty(message) &&
      HELPER.isNotEmpty(type) &&
      !HELPER.sendEventToiOS("alertMessage") &&
      !HELPER.sendEventToAndroid("alertMessage")) {
      
      group === CONSTANTS.ERROR_TYPE.TOAST ?
        addToast(message, {
        appearance: type,
        autoDismiss: autoDismiss,
        })
        :
        group === CONSTANTS.ERROR_TYPE.ALERT ?
          scroller.scrollTo("alert_classes", { offset: -100, smooth: true })
          :
          null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message, type]);

  useEffect(() => {
    if (HELPER.isNotEmpty(message) && hide) {
      /*
        SCROLL SCREEN TO TOP ON EACH RENDER
      */
      scroll.scrollToTop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alert]);

  return useCustomAlerts();
}

export default AlertComponent;
