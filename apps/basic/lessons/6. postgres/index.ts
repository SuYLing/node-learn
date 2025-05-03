import { Pool, type QueryArrayConfig } from "pg"
import { createUsersTable } from "./basic-queries.js"
const pool = new Pool({
  // postgress => :// => user => password => host => posr => database
  connectionString: "postgress://postgres:123yuling@localhost:5432",
}) // 创建连接
pool.connect().then(() => {
  console.log("connected to postgress")
})

export async function query(text: string, params?: QueryArrayConfig<string>) {
  const start = Date.now()
  try {
    const result = await pool.query(text)
    const duration = Date.now() - start

    console.log("Excyted query: ", text, duration, result.rowCount?.toString())
    console.log()
  } catch (error) {
    console.log(error)
  }
}
createUsersTable()