import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  //link: new HttpLink({ uri: "http://localhost:3000/graphql" }),
  link: new HttpLink({
    uri: "https://x8f5632190.execute-api.eu-west-1.amazonaws.com/dev/graphql"
  }),
  cache: new InMemoryCache()
});

export default C => props => (
  <ApolloProvider client={client}>
    <C {...props} />
  </ApolloProvider>
);
