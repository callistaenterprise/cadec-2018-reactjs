import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Talks from "./talks";
import { calc } from "cadec-2018-api";
import { MainContainer, ContentContainer } from "cadec-2018-styles/web";
import Header from "./header";
import Tabs from "./tabs_container";
import About from "./about";
import TalkDetails from "./talk_details";

export default ({ data: { event } }) => {
  return (
    <Router>
      <MainContainer>
        <Header {...event} />
        <ContentContainer>
          <Route exact path="/" render={() => <About {...event} />} />
          <Route exact path="/talks" render={() => <Talks {...event} />} />
          <Route
            path="/talks/:talkId"
            render={({ match: { params: { talkId } } }) => (
              <TalkDetails talkId={talkId} {...event} />
            )}
          />
        </ContentContainer>
        <Tabs />
      </MainContainer>
    </Router>
  );
};
