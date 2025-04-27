import { Pool } from "pg"
const pool = new Pool({
  connectionString: "postgress://postgres:123yuling@localhost:5432",
})
pool.connect().then(() => {
  console.log("connected to postgress")
})
