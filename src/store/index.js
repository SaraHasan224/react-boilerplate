import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "./reducers/rootReducer";

const loggerMiddleware = createLogger();
const check_app_environment = process.env.REACT_APP_ENVIRONMENT;
let store;
let persistor;

if (
  check_app_environment === "dev" ||
  check_app_environment === "local"
) {
  store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
} else {
  store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
}

persistor = persistStore(store);

export { store, persistor };
