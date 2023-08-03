import mysql from "mysql2/promise";

const db = mysql.createPool(process.env.DATABASE_URL as string);

export default db;
