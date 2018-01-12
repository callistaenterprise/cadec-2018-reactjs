import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ReduxCache } from "apollo-cache-redux";

export default store => {
  console.log("----- store", store);
  const cache = store ? new ReduxCache({ store }) : new InMemoryCache();
  const client = new ApolloClient({
    link: new HttpLink({
      // uri: "http://localhost:3000/graphql"
      uri: "https://x8f5632190.execute-api.eu-west-1.amazonaws.com/dev/graphql"
    }),
    cache
  });
  return C => props => (
    <ApolloProvider client={client}>
      <C {...props} />
    </ApolloProvider>
  );
};
