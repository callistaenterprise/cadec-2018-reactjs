import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { actions } from "cadec-2018-state";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import { calc } from "cadec-2018-api";
import Tabs from "./tabs_container";
import About from "./about_stack";
import TalksEarlier from "./talks_earlier_stack";
import TalksLater from "./talks_later_stack";
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
    <MainContainer>
      <RootNavigator screenProps={event} />
    </MainContainer>
  );
};

const RootNavigator = TabNavigator(
  {
    About: {
      screen: About
    },
    Early: {
      screen: TalksEarlier
    },
    Later: {
      screen: TalksLater
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
