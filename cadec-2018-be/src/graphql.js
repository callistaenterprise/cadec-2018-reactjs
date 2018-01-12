import * as server from "apollo-server-lambda";
// import { schema } from "./schema";
import { schema } from "./cadec_schema";
const CORS_ORIGIN = "http://localhost:3000";

export const graphqlHandler = (event, context, callback) => {
  const requestOrigin = event.headers.origin;
  const callbackFilter = function(error, output) {
    let origin = "*";
    if (requestOrigin === CORS_ORIGIN) {
      origin = CORS_ORIGIN;
    }
    output.headers["Access-Control-Allow-Origin"] = origin;
    output.headers["Access-Control-Allow-Credentials"] = "true";
    callback(error, output);
  };
  return server.graphqlLambda({ schema, debug: true })(
    event,
    context,
    callbackFilter
  );
};

export const graphiqlHandler = server.graphiqlLambda({
  endpointURL: process.env.IS_OFFLINE ? "/graphql" : "/dev/graphql"
});
