import styled from "styled-components";
import * as styles from "./main_style";
import * as speakers from "./speakers";

const FlexMain = styled.div`
  ${styles.FlexMainStyle};
  height: 100vh;
`;

const FlexItem = styled.div`
  ${styles.FlexItemStyle};
`;

export const MainContainer = FlexMain.extend`
  ${styles.MainContainerStyle};
`;

export const HeaderContainer = FlexItem.extend`
  ${styles.HeaderContainerStyle};
`;

export const HeaderText = styled.span`
  ${styles.HeaderItemStyle};
`;

export const HeaderUnderDate = styled.span`
  ${styles.HeaderUnderDate};
`;

export const HeaderUnderSub = styled.span`
  ${styles.HeaderUnderSub};
`;

export const Header1 = styled.span`
  ${styles.Header1};
`;

export const Header2 = styled.span`
  ${styles.Header2};
`;

export const Header3 = styled.span`
  ${styles.Header3};
`;

export const Header4 = styled.span`
  ${styles.Header4};
`;

export const Text4 = styled.span`
  ${styles.Text4};
`;

export const TextRow = styled.div`
  ${styles.TextRow};
`;

export const AboutContainer = styled.div`
  ${styles.AboutContainer};
`;
export const AboutInfo = styled.div`
  ${styles.AboutInfo};
`;
export const AboutDescription = styled.div`
  ${styles.AboutDescription};
`;

export const ContentContainer = FlexItem.extend`
  ${styles.ContentContainerStyle};
  overflow-x: auto;
`;

// ---- tabs
export const TabContainer = styled.div`
  ${styles.TabContainerStyle};
`;

export const TabButton = styled.div`
  ${styles.TabButton};
`;

// ---- talks

export const TalkRow = styled.div`
  ${styles.TalkRow};
`;

export const TalkRowDivider = styled.div`
  ${styles.TalkRowDivider};
`;

export const TalkRowContent = styled.div`
  ${styles.TalkRowContent};
`;

export const TalkRowText = styled.div`
  ${styles.TalkRowText};
`;

export const SpeakerImage = styled.div`
  ${speakers.SpeakerImage};
  background-image: url('${speakers.getImage}')
`;

// ---- talk details
export const TalkDetailsContainer = styled.div`
  ${styles.TalkDetailsContainer};
`;

export const TalkDetailHeader = styled.div`
  ${styles.TalkDetailHeader};
`;

export const TalkDetailHeaderSpeaker = styled.span`
  ${styles.TalkDetailHeaderSpeaker};
`;

export const TalkDetailsSpeakerName = styled.span`
  ${styles.TalkDetailsSpeakerName};
`;
export const TalkDetailHeaderDivider = styled.hr`
  ${styles.TalkDetailHeaderDivider};
`;
// ---- buttons
export const SelectionButton = styled.button`
  ${styles.SelectionButtonStyle};
`;
export const SelectionButtonText = styled.span`
  ${styles.SelectionButtonTextStyle};
`;
