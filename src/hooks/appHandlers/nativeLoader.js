import React from "react";
import { useSelector } from "react-redux";

import { HELPER } from "../../utils";

const useNativeLoaderHandler = () => {
  const { showPageLoader } = useSelector(state => state.loading);

    if (HELPER.sendEventToAndroid("showLoaderWait")) {
      window.Android.showLoaderWait(showPageLoader);
    }
    if (HELPER.sendEventToiOS("showLoaderWait")) {
      window.webkit.messageHandlers.showLoaderWait.postMessage(
        JSON.stringify({
          allow: showPageLoader,
        })
      );
    }else {
      return(showPageLoader ? <div className="loading">
            <div className="spinner"></div>
          </div> : <></>);
    }
    return <></>;
};

  export default useNativeLoaderHandler;