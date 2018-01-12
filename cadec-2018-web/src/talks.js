import React from "react";
import Talk from "./talk";
export default ({ cadecState, year, talks = [] }) => (
  <div>
    {talks.map(talk => (
      <Talk key={`talk-${talk.id}`} talk={talk} speakers={talk.speakers} />
    ))}
  </div>
);
