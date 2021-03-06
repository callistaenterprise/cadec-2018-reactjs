import React from "react";
import { StackNavigator } from "react-navigation";
import { connect } from "react-redux";
import { actions } from "cadec-2018-state";
import { Icon } from "./list_utils";
import TalkDetails from "./talk_details_stack";
import Talks from "./talks_stack";
import Header from "./header";
import { selectors } from "cadec-2018-state";

class TalksEarlier extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: "Early",
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarOnPress: ({ scene, jumpToIndex }) => {
      if (!scene.focused) {
        jumpToIndex(scene.index);
        navigation.state.params.before();
      }
    }
  });
  componentDidMount() {
    this.props.navigation.setParams({
      before: this.props.before
    });
  }
  render() {
    // console.log("********************", this.props);
    console.log("111111");
    return <Talks {...this.props} />;
  }
}
export default StackNavigator(
  {
    Talks: {
      screen: connect(state => ({ tags: selectors.getTags(state) }), actions)(
        TalksEarlier
      )
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
