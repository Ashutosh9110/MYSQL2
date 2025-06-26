const db = require("../utils/db-connection1")



const addUser = (req, res) => {
  const { name, email } = req.body

  const addQuery = "INSERT INTO users (name, email) VALUES (?, ?)"
  db.execute(addQuery, [name, email], (err) => {
    if (err) {
      res.status(500).json({ msg : "Unable to add user"})
      return
    }
    res.status(200).json({ msg : `User with name ${name} added`})
  })

}


const getAllUsers = (req, res) => {
  const getAllQuery = "SELECT * FROM users"
  db.execute(getAllQuery, (err, results) => {
    if (err) {
      res.status(500).json({ msg : "Unable to fetch users"})
    }
      res.status(200).json(results)
  })    
  }  


  module.exports = { 
    addUser,
    getAllUsers
  }