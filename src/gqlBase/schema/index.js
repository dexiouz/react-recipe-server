import { Query, Mutation } from "../resolvers";
import typeDefs from "../types";
import { GraphQLDateTime } from "graphql-iso-date";
import GraphQLJSON from "graphql-type-json";

const resolvers = {
  Query,
  Mutation,
  JSON: GraphQLJSON,
  DateTime: GraphQLDateTime,
};

// module.exports = {
//   typeDefs,
//   resolvers,
// };
module.exports = {
  typeDefs,
  resolvers,
};
