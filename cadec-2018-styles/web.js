import React from "react";
import styled from "styled-components";
import * as styles from "./main_style";
import * as speakers from "./speakers";
import headerBackground from "./images/cadec-2018-header.jpg";
import SpinnerWhileLoading from "./spinner_while_loading";
import Spinner from "react-spinkit";
export const LoadingSpinner = SpinnerWhileLoading(() => (
  <Spinner name={"three-bounce"} fadeIn={0}/>
));

const FlexMain = styled.div`
  ${styles.FlexMainStyle};
  height: 100vh;
`;

const FlexItem = styled.div`${styles.FlexItemStyle};`;

export const Container = FlexMain.extend``;

export const MainContainer = FlexMain.extend`
  ${styles.MainContainerStyle};
  font-family: "Adobe Caslon Pro";
  font-weight: normal;
  font-style: normal;
`;

export const HeaderContainer = FlexItem.extend`
  ${styles.HeaderContainerStyle};
  background-blend-mode: multiply;
  background-image: url('${headerBackground}');
  background-size: 100% 100%;
  background-color: rgb(65, 66, 141);
  flex: 0.45;
  padding-top: 15px;
`;

export const HeaderText = styled.span`${styles.HeaderItemStyle};`;

export const HeaderUnderDate = styled.span`${styles.HeaderUnderDate};`;

export const HeaderUnderSub = styled.span`${styles.HeaderUnderSub};`;

export const Header1 = styled.span`${styles.Header1};`;

export const Header2 = styled.span`${styles.Header2};`;

export const Header3 = styled.span`${styles.Header3};`;

export const Header4 = styled.span`${styles.Header4};`;

export const Text4 = styled.span`
  flex: 0 1 60%;
  ${styles.Text4};
`;

export const TextRow = styled.div`${styles.TextRow};`;

export const AboutContainer = styled.div`${styles.AboutContainer};`;
export const AboutInfo = styled.div`${styles.AboutInfo};`;
export const AboutDescription = styled.div`${styles.AboutDescription};`;

export const ContentContainer = FlexItem.extend`
  ${styles.ContentContainerStyle};
  color: #000;
  overflow-x: auto;
`;

// ---- tabs
export const TabContainer = styled.div`
  ${styles.TabContainerStyle};
  border-top: 1px solid rgb(115, 195, 182);
`;

export const TabButton = styled.div`
  ${styles.TabButton};
  font-family: "Interstate";
  &:hover {
    background-color: rgb(202, 232, 227);
  }
`;

// ---- talks
export const TalkRow = styled.div`${styles.TalkRow};`;

export const TalkRowDivider = styled.div`${styles.TalkRowDivider};`;

export const TalkRowContent = styled.div`
  ${styles.TalkRowContent};
  &:hover {
    background-color: rgba(202, 200, 227, 0.3);
  }
  a:link,
  a:visited,
  a.active,
  a.hover {
    text-decoration: none;
    color: #000;
  }
`;

export const TalkRowText = styled.div`${styles.TalkRowText};`;

export const SpeakerImage = styled.div`
  ${speakers.SpeakerImage};
  background-image: url('${speakers.getImage}')
  background-size: cover;
  background-position: center;
`;

// ---- talk details
export const TalkDetailsContainer = styled.div`${styles.TalkDetailsContainer};`;

export const TalkDetailHeader = styled.div`${styles.TalkDetailHeader};`;

export const TalkDetailHeaderSpeaker = styled.span`
  ${styles.TalkDetailHeaderSpeaker};
`;

export const TalkDetailsSpeakerName = styled.span`
  ${styles.TalkDetailsSpeakerName};
`;
export const TalkDetailHeaderDivider = styled.hr`
  ${styles.TalkDetailHeaderDivider};
  border-top: 1px dotted grey;
`;
// ---- buttons
export const SelectionButton = styled.button`${styles.SelectionButtonStyle};`;
export const SelectionButtonText = styled.span`
  ${styles.SelectionButtonTextStyle};
`;
