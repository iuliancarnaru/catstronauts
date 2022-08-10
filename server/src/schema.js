import { gql } from "apollo-server";

const typeDefs = gql`
  "Query to get tracks array fro the homepage grid"
  type Query {
    tracksForHome: [Track!]!
    track(id: ID!): Track
    module(id: ID!): Module!
  }

  "A track is a group of Modules that teaches about specific"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
  }

  type Module {
    id: ID!
    title: String!
    length: Int
    videoUrl: String
    content: String
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

export default typeDefs;
