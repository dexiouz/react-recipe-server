import { UserMutation, UserQuery } from "../../services/User/resolvers";
import { RecipeMutation, RecipeQuery } from "../../services/Recipe/resolvers";
const Query = {
  ...UserQuery,
  ...RecipeQuery,
};

const Mutation = {
  ...UserMutation,
  ...RecipeMutation,
};

module.exports = {
  Query,
  Mutation,
};
