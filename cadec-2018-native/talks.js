import React from "react";
import Talk from "./talk";
import { Text3, Container } from "cadec-2018-styles/native";

export default ({ screenProps: { talks = [] } }) => {
  return (
    <Container>
      {talks.map(talk => (
        <Talk key={`talk-${talk.id}`} talk={talk} speakers={talk.speakers} />
      ))}
    </Container>
  );
};
