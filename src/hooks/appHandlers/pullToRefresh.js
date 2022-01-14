// import React from "react";

import { HELPER } from "../../utils";

const usePullToRefreshHandler = allowed => {
  if (HELPER.sendEventToAndroid("handlePullToRefresh")) {
    window.Android.handlePullToRefresh(true);
  }
  if (HELPER.sendEventToiOS("handlePullToRefresh")) {
      window.webkit.messageHandlers.handlePullToRefresh.postMessage(
        JSON.stringify({
          allow_pull_to_refresh: allowed,
        })
      );
  }
};

  export default usePullToRefreshHandler;