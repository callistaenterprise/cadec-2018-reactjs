import React from "react";
import { compose, mapProps } from "recompose";
import * as R from "ramda";
import MarkdownRenderer from "react-markdown-renderer";
import Speakers from "./speakers";
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
  TalkDetailHeaderDivider
} from "cadec-2018-styles/web";
const TalkDetails = ({ title, description, time, start, speakers = [] }) => (
  <TalkDetailsContainer>
    <TalkDetailHeader>{title}</TalkDetailHeader>
    <TalkDetailHeaderDivider />
    <time>
      <span>{start}</span>
      <span>{time}</span>
    </time>
    <TalkDetailHeaderSpeaker>
      {speakers.map(speaker => (
        <TalkDetailsSpeakerName>{speaker.name}</TalkDetailsSpeakerName>
      ))}
    </TalkDetailHeaderSpeaker>
    <MarkdownRenderer markdown={description} />
  </TalkDetailsContainer>
);

export default compose(
  mapProps(({ talkId, talks = [] }) => ({
    ...R.find(R.propEq("id", `${talkId}`))(talks)
  }))
)(TalkDetails);
