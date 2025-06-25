const express = require("express")
const mysql = require("mysql2")

const app = express()

const connection = mysql.createConnection({
  host:"localhost",
  user: "root",
  password: "1234",
  database: "testdb"
})


connection.connect((err) => {
  if(err) {
    console.log(err);
    return
  }
  console.log("Connection has been created");
})

const createTable = `create table uuuu(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
)`

connection.execute(createTable, (err) => {
  if(err) {
    console.log(err);
    connection.end()
    return
  }
  console.log("Table is created");
})


app.get("/", (req, res) => {
  res.send("Hello World")
})



app.listen(3000, () => {
  console.log("Server running at 3000");
})