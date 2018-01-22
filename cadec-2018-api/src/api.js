import { graphql } from "react-apollo";
import gql from "graphql-tag";

const _period = period => (period ? `perdiod: "${period}"` : "");

export const events = graphql(
  gql`
    query event($id: String!, $tags: String, $period: String) {
      event(id: $id) {
        id
        title
        title2
        address
        latlng
        afterCadec
        shortDescription
        date
        dateText
        time
        description
        talks(tags: $tags, period: $period) {
          id
          title
          startDate
          eventId
          description
          speakers {
            name
            imageName
            twitter
            github
            bio
            avatarUrl
          }
        }
      }
    }
  `,
  {
    options: ({ id = "cadec2018", tags = "*", period }) => {
      return {
        variables: { id, tags, period }
      };
    }
  }
);
