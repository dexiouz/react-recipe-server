import { gql } from "apollo-server-express";

module.exports = gql`
  # Queries
  extend type Query {
    getAllRecipes: [Recipe!]!
  }

  type Recipe {
    name: String!
    category: String!
    description: String!
    instructions: String!
    likes: Int
    username: String
  }

  # Mutations
  extend type Mutation {
    addRecipe(data: addRecipeData!): Recipe
  }

  input addRecipeData {
    name: String!
    category: String!
    description: String!
    instructions: String!
    likes: Int
    username: String
  }
`;
