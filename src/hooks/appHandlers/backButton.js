import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useLocation } from "react-router-dom";

import { LOCAL_STORAGE_SERVICE, HELPER, ROUTES } from "../../utils";
let allow;

const useBackActionHandler = () => {
  let location = useLocation();
  const { is_customer_app } = useSelector(state => state.configuration.config);
  const { shipment_method_id, delivery_address_id, payment_method_id, } = useSelector(state => state.redirect)

  const handleBackNavigationSettings = () => {
    let firstScreen = LOCAL_STORAGE_SERVICE._isFirstScreen();

    let path = ROUTES.find(route => {
      return route.path === location?.pathname;
    });
    if (path !== -1 && path !== undefined) {
      allow = path?.allowBack && isNaN(firstScreen) ? false : !firstScreen;
    } else {
      allow = false;
    }
    if (is_customer_app === 1 && HELPER.sendEventToAndroid("handleBackNavigation")) {
      window.Android.handleBackNavigation(allow || false, true);
    }
    if (is_customer_app === 1 && HELPER.sendEventToiOS()) {
      window.webkit.messageHandlers.handleBackNavigation.postMessage(JSON.stringify(
        {
          allow_back: allow || false,
          show_navigation_bar: true
        }));
    }
  }

  useEffect(() => {
    handleBackNavigationSettings()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleBackNavigationSettings()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shipment_method_id, delivery_address_id, payment_method_id]);

  return {
    handleBackNavigationSettings,
  }
};

export default useBackActionHandler;