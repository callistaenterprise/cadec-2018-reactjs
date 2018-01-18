import React, { Component } from "react";
import { compose } from "recompose";
import { ApolloProviderHoc } from "../../cadec-2018-api";
import { ReduxProviderHoc, store } from "../../cadec-2018-state";
import blessed from "blessed";
import { render } from "react-blessed";
import MainContainer from "./main_container";
import "isomorphic-fetch";









const App = compose(
  ReduxProviderHoc,
  ApolloProviderHoc(store)
)(MainContainer);

// Creating our screen
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: "XXXXreact-blessed hello world",
  mouse: true
});

// Adding a way to quit the program
screen.key(["escape", "q", "C-c"], function(ch, key) {
  return process.exit(0);
});

// Rendering the React app using our screen
const component = render(<App />, screen);
