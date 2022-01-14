import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

import { IntlReducer as Intl } from "react-redux-multilingual";

const IntlPersistConfig = {
  key: "intl",
  storage: storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  Intl: persistReducer(IntlPersistConfig, Intl),
});

export default rootReducer;
