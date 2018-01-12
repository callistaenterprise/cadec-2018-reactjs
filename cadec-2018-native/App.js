import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { compose } from "recompose";
import { ApolloProviderHoc, api, calc } from "cadec-2018-api";
import { ReduxProviderHoc, store } from "cadec-2018-state";

import {
  MainContainer,
  HeaderContainer,
  ContentContainer,
  TabContainer,
  HeaderText,
  SelectionButton,
  SelectionButtonText
} from "cadec-2018-styles/native";

class App extends React.Component {
  render() {
    console.log(this.props.data.event);
    return (
      <MainContainer>
        <HeaderContainer>
          <HeaderText>Cadec 2018 {calc(2, 2)}</HeaderText>
        </HeaderContainer>
        <ContentContainer>Talks</ContentContainer>
        <TabContainer>
          <SelectionButton>
            <SelectionButtonText>Morning</SelectionButtonText>
          </SelectionButton>
          <SelectionButton>
            <SelectionButtonText>Afternoon</SelectionButtonText>
          </SelectionButton>
        </TabContainer>
      </MainContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default compose(
  ReduxProviderHoc,
  ApolloProviderHoc(store),
  api.events()
)(App);
