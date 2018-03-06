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
          stars
          deviceStars {
            deviceId
            stars
          }
          totalStars
          totalDevices
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
    options: ({ id = "cadec2018-stockholm", tags = "*", period }) => {
      return {
        variables: { id, tags, period }
      };
    }
  }
);

export const updateStars = graphql(
  gql`
    mutation UpdateStars(
      $cadecId: String
      $deviceId: String
      $talkId: String
      $stars: Float 
    ) {
      updateStars(
        cadecId: $cadecId
        deviceId: $deviceId
        talkId: $talkId
        stars: $stars
      ) {
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
        talks {
          id
          title
          startDate
          eventId
          description
          stars
          deviceStars {
            deviceId
            stars
          }
          totalStars
          totalDevices
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
  `
);
