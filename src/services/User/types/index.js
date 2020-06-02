import { gql } from "apollo-server-express";

module.exports = gql`
  #Queries
  extend type Query {
    getCurrentUser: User
  }

  type User {
    username: String
    password: String
    email: String
    favourites: [Recipe]
  }

  #Mutations
  extend type Mutation {
    signupUser(data: signupUserData!): Token
    signinUser(data: signinUserData!): Token
  }

  type Token {
    token: String
  }
  input signupUserData {
    username: String!
    password: String!
    email: String!
  }
  input signinUserData {
    username: String!
    password: String!
  }
`;
