import { applyMiddleware, createStore } from "redux";

import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { weatherReducer } from "./weatherdataReducer";

export const store = createStore(
  weatherReducer,
  applyMiddleware(thunk, logger)
);
