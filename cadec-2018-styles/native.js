import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Link } from "react-router-native";
import styled from "styled-components/native";
import MarkdownRenderer from "react-native-easy-markdown";
import * as styles from "./main_style";
import * as speakers from "./speakers";
export { default as LoadFontsHoc } from "./native_fonts";
import headerBackground from "./images/cadec-2018-header-native.jpg";

const { width: WINDOW_WIDTH } = Dimensions.get("window");

const FlexMain = styled.View`
  ${styles.FlexMainStyle};
`;

const FlexItem = styled.Text`
  ${styles.FlexItemStyle};
`;

export const Container = FlexMain.extend``;

export const MainContainer = FlexMain.extend`
  ${styles.MainContainerStyle};
`;

export const HeaderContainer = FlexMain.extend`
  ${styles.HeaderContainerStyle};
  background-color: transparent;
`;
export const HeaderBackgroundImage = styled.Image`
  flex: 1;
  resize-mode: stretch;
`;

const ImageContainer = styled.View`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const HeaderBackground = () => (
  <ImageContainer>
    <HeaderBackgroundImage source={headerBackground} />
  </ImageContainer>
);

export const HeaderBackgroundGL = () => (
  <ImageContainer>
    <Surface style={s.surface}>
      <ColorBlending color={[0.1, 0.9, 0.1, 1]}>
        <Image source={headerBackground} />
      </ColorBlending>
    </Surface>
  </ImageContainer>
);

const s = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white"
  },
  imageWrapper: {
    flex: 1,
    alignItems: "stretch"
  },
  surface: {
    width: WINDOW_WIDTH,
    height: 300
  }
});

export const HeaderText = styled.Text`
  ${styles.HeaderItemStyle};
  color: #fff;
`;

export const HeaderUnderDate = styled.Text`
  ${styles.HeaderUnderDate};
  color: #fff;
`;

export const HeaderUnderSub = styled.Text`
  ${styles.HeaderUnderSub};
  color: #fff;
`;

// ---- Header text
export const Header1 = styled.Text`
  ${styles.Header1};
`;

export const Header3 = styled.Text`
  ${styles.Header3};
`;

export const Header4 = styled.Text`
  ${styles.Header4};
`;

export const Text3 = styled.Text`
  ${styles.Text3};
`;

export const Text4 = styled.Text`
  ${styles.Text4};
`;

export const TextRow = styled.View`
  ${styles.TextRow};
`;

export const ContentContainer = styled.ScrollView`
  ${styles.ContentContainerStyle};
`;

// ---- about
export const AboutInfo = styled.View`
  ${styles.AboutInfo};
`;

export const AboutContainer = styled.View`
  ${styles.AboutContainer};
`;

export const AboutDescription = styled.View`
  ${styles.AboutDescription};
`;

// ---- tabs
export const TabButton = styled.View`
  ${styles.TabButton};
`;
export const TabContainer = FlexMain.extend`
  ${styles.TabContainerStyle};
`;

// ---- talks
const _flex = ({ flex }) => (flex ? `flex: ${flex};` : "");

export const Item = styled.View`
  ${_flex};
`;

export const LinkItem = styled(Link)`
  ${_flex};
`;

export const TouchableOpacityItem = styled.TouchableOpacity`
  ${_flex};
`;

export const TalkRow = styled.View`
  ${styles.TalkRow};
`;

export const FlexRow = styled.View`
  ${styles.FlexRow};
`;

export const TalkRowDivider = styled.View`
  ${styles.TalkRowDivider};
`;

export const TalkRowContent = styled.View`
  ${styles.TalkRowContent};
`;

export const TalkRowText = styled.View`
  ${styles.TalkRowText};
`;

// export const SpeakerImage = styled.View`
//   ${speakers.SpeakerImage};
//   background-image: url('${speakers.getImage}')
// `;

// export const SpeakerImage = ({ speaker }) => (
//   <Image style={nstyles.image} source={speakers.getImage({ speaker })} />
// );

export const SCImage = styled.Image`
  ${speakers.SpeakerImageNative};
`;

export const SpeakerImage = ({ speaker }) => (
  <SCImage source={speakers.getImage({ speaker })} />
);
export const SpeakerContainer = () => <View style={nstyles.imageContainer} />;

const nstyles = StyleSheet.create({
  image: {
    flex: 0,
    width: 64,
    height: 64,
    resizeMode: "cover",
    borderRadius: 32
  },
  imageContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "rgba(0,0,0,0.1)",
    marginRight: 15
  }
});

// ---- talk details
export const TalkDetailsContainer = styled.ScrollView`
  ${styles.TalkDetailsContainer};
  flex: 1;
  flex-direction: column;
`;

export const TalkDetailHeader = styled.Text`
  ${styles.TalkDetailHeader};
`;

export const TalkDetailHeaderSpeaker = styled.Text`
  ${styles.TalkDetailHeaderSpeaker};
`;

export const TalkDetailsSpeakerName = styled.Text`
  ${styles.TalkDetailsSpeakerName};
  ${_flex};
`;

export const TalkDetailHeaderDivider = styled.View`
  border-top-width: 1;
  border-top-color: grey;
  flex: 1;
`;

// ---- buttons
export const SelectionButton = styled.TouchableHighlight`
  ${styles.SelectionButtonStyle};
`;
export const SelectionButtonText = styled.Text`
  ${styles.SelectionButtonTextStyle};
`;

// ---- markdown
export const Markdown = ({ children }) => (
  <MarkdownRenderer
    markdownStyles={{
      text: {
        fontSize: 20,
        fontFamily: "Adobe Caslon Pro"
      }
    }}
  >
    {children}
  </MarkdownRenderer>
);
