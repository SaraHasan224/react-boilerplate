import React, { useState, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ToastProvider } from 'react-toast-notifications';
import { IntlProvider, IntlActions } from "react-redux-multilingual";
import { StylesProvider, ThemeProvider, jssPreset } from "@mui/styles";
import { createTheme  } from "@mui/material/styles";
import { create } from "jss";
import TagManager from "react-gtm-module";
import rtl from "jss-rtl";

import {
  DefaultRoute,
  // PrivateRoute,
  PageLoader,
  ErrorBoundary
} from "./components";
import {
  CONSTANTS,
  LANG_TRANS,
  HELPER,
  LOCAL_STORAGE_SERVICE,
  // GTM_HELPER,
  history,
  ROUTES
} from "./utils";
import "./assets/sass/app.scss";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const ltrTheme = createTheme({ direction: "ltr" });
const rtlTheme = createTheme({ direction: "rtl" });
let tagManagerArgs = {
  gtmId: process.env.REACT_APP_GTM_ID,
  dataLayerName: 'bSecureCheckout'
}

const LocaleUpdate = (locale) => {
  let htmlEl = document.querySelector("html");
  // htmlEl.setAttribute("dir", direction);
  htmlEl.setAttribute("lang", locale);

  let lang_direction = HELPER.getLngDirection(locale);
  let bodyEl = document.querySelector("body");
  bodyEl.setAttribute("dir", lang_direction);

  return true;
};

function App() {
  let dispatch = useDispatch();

  const { locale } = useSelector(state => state.Intl);
  // const { gtm_id } = useSelector(state => state.configuration.config);

  const defaultLocale = HELPER.getDefaultLocale(locale);
  LOCAL_STORAGE_SERVICE._saveToLocalStorage("locale", defaultLocale);

  const [langLocale, setLangLocale] = useState(defaultLocale);

  useEffect(() => {
    // GTM_HELPER._initializeGA();
    TagManager.initialize(tagManagerArgs);
    dispatch(IntlActions.setLocale(langLocale));
    // if (HELPER.isNotEmpty(gtm_id) && tagManagerArgs.gtmId !== gtm_id) {
    //   tagManagerArgs.gtmId = gtm_id;
    //   TagManager.initialize(tagManagerArgs);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    if (HELPER.isNotEmpty(locale)) {
      LocaleUpdate(locale);
      const storageLocale = LOCAL_STORAGE_SERVICE._getFromLocalStorage("locale");
      if (locale !== storageLocale) {
        setLangLocale(storageLocale);
        LOCAL_STORAGE_SERVICE._updateInLocalStorage("locale", storageLocale);
      } else {
        setLangLocale(locale);
      }
    }

    // if (HELPER.isNotEmpty(gtm_id) && tagManagerArgs.gtmId !== gtm_id) {
    //   tagManagerArgs.gtmId = gtm_id;
    //   TagManager.initialize(tagManagerArgs);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  return (
    <>
      <PageLoader />
      <ToastProvider>
        <StylesProvider jss={jss}>
          <ThemeProvider
            theme={locale === CONSTANTS.SUPPORTED_LANG.URDU ? rtlTheme : ltrTheme}
          >
            <IntlProvider
              translations={LANG_TRANS}
              locale={langLocale}
              defaultLocale="en"
            >
              <Router history={history}>
                <ErrorBoundary>
                  <Switch>
                    {ROUTES.map((route, index) => {
                      return  route.protected ? (
                      //   <PrivateRoute key={index} {...route} />
                      // ) : route.default ? (
                        <DefaultRoute key={index} {...route} />
                      ) : (
                        <Route key={index} {...route} />
                      );
                    })}
                  </Switch>
                </ErrorBoundary>
              </Router>
            </IntlProvider>
          </ThemeProvider>
        </StylesProvider>
      </ToastProvider>
    </>
  );
}

export default App;

