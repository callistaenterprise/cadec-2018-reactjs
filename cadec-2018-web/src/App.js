import React, { Component } from "react";
import { compose } from "recompose";
import MainContainer from "./main_container";
import { ApolloProviderHoc } from "cadec-2018-api";
import { ReduxProviderHoc, store } from "cadec-2018-state";
import global from "cadec-2018-styles/global";
import createHistory from "history/createBrowserHistory";
const history = createHistory();
class App extends Component {
  render() {
    return <MainContainer />;
  }
}
export default compose(ReduxProviderHoc, ApolloProviderHoc(store))(App);
