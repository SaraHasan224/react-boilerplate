// @flow

import React from "react";
import { useSelector } from "react-redux";

import {
  CONSTANTS,
  ERROR_MSGS,
  IMAGE_SRC,
  HELPER,
  history
} from "../../utils";

function Error(props) {
  const { locale, body } = props;

  const { message, status, description } = useSelector(state => state.error);

  const redirectToRoot = () => {
    const store_url = body?.store_url;
    if (HELPER.isEmpty(store_url)) {
      history.goBack();
    } else {
      HELPER.redirectToPathAndClearLocalStorage(store_url);
    }
  };

  const showErrorTitle = () => {
    const title = locale === CONSTANTS.IS_URDU ? "Something went wrong" : ERROR_MSGS.EN.E_BAD_REQUEST
    return !HELPER.isEmpty(message) ? message : title
  };

  const showErrorDescription = () => {
    return "- " + description
  };

  return (
      <section className="errorPage">
        <div className="errorPageLogo">
          <img src={IMAGE_SRC.BSECURE_ICON_LOGO} alt="website logo" />
        </div>
        <div className="errorPageText">
          <h1>{locale === CONSTANTS.IS_URDU ? ERROR_MSGS.UR.ERROR_SUBTITLE : ERROR_MSGS.EN.ERROR_SUBTITLE}</h1>
          <p>
            {status}
            {!HELPER.isEmpty(description) ? showErrorDescription() : ""}
          </p>
          <p>
            {showErrorTitle()}
          </p>
          <span onClick={redirectToRoot} className="btn btn-error-back">
            {locale === CONSTANTS.IS_URDU ? ERROR_MSGS.UR.BACK_BTN_TEXT : ERROR_MSGS.EN.BACK_BTN_TEXT}
          </span>
        </div>
      </section>
  );
}

export default Error;