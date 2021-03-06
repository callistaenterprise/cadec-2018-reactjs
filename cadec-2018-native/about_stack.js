import React from "react";
import { StackNavigator } from "react-navigation";
import { Icon } from "./list_utils";
import Header from "./header";
import About from "./about";
import { LoadingSpinner } from "cadec-2018-styles/native";
import { ContentContainer } from "cadec-2018-styles/native";

const LoadingAbout = LoadingSpinner(({screenProps: {loading}}) => loading)(About);

class AboutScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "About",
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: () => <Icon icon={"ios-home-outline"} />
  };
  render() {
    return (
      <ContentContainer>
        <LoadingAbout {...this.props} />
      </ContentContainer>
    );
  }
}

export default StackNavigator(
  {
    About: {
      screen: AboutScreen
    }
  },
  {
    headerMode: "screen",
    navigationOptions: {
      header: Header
    }
  }
);
