// graphql-tools combines a schema string with resolvers.
import { makeExecutableSchema } from "graphql-tools";
import * as R from "ramda";
import * as eventsDynamo from "./events_dynamo";

// Construct a schema, using GraphQL schema language
const typeDefs = `
type Event{
  id: ID!
  title: String
  title2: String
  address: String
  latlng: String
  afterCadec: String
  shortDescription: String
  date: String
  time: String
  description: String
  talks(tags: String): [Talk]
}
type Talk{
  id: ID!
  title: String
  eventId: String 
  description: String
  startDate: String
  speakers: [Speaker]
}
type Speaker{
  id: ID!
  avatarUrl: String
  bio: String
  github: String
  name: String
  twitter: String
}
type Query {
  event(id: String!): Event
  events: [Event]
}
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    event: (root, { id }, context) => eventsDynamo.getEvent(id),
    events: (root, args, context) => eventsDynamo.getEvents()
  },
  Event: {
    talks: (args, { tags = "" }) => {
    tags = R.replace(/\*/g, "", tags);
      return R.pipe(
        R.propOr({}, "talks"),
        R.values,
        R.when(
          R.always(R.complement(R.isEmpty)(tags)),
          R.filter(
            R.anyPass([
              R.propSatisfies(R.test(new RegExp(tags)), "title"),
              R.pipe(
                R.prop("speakers"),
                R.filter(R.propSatisfies(R.test(new RegExp(tags)), "name")),
                // speakers => {
                //   console.log("---after filter", speakers);
                //   return speakers;
                // },
                R.complement(R.isEmpty)
              ),
              R.propSatisfies(R.test(new RegExp(tags)), "description")
            ])
          )
        )
      )(args);
    }
  },
  Talk: {
    speakers: R.propOr([], "speakers")
  }
};

// Required: Export the GraphQL.js schema object as "schema"
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});