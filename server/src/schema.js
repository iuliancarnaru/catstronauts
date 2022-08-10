import { gql } from "apollo-server";

const typeDefs = gql`
  "Query to get tracks array fro the homepage grid"
  type Query {
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about specific"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

export default typeDefs;
