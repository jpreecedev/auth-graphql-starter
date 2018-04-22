import graphql from "graphql";
import RootQueryType from "./types/root_query_type";
import mutation from "./mutations";

import { GraphQLSchema } from "graphql";

export default new GraphQLSchema({
  query: RootQueryType,
  mutation
});
