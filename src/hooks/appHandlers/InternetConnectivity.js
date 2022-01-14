import { HELPER } from "../../utils";


const internetConnectionHandler = (online) => {
  // store.dispatch(formAction.NO_INTERNET_CONNECTION(online));

  if (HELPER.sendEventToAndroid("isOnline")) {
    // !online && store.dispatch(alertActions.error(ERROR_MSGS.EN.NETWORK_ERROR, CONSTANTS.ERROR_TYPE.TOAST, false));
    window.Android.isOnline(online);
  } else if (HELPER.sendEventToiOS("isOnline")) {
    // !online && store.dispatch(alertActions.error(ERROR_MSGS.EN.NETWORK_ERROR, CONSTANTS.ERROR_TYPE.TOAST, false));
    window.webkit.messageHandlers.isOnline.postMessage(
      JSON.stringify({ online })
    );
  } else {
    // online && store.dispatch(alertActions.clear())
    // !online && store.dispatch(alertActions.error(ERROR_MSGS.EN.NETWORK_ERROR, CONSTANTS.ERROR_TYPE.TOAST, false));
  }
  return true
};

export default internetConnectionHandler;
