import React from "react";
import { compose } from "recompose";
import { NativeRouter, Route, Link } from "react-router-native";
import { ApolloProviderHoc, api, calc } from "cadec-2018-api";
import { ReduxProviderHoc, store } from "cadec-2018-state";
import { LoadFontsHoc } from "cadec-2018-styles/native";
import MainContainer from "./main_container";

const App = props => <MainContainer {...props} />;

export default compose(
  LoadFontsHoc,
  ReduxProviderHoc,
  ApolloProviderHoc(store)
)(App);
