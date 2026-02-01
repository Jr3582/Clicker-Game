import { pool } from "./db.js";

async function testDB() {
  const result = await pool.query("SELECT * FROM users;");
  console.log(result.rows);
}

testDB();