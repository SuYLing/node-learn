import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import db from "./db.js"
import { typeDefs } from "./schema.js"
const resolvers = {
  Query: {
    games() {
      return db.games
    },
    reviews() {
      return db.reviews
    },
    review(_, args: (typeof db.reviews)[number]) {
      return db.reviews.find((r) => r.id === args.id)
    },
    authors() {
      return db.authors
    },
  },
}
const server = new ApolloServer({
  typeDefs, // typeDefs: 定义数据类型结构，对数据的描述
  resolvers, //resolvers: 如何响应查询
})

const url = await startStandaloneServer(server, {
  listen: {
    port: 3001,
  },
})
console.log("server ready at 3001")
