import mysql from "mysql2/promise";
import fs from 'fs';

const config = {
    host: process.env.PLANETSCALE_DB_HOST as string,
    user: process.env.PLANETSCALE_DB_USERNAME as string,
    password:  process.env.PLANETSCALE_DB_PASSWORD as string,
    port:3306,
    ssl: {
      ca: fs.readFileSync(process.env.PLANETSCALE_SSL_CERT_PATH as string), 
    },
};


const db = mysql.createPool(config);

export default db;
