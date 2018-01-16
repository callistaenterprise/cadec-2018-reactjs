import React from "react";
import { TouchableOpacity } from "react-native";
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
  TouchableOpacityItem
} from "cadec-2018-styles/native";
import { dateUtils } from "cadec-2018-utils";
export const TalkHeader = ({ section: { key } }) => (
  <TalkRowDivider>
    <Header3>{dateUtils.formattedTime(key)}</Header3>
  </TalkRowDivider>
);
export const TalkItem = ({ item, navigation }) => {
  return (
    <TalkRow>
      <TalkRowContent>
        <TouchableOpacityItem
          onPress={() => navigation.navigate("TalkDetails", { talk: item })}
          flex={0.8}
        >
          <Container>
            <Header3>{item.title}</Header3>
            {item.speakers.map(speaker => (
              <Text3 key={`speaker-${speaker.imageName}`}>{speaker.name}</Text3>
            ))}
          </Container>
        </TouchableOpacityItem>
        <Item flex={0.2}>
          {item.speakers.map(speaker => (
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
