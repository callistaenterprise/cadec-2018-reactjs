import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import Tabs from "./tabs_container";
import Header from "./header";
import About from "./about";
import TalkDetails from "./talk_details";
import Talks from "./talks";

import {
  MainContainer,
  ContentContainer,
} from "cadec-2018-styles/native";

export default ({ data: { event = {}, loading } }) => {
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
          <Route
            path="/talks/:talkId"
            render={({ match: { params: { talkId } } }) => (
              <TalkDetails talkId={talkId} screenProps={event} />
            )}
          />
        </ContentContainer>
        <Tabs />
      </MainContainer>
    </NativeRouter>
  );
};
