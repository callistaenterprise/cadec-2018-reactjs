import React from "react";
import { TabContainer } from "cadec-2018-styles/web";
import TabButton from "./tab_button";
export default ({ about, before, after }) => {
  return (
    <TabContainer>
      <TabButton
        text={"About"}
        icon={"ios-home-outline"}
        link={"/"}
        action={about}
      />
      <TabButton
        text={"Early"}
        icon={"ios-calendar-outline"}
        link={"/talks?period=before"}
        action={before}
      />
      <TabButton
        text={"Later"}
        icon={"ios-calendar"}
        link={"/talks?period=after"}
        action={after}
      />
    </TabContainer>
  );
};
