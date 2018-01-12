import styled from "styled-components/native";
import * as styles from "./main_style";

const FlexMain = styled.View`
  ${styles.FlexMainStyle};
`;

const FlexItem = styled.Text`
  ${styles.FlexItemStyle};
`;

export const MainContainer = FlexMain.extend`
  ${styles.MainContainerStyle};
`;

export const HeaderContainer = FlexMain.extend`
  ${styles.HeaderContainerStyle};
`;

export const HeaderText = styled.Text`
  ${styles.HeaderItemStyle};
`;

export const ContentContainer = FlexItem.extend`
  ${styles.ContentContainerStyle};
`;

export const TabContainer = FlexMain.extend`
  ${styles.TabContainerStyle};
`;

// ---- buttons
export const SelectionButton = styled.TouchableHighlight`
  ${styles.SelectionButtonStyle};
`;
export const SelectionButtonText = styled.Text`
  ${styles.SelectionButtonTextStyle};
`;
