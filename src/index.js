// @flow

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Detector } from "react-detect-offline";
import { store, persistor } from "./store";
import App from "./App";
import {
  Provider as P,
  ErrorBoundary } from '@rollbar/react';
// import { unregister } from "./ServiceWorker";
import {
  GTM_HELPER,
} from "./utils";
import {
  internetConnectionHandler,
} from "./hooks";

const rootElement = document.getElementById("root");

GTM_HELPER._initializeGA();

// same configuration you would create for the Rollbar.js SDK
const rollbarConfig = {
  accessToken: process.env.REACT_APP_ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
      environment: process.env.REACT_APP_ENVIRONMENT
  }
};

if (rootElement) {
  ReactDOM.render(
    <P config={rollbarConfig}>
      <Provider store={store}>
        <ErrorBoundary>
          <PersistGate loading={null} persistor={persistor}>
            {/* {internetConnectionHandler(window.navigator?.onLine ?? true)} */}
            {/* <App /> */}
              <Detector
                render={({ online }) => {
                  internetConnectionHandler(online)
                  return <App />;
                }}
              />
          </PersistGate>
        </ErrorBoundary>
       </Provider>
    </P>,
    rootElement
  );
} else {
  throw new Error("Could not find root element to mount to!");
}
