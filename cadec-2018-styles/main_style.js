import headerBackground from "./images/cadec-2018-header.jpg";

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
  font-family: 'Adobe Caslon Pro';
  font-weight: normal;
  font-style: normal;
`;

export const HeaderContainerStyle = `
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  flex: 0.6;
  width: 100%;
  background-color: rgb(65, 66, 141);
  background-blend-mode: multiply;
  background-image: url('${headerBackground}');
  background-size: 100% 100%;

  font-family: 'Interstate LightItalic';
	font-weight: 300;
  font-style: italic;
`;

export const HeaderItemStyle = `
  font-size: 35px;
  font-family: 'SparTakus';
  font-style: normal;
`;

export const HeaderUnderSub = `
  padding-top: 30px;
  font-size: 20px;
  font-family: 'Interstate LightCondensed';
  font-style: normal;
`;

export const HeaderUnderDate = `
  font-size: 15px;
  font-family: 'Interstate LightCondensed';
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
`;

export const Header4 = `
  font-size: 12px;
  font-family: 'Interstate Bold';
  font-style: normal;
  flex: 0 1
`;

export const Text4 = `
  flex: 0 1 60%;
  font-size: 12px;
  font-family: 'Interstate';
  font-style: normal;
  align-self: flex-start;
`;

export const TextRow = `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
`;

export const TalkRow = `
  display: flex;
  flex-direction: column;
`;

export const TalkRowDivider = `
  padding-top: 20px;
  background-color: rgb(115, 195, 182);
  padding: 5px;
`;

export const TalkRowContent = `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  background-color: rgb(202, 232, 227);
  &:hover {
    background-color: rgba(202, 200, 227, 0.3);
  };
  a:link, a:visited, a.active, a.hover {
    text-decoration: none;
    color: #000;
  };
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
  background: rgb(216, 238, 234);
  color: #000;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const ContentContainerStyle = `
  background: rgb(202, 232, 227);
  color: #000;
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
  border-top: 1px solid rgb(115, 195, 182);
  `;

export const TabButton = `
  display: flex;
  flex: 1 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
  font-family: 'Interstate';
  &:hover {
    background-color:rgb(202, 232, 227);
  }
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
  padding: 10px;
 `;
export const TalkDetailsSpeakerName = `
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
  border-top: 1px dotted grey;
  border-bottom: 0px;
`;
