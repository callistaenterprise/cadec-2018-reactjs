import React from "react";
import { Link } from "react-router-native";
import {
  Container,
  Text3,
  Header3,
  TalkRow,
  TalkRowDivider,
  TalkRowContent,
  TalkRowText,
  SpeakerImage,
  Item,
  LinkItem
} from "cadec-2018-styles/native";
import { dateUtils } from "cadec-2018-utils";
export default ({
  talk: { id, title, description, time, startDate },
  year,
  speakers = []
}) => {
  return (
    <TalkRow>
      <TalkRowDivider>
        <Header3>{dateUtils.formattedTime(startDate)}</Header3>
      </TalkRowDivider>
      <TalkRowContent>
        <LinkItem to={`/talks/${id}`} flex={0.8}>
          <Container>
            <Header3>{title}</Header3>
            {speakers.map(speaker => (
              <Text3 key={`speaker-${speaker.imageName}`}>{speaker.name}</Text3>
            ))}
          </Container>
        </LinkItem>
        <Item flex={0.2}>
          {speakers.map(speaker => (
            <SpeakerImage
              key={`speaker-${speaker.imageName}`}
              speaker={speaker.imageName}
            />
          ))}
        </Item>
      </TalkRowContent>
    </TalkRow>
  );
};
