// import { useSelector } from "react-redux";

import { HELPER } from "../../utils";

const useLinkHandler = () => {
  // const { auth_code } = useSelector(state => state.config);

  const handleLinkNavigation = (bool, selectedUrl, redirectUrl) => {
    if (HELPER.sendEventToAndroid("externalLinkAllowed")) {
      window.Android.externalLinkAllowed(bool, selectedUrl, redirectUrl);
    }
    if (HELPER.sendEventToiOS("externalLinkAllowed")) {
      window.webkit.messageHandlers.externalLinkAllowed.postMessage(JSON.stringify(
        {
          show_navigation_bar: bool,
          linked_to_be_redirected_on: selectedUrl,
          linked_to_be_redirected_back: redirectUrl
        }));
    }
  };
  return {
    handleLinkNavigation,
  };
};

export default useLinkHandler;
