import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import About from "./about_stack";
import Talks from "./talks_stack";
import {
  MainContainer
} from "cadec-2018-styles/native";

export default ({ data: { event = {}, loading}, ...rest}) => {
  return (
    <MainContainer>
      <RootNavigator screenProps={{event, loading }} />
    </MainContainer>
  );
};

const RootNavigator = TabNavigator(
  {
    About: {
      screen: About
    },
    Talks: {
      screen: Talks
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: "#000",
      activeBackgroundColor: "rgb(115,195,182)",
      inactiveTintColor: "rgb(65, 66, 141)",
      labelStyle: {
        fontSize: 13
      },
      style: {
        // Currently there is no great way to center two tab icons, so we do
        // it manually here by assuming that each tab icon is about 125 points wide
        paddingHorizontal: (Dimensions.get("window").width - 225) / 2,
        backgroundColor: "rgb(216, 238, 234)",
        height: 65
      }
    }
  }
);
