import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import { calc } from "cadec-2018-api";
import Tabs from "./tabs_container";
import Header from "./header";
import About from "./about";
import Talks from "./talks_stack";

import {
  MainContainer,
  HeaderContainer,
  ContentContainer,
  TabContainer,
  HeaderText,
  SelectionButton,
  SelectionButtonText,
  LoadFontsHoc
} from "cadec-2018-styles/native";

export default ({ data: { event = {} } }) => {
  return (
    <NativeRouter>
      <MainContainer>
        <Header {...event} />
        <ContentContainer>
          <Route exact path="/" render={() => <About screenProps={event} />} />
          <Route
            exact
            path="/talks"
            render={() => <Talks screenProps={event} />}
          />
        </ContentContainer>
        <Tabs />
      </MainContainer>
    </NativeRouter>
  );
};
