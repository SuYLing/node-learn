/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import { user as Query_user } from "./resolvers/Query/user.js"
import { User } from "./resolvers/User.js"
import type { Resolvers } from "./types.generated.js"
export const resolvers: Resolvers = {
  Query: { user: Query_user },

  User: User,
}
