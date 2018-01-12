import React from "react";
import {
  HeaderContainer,
  HeaderText,
  HeaderUnderSub,
  HeaderUnderDate
} from "cadec-2018-styles/web";
export default ({ title, title2, date }) => (
  <HeaderContainer>
    <HeaderText>{title}</HeaderText>
    <HeaderUnderSub>{title2}</HeaderUnderSub>
    <HeaderUnderDate>{date}</HeaderUnderDate>
  </HeaderContainer>
);
