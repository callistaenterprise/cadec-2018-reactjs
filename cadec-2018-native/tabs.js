import React from "react";
import { TabContainer } from "cadec-2018-styles/native";
import TabButton from "./tab_button";
export default ({ about, before, after }) => {
  return (
    <TabContainer>
      <TabButton text={"About"} icon={"ios-home-outline"} action={about} />
      <TabButton text={"Early"} icon={"ios-calendar-outline"} action={before} />
      <TabButton text={"Later"} icon={"ios-calendar"} action={after} />
    </TabContainer>
  );
};
