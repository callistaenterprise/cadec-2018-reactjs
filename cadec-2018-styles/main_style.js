// ---- main styles
export const FlexMainStyle = `
display: flex;
flex: 1;
`;

export const FlexItemStyle = `
  color: white;
`;

export const MainContainerStyle = `
  flex-direction: column;
  justify-content: flex-start;
`;

export const HeaderContainerStyle = `
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  flex: 0.3;
  width: 100%;
`;

export const HeaderItemStyle = `
  font-size: 35px;
  font-family: 'SparTakus';
  font-style: normal;
`;

export const HeaderUnderSub = `
  padding-top: 30px;
  font-size: 20px;
  font-family: 'Interstate';
  font-style: normal;
`;

export const HeaderUnderDate = `
  font-size: 15px;
  font-family: 'Interstate';
  font-style: normal;
`;

export const Header1 = `
  font-size: 25px;
  font-family: 'Interstate Bold';
  font-style: normal;
`;

export const Header2 = `
  font-size: 18px;
  font-family: 'Interstate Bold';
  font-style: normal;
`;

export const Header3 = `
  font-size: 15px;
  font-family: 'Interstate Bold';
  font-style: normal;
  flex: 1;
`;

export const Header4 = `
  font-size: 12px;
  font-family: 'Interstate Bold';
  font-style: normal;
  flex: 0.3 0
`;

export const Text3 = `
  font-size: 15px;
  font-family: 'Interstate';
  font-style: normal;
`;

export const Text4 = `
  font-size: 12px;
  font-family: 'Interstate';
  font-style: normal;
  align-self: flex-start;
  flex: 0.7 1
`;

export const TextRow = `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
`;

export const FlexRow = `
  flex: 1 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom:15px;
`;

export const TalkRow = `
  flex: 1 0;
  display: flex;
  flex-direction: column;
`;

export const TalkRowDivider = `
  background-color: rgb(115, 195, 182);
  padding: 15px;
  height: 45;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const TalkRowContent = `
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  background-color: rgb(202, 232, 227);
`;

export const TalkRowText = `
  flex: 0 1 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10px;
`;

export const AboutContainer = `
  padding: 10px;
  `;

export const AboutDescription = `
  padding: 10px 0px;
  `;
export const AboutInfo = `
  background-color: rgb(216, 238, 234);
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const ContentContainerStyle = `
  background-color: rgb(202, 232, 227);
  flex: 2 0;
`;

export const TabContainerStyle = `
  align-self: flex-end;
  display: flex;
  flex: 0.2;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 5px;
  background: rgb(216, 238, 234);
  `;

export const TabButton = `
  display: flex;
  flex: 1 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
`;

export const SelectionButtonStyle = `
    background: #3140DC;
    padding: 20px 8px;
    border-radius: 15px;
    opacity: 0.5;
    width: 80px;
`;

export const SelectionButtonSelectedStyle = `
    opacity: 1;
`;

export const SelectionButtonTextStyle = `
  font-family: 'Interstate';
  color: #000;
  font-size: 15px;
 `;

// ---- talk details
export const TalkDetailsContainer = `
  background-color: rgb(202, 232, 227);
  padding: 10px;
 `;
export const TalkDetailsSpeakerName = `
  font-size: 20px;
  font-family: 'Interstate LightItalic';
  padding-right: 10px;
 `;
export const TalkDetailHeader = `
  ${Header2}
 `;

export const TalkDetailHeaderSpeaker = `
  font-size: 20px;
  font-family: 'Interstate LightItalic';
 `;

export const TalkDetailHeaderDivider = `
  border-bottom: 0px;
`;

export const TalksContainer = `
  background-color: rgb(202, 232, 227);
  flex: 1;
  align-self: stretch;
`;
