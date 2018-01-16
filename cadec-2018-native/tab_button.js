import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableHighlight } from "react-native";
import {
  SelectionButton,
  SelectionButtonText,
  TabButton
} from "cadec-2018-styles/native";

const createTabBarIconWrapper = (
  TabBarIconComponent,
  defaultProps
) => props => <TabBarIconComponent {...defaultProps} color={props.tintColor} />;

export default ({ text, icon, link, action }) => (
  <TouchableHighlight onPress={action}>
    <TabButton>
      <Ionicons name={icon} size={35} />
      <SelectionButtonText>{text}</SelectionButtonText>
    </TabButton>
  </TouchableHighlight>
);
