import React from "react";
import {
  HeaderContainer,
  HeaderBackground,
  HeaderText,
  HeaderUnderSub,
  HeaderUnderDate
} from "cadec-2018-styles/native";
export default ({ screenProps: { event: { title, title2, date } } }) => (
  <HeaderContainer>
    <HeaderBackground />
    <HeaderText>{title}</HeaderText>
    <HeaderUnderSub>{title2}</HeaderUnderSub>
    <HeaderUnderDate>{date}</HeaderUnderDate>
  </HeaderContainer>
);
