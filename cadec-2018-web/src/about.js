import React from "react";
import MarkdownRenderer from "react-markdown-renderer";
import {
  Header1,
  AboutInfo,
  AboutDescription,
  Header4,
  Text4,
  TextRow,
  AboutContainer
} from "cadec-2018-styles/web";
export default ({
  title,
  title2,
  address,
  latlng,
  afterCadec,
  shortDescription,
  date,
  dateText,
  time,
  description
}) => (
  <AboutContainer>
    <Header1>{shortDescription}</Header1>
    <AboutDescription>
      <MarkdownRenderer markdown={description} />
    </AboutDescription>
    <AboutInfo>
      <TextRow>
        <Header4>Datum</Header4>
        <Text4>{dateText}</Text4>
      </TextRow>
      <TextRow>
        <Header4>Tid</Header4>
        <Text4>{time}</Text4>
      </TextRow>
      <TextRow>
        <Header4>Plats</Header4>
        <Text4>{address}</Text4>
      </TextRow>
      <TextRow>
        <Header4>After Cadec</Header4>
        <Text4>{afterCadec}</Text4>
      </TextRow>
    </AboutInfo>
  </AboutContainer>
);
