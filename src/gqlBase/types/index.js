import { gql } from "apollo-server-express";
import User from "../../services/User/types";
import Recipe from "../../services/Recipe/types";
const linkSchema = gql`
  scalar JSON
  scalar DateTime
  scalar Long

  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

module.exports = [linkSchema, User, Recipe];
