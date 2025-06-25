
const mysql = require("mysql2")



const connection = mysql.createConnection({
  host:"localhost",
  user:"root",
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



const createUser = `create table IF NOT EXISTS user(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
)`


connection.execute(createUser, (err) => {
  if(err) {
    console.log(err);
    connection.end()
    return 
  }
})



const createBuses = `create table IF NOT EXISTS buse(
  id INT AUTO_INCREMENT PRIMARY KEY,
  busNumber VARCHAR(255),
  totalSeats INT,
  availableSeats INT
)`

connection.execute(createBuses, (err) => {
  if(err) {
    console.log(err);
    connection.end()
    return
  }
})


const createBookings = `create table IF NOT EXISTS booking(
  id INT AUTO_INCREMENT PRIMARY KEY,
  seatNumber INT
)`

connection.execute(createBookings, (err) => {
  if(err) {
    console.log(err);
    connection.end()
    return
  }
  console.log("Table has been created");
})



const createPayments = `create table IF NOT EXISTS payment(
  id INT AUTO_INCREMENT PRIMARY KEY,
  amountPaid INT,
  paymentStatus VARCHAR(255)
)`


connection.execute(createPayments, (err) => {
  if(err) {
    console.log(err);
    connection.end()
    return
  }
  console.log("Table has been created");
})


module.exports = connection