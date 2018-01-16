import React from "react";
import { TalkItem, TalkHeader } from "./talk_stack";
import { View, Text, SectionList } from "react-native";
import Header from "./header";
import * as listUtils from "./list_utils";

export default class Talks extends React.Component {
  static navigationOptions = {};
  render() {
    const { screenProps: { talks = [], ...rest }, navigation } = this.props;
    const sectionTalks = listUtils.talksToSections(talks);
    return (
      <View
        style={{
          flex: 1,
          alignSelf: "stretch"
        }}
      >
        <SectionList
          removeClippedSubviews={false}
          sections={sectionTalks}
          onRefresh={listUtils.handleRefreshAsync}
          refreshing={false}
          renderSectionHeader={TalkHeader}
          keyExtractor={item => item.id}
          renderItem={props => <TalkItem {...props} navigation={navigation} />}
        />
      </View>
    );
  }
}
