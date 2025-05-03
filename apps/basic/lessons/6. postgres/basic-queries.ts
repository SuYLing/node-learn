import { query } from "./index.js"
export async function createUsersTable() {
  const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  )`
  try {
    await query(createTableQuery)
    console.log("user created ")
  } catch (err) {
    console.log(`Error while createing users table`, err)
  }
}
