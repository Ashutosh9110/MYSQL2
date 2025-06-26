

const mysql = require("mysql2")


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "test"
})

connection.connect((err) => {
  if(err) {
    console.log(err);
    return
  }
  console.log("Connection has been created");
})


const userTable = `CREATE TABLE IF NOT EXISTS users(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
)`

connection.execute(userTable, (err) => {
  if(err) {
    console.log(err);
    return
  }
  // console.log("User table has been created");
})



const busTable = `CREATE TABLE IF NOT EXISTS bus(
  id INT AUTO_INCREMENT PRIMARY KEY,  
  busNumber VARCHAR(255),
  availableSeats INT,
  seatCapacity INT
)`


connection.execute(busTable, (err) => {
  if (err) {
    console.log(err);
    return
  }
  // console.log("Bus table has been created");
})




module.exports = connection


















