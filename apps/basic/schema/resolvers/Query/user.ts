import type { QueryResolvers } from "./../../types.generated.js"
export const user: NonNullable<QueryResolvers["user"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  /* Implement Query.user resolver logic here */
  const { id } = _arg
  try {
    return {
      id: 1,
      isAdmin: false,
      fullName: "312312",
    }
  } catch (err) {
    throw new Error(err)
  }
}
