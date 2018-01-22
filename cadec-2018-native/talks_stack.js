import React from "react";
import { StackNavigator } from "react-navigation";
import { Icon } from "./list_utils";
import TalkDetails from "./talk_details_stack";
import Talks from "./talks_container";
import Header from "./header";

class TalksStack extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: "Talks",
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  });
  componentDidMount() {
    this.props.navigation.setParams({
      before: this.props.before
    });
  }
  render() {
    return <Talks {...this.props} />;
  }
}
export default StackNavigator(
  {
    Talks: {
      screen: TalksStack
    },
    TalkDetails: {
      screen: TalkDetails
    }
  },
  {
    headerMode: "screen",
    navigationOptions: {
      header: Header,
      tabBarIcon: () => <Icon icon={"ios-contacts-outline"} />
    }
  }
);
