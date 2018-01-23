import React from "react";
import { TalkItem, TalkHeaderContainer } from "./talk_stack";
import { View, Text, SectionList } from "react-native";
import { compose, withState, withProps, withStateHandlers } from "recompose";
import * as listUtils from "./list_utils";
import { TalksContainer } from "cadec-2018-styles/native";
import { SearchBar } from "react-native-elements";
import { searchUtils } from "cadec-2018-utils";

const _withState = withState("tagsValue", "setTagsValue", "");

class Talks extends React.Component {
  static navigationOptions = {};

  render() {
    const {
      navigation,
      tagsValue,
      setTagsValue,
      screenProps: { event: { talks = [] } }
    } = this.props;
    const filteredTalks = searchUtils.filterOnTags(tagsValue, talks);
    const sectionTalks = listUtils.talksToSections(filteredTalks);
    return (
      <TalksContainer>
        <SearchBar
          lightTheme
          onChangeText={setTagsValue}
          onClearText={() => ({})}
          icon={{ type: "font-awesome", name: "search" }}
          round
          value={tagsValue}
          containerStyle={{ backgroundColor: "#DCEDEA" }}
          placeholder={"Title, Description, Name, Time"}
        />
        <SectionList
          removeClippedSubviews={false}
          sections={sectionTalks}
          onRefresh={listUtils.handleRefreshAsync}
          refreshing={false}
          renderSectionHeader={props => <TalkHeaderContainer {...props}/>}
          keyExtractor={item => item.id}
          renderItem={props => <TalkItem {...props} navigation={navigation} />}
        />
      </TalksContainer>
    );
  }
}

export default compose(_withState)(Talks);
