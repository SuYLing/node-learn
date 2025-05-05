export const typeDefs = `#graphql
  type Game {
    id: ID!,
    title: String!,
    paltform: [String!]!
  }
  type Review {
    id: ID!
    rating: Int!
  }
  type Author {
    id:ID!
    name:String!
  }
  type Query {
    # 指定入口
    reviews: [Review!]
    review(id:ID!): Review!
    games: [Game!]
    authors: [Author!]
  }
`
// int float string bolean ID
