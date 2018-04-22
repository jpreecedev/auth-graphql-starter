import UserType from "./user_type";

import { GraphQLObjectType } from "graphql";

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    }
  }
});

export default RootQueryType;
