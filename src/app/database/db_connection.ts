import bodyParser from "body-parser";
import mysql from "mysql2";
import express from "express";

const app = express();

const jsonParser = bodyParser.json();

const con = mysql.createConnection({
  uri: process.env.DATABASE_URL,
});


con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("select * from user ", function (err, result) {
    if (err) throw err;
    console.log("Result: " + JSON.stringify(result));
  });
});

app.use(jsonParser).post("/user", (req, res) => {
  const data = req.body;
  const query = `
  INSERT INTO user (user_name_info, user_password_info) 
  VALUES (?, ?)
  `;
  con.query(query, [data.username, data.password], (err, result) => {
    console.log(err, result);
    if (err) {
      res.writeHead(500);
      res.end();
      return;
    }
    res.writeHead(200);
    res.end();
  });
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
});

app.listen(3000, () => {});
