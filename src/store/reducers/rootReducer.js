import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

import { IntlReducer as Intl } from "react-redux-multilingual";

import alertReducer from "./alert.reducer";
import errorReducer from "./error.reducer";
import loadingReducer from "./loading.reducer";

const IntlPersistConfig = {
  key: "intl",
  storage: storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  Intl: persistReducer(IntlPersistConfig, Intl),
  alert: alertReducer,
  error: errorReducer,
  loading: loadingReducer,
});

export default rootReducer;
