import * as server from "apollo-server-lambda";
// import { schema } from "./schema";
import { schema } from "./cadec_schema";

export const graphqlHandler = server.graphqlLambda({ schema, debug: true });

export const graphiqlHandler = server.graphiqlLambda({
  endpointURL: process.env.IS_OFFLINE ? "/graphql" : "/dev/graphql"
});
