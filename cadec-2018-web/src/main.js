import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Spinner from "react-spinkit";
import Talks from "./talks";
import { MainContainer, ContentContainer } from "cadec-2018-styles/web";
import Header from "./header";
import Tabs from "./tabs_container";
import About from "./about";
import TalkDetails from "./talk_details";

export default ({ data: { event, loading } }) => {
  return (
    <Router>
      <MainContainer>
        <Header {...event} />
        {loading ? (
          <ContentContainer style={{width:"400"}}>
            <Spinner name={"three-bounce"} fadeIn={0} />
          </ContentContainer>
        ) : (
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
        )}
        <Tabs />
      </MainContainer>
    </Router>
  );
};
