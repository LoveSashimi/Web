import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "username",
  password: "password",
  database: "demo",
  port: 3306,
});

export default db;
