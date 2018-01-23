import React from "react";
import { TouchableOpacity } from "react-native";
import {
  compose,
  withHandlers,
  withStateHandlers,
  withPropsOnChange
} from "recompose";
import { Rating } from "react-native-elements";
import StarRating from "react-native-star-rating";
import { Constants } from "expo";
import { api } from "cadec-2018-api";
import * as R from "ramda";
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
import star from "cadec-2018-styles/images/star.png";

import { dateUtils } from "cadec-2018-utils";
export const TalkHeader = ({ section: { key }, stars, updateStars }) => (
  <TalkRowDivider>
    <Header3>{dateUtils.formattedTime(key)}</Header3>
    <StarRating
      disabled={false}
      maxStars={5}
      rating={stars}
      selectedStar={updateStars}
    />
  </TalkRowDivider>
);
export const TalkItem = ({ item, navigation, mutate }) => {
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

export const TalkHeaderContainer = compose(
  api.updateStars,
  withStateHandlers(
    ({ section: { data } }) => ({
      talk: data[0],
      stars: R.pipe(
        R.pathOr([], ["deviceStars"]),
        R.find(R.propEq("deviceId", Constants.deviceId)),
        R.pathOr(0, ["stars"])
      )(data[0])
    }),
    { updateTalkStars: (state, props) => stars => ({ stars }) }
  ),
  withHandlers({
    updateStars: ({ updateTalkStars, mutate, section: { data } }) => stars => {
      const item = data[0];
      console.log("***** item", item.id, stars);
      mutate({
        variables: {
          cadecId: "cadec2018",
          talkId: item.id,
          deviceId: Constants.deviceId,
          stars
        }
      }).then(res => {
        console.log(res);
        const stars = R.pipe(
          R.pathOr([], ["data", "updateStars", "talks"]),
          R.find(R.propEq("id", item.id)),
          R.pathOr([], ["deviceStars"]),
          R.find(R.propEq("deviceId", Constants.deviceId)),
          R.pathOr(0, ["stars"])
        )(res);
        console.log("---- stars", stars);
        updateTalkStars(stars);
      });
    }
  })
)(TalkHeader);
