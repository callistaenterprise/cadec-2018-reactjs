import React from "react";
import { Constants } from "expo";
import { compose, mapProps } from "recompose";
import * as R from "ramda";
import MarkdownRenderer from "react-native-markdown-renderer";
import {
  TalkDetailsContainer,
  TalkDetailHeader,
  TalkDetailHeaderSpeaker,
  TalkDetailsSpeakerName,
  TalkRow,
  TalkRowDivider,
  TalkRowContent,
  TalkRowText,
  SpeakerImage,
  TalkDetailHeaderDivider,
  Text4,
  Item
} from "cadec-2018-styles/native";
const TalkDetails = ({ title, description, time, start, speakers = [] }) => {
  return (
    <TalkDetailsContainer>
      <TalkDetailHeader>{title}{Constants.deviceId}</TalkDetailHeader>
      <TalkDetailHeaderDivider />
      <Item>
        <Text4>{start}</Text4>
        <Text4>{time}</Text4>
      </Item>
      <TalkDetailHeaderSpeaker>
        {speakers.map(speaker => (
          <TalkDetailsSpeakerName key={`speaker-${speaker.name}`}>
            {speaker.name}
          </TalkDetailsSpeakerName>
        ))}
      </TalkDetailHeaderSpeaker>
      <MarkdownRenderer>{description}</MarkdownRenderer>
    </TalkDetailsContainer>
  );
};

export default compose(
  mapProps(({ talkId, talks = [] }) => ({
    ...R.find(R.propEq("id", `${talkId}`))(talks)
  }))
)(TalkDetails);
