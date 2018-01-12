import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { apolloReducer } from "apollo-cache-redux";
import { reducers } from "./reducers/";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  combineReducers({
    apollo: apolloReducer,
    ...reducers
  })
  // composeWithDevTools(applyMiddleware(middleware))
);
export default C => props => (
  <Provider store={store}>
    <C {...props} />
  </Provider>
);
