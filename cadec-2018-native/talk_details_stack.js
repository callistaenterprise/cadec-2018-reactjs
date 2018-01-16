import React from "react";
import { compose, mapProps } from "recompose";
import * as R from "ramda";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Icon } from "./list_utils";
import MarkdownRenderer from "react-native-easy-markdown";
import {
  TalkDetailsContainer,
  TalkDetailHeader,
  TalkDetailHeaderSpeaker,
  TalkDetailsSpeakerName,
  FlexRow,
  TalkRowDivider,
  TalkRowContent,
  TalkRowText,
  SpeakerImage,
  TalkDetailHeaderDivider,
  Text4,
  Item,
  Markdown
} from "cadec-2018-styles/native";
const TalkDetails = ({
  navigation: {
    goBack,
    state: {
      params: { talk: { title, description, time, start, speakers = [] } }
    }
  }
}) => {
  return (
    <TalkDetailsContainer>
      <TouchableOpacity onPress={() => goBack()}>
        <Icon icon={"ios-arrow-back"} size={30} />
        <TalkDetailHeader>{title}</TalkDetailHeader>
      </TouchableOpacity>
      <TalkDetailHeaderDivider />
      <Item>
        <Text4>{start}</Text4>
        <Text4>{time}</Text4>
      </Item>
      <Item>
        {speakers.map(speaker => (
          <View key={`speaker-${speaker.name}`} style={styles.container}>
            <TalkDetailsSpeakerName flex={0.7}>
              {speaker.name}
            </TalkDetailsSpeakerName>
            <Item flex={0.3}>
              <SpeakerImage speaker={speaker.imageName} />
            </Item>
          </View>
        ))}
      </Item>
      <Markdown>{description}</Markdown>
    </TalkDetailsContainer>
  );
};

export default class TalkDetailsStack extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    gesturesEnabled: true
  });
  render() {
    return <TalkDetails {...this.props} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: 16,
    marginBottom: 16
  }
});
