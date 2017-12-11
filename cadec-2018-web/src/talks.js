import React from "react";
import Talk from "./talk";
import * as cadecSelectors from "./cadec_selectors";
export default ({ cadecState, year, talks}) => (
  <ul>
    {Object.values(talks).map( talk => <Talk talk={talk} speakers={talk.speakers} cadecState={cadecState}/>)}
  </ul>
);
