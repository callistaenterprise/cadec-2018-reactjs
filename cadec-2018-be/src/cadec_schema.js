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
  dateText: String
  time: String
  place: String
  description: String
  talks(tags: String, period: String): [Talk]
}
type Talk{
  id: ID!
  title: String
  eventId: String 
  description: String
  startDate: String
  stars: Float
  totalStars: Float
  totalDevices: Int
  deviceStars: [Star]
  speakers: [Speaker]
  speakerNames: String
}
type Star{
  deviceId: ID!
  stars: Float 
}
type Speaker{
  id: ID!
  imageName: String
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
type Mutation {
  updateStars(cadecId: String, deviceId: String, talkId: String, stars: Float): Event
}
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    event: (root, { id }, context) => eventsDynamo.getEvent(id),
    events: (root, args, context) => eventsDynamo.getEvents()
  },
  Mutation: {
    updateStars: (_, { cadecId, talkId, deviceId, stars }) => {
      // console.log("--- props", cadecId, deviceId, talkId, stars);
      const event = eventsDynamo.updateStars(cadecId, talkId, deviceId, stars);
      // console.log("----- event", JSON.stringify(event, null, 2));
      return event;
    }
  },
  Event: {
    talks: (args, { tags = "", period }) => {
      tags = R.replace(/\*/g, "", tags);
      return R.pipe(
        R.propOr({}, "talks"),
        R.values,
        R.when(
          R.anyPass([
            R.always(R.complement(R.isEmpty)(tags)),
            R.always(R.complement(R.isNil)(period))
          ]),
          R.filter(
            R.allPass([
              R.when(
                R.always(R.complement(R.isNil)(period)),
                R.ifElse(
                  R.always(R.equals("before", period)),
                  R.propSatisfies(id => id <= 5, "id"),
                  R.propSatisfies(id => id >= 5, "id")
                )
              ),
              R.when(
                R.always(R.complement(R.isEmpty)(tags)),
                R.anyPass([
                  R.propSatisfies(R.test(new RegExp(tags)), "title"),
                  R.pipe(
                    R.prop("speakers"),
                    R.filter(R.propSatisfies(R.test(new RegExp(tags)), "name")),
                    // speakers => {
                    //   // console.log("---after filter", speakers);
                    //   return speakers;
                    // },
                    R.complement(R.isEmpty)
                  ),
                  R.propSatisfies(R.test(new RegExp(tags)), "description")
                ])
              )
            ])
          )
        )
      )(args);
    }
  },
  Talk: {
    speakers: R.propOr([], "speakers"),
    stars: R.pipe(
      R.propOr({}, "stars"),
      R.values,
      R.reduce(
        (acc, val) => ({stars: acc.stars + val, count: acc.count + 1}),
        {stars: 0, count: 0}
      ),
      starAcc => {
        return starAcc.stars > 0 ? starAcc.stars / starAcc.count : 0;
      }
    ),
    deviceStars: ({stars = {}}) => {
      const deviceStars = R.pipe(
        R.keys,
        R.reduce(
          (acc, key) => [...acc, {deviceId: key, stars: stars[key]}],
          []
        )
      )(stars);
      return deviceStars;
    },
    totalStars: ({stars = {}}) => {
      const totalStars = R.pipe(
        R.keys,
        R.reduce((acc, key) => acc + stars[key], 0)
      )(stars);
      return totalStars;
    },
    totalDevices: ({stars = {}}) => {
      const totalDevices = R.keys(stars).length;
      return totalDevices;
    },
    speakerNames: ({speakers}) => {
      console.log("speakers", speakers);
      return R.reduce((acc, speaker) => `${acc} ${speaker.name}`, "")(speakers)
    }
  }

};

// Required: Export the GraphQL.js schema object as "schema"
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
