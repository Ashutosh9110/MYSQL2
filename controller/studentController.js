

const db = require("../utils/db-connection")

const addStudent = (req, res) => {
  const { name, email } = req.body
  const addQuery = "INSERT INTO user (name, email) VALUES (?, ?)"
  db.execute(addQuery, [name, email], (err) => {
    if (err) {
      res.status(500).json({ msg : "Unable to add student"})
      return
    }
    res.status(200).json({ msg : `Student with name ${name} has been added`})
  })
}


const updateStudent = (req, res) => {
  const id =  req.params.id
  const { name, email } = req.body
  const updateQuery = "UPDATE user SET name = ?, email = ? WHERE id = ?"
  db.execute(updateQuery, [name, email, id], (err, result) => {
    if (err) {
      res.status(500).json({ msg : "Unable to update student"})
      return
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "Student not found"})
      return
    }
    res.status(200).json({ msg : `Student with id ${id} has been updated`})
  })
}


const deleteStudent = (req, res) => {
  const id = req.params.id
  const deleteQuery = "DELETE FROM user WHERE id = ?"
  db.execute(deleteQuery, [id], (err, result) => {
    if(err) {
      res.status(500).json({ msg : "Unable to delete"})
      return
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ msg : "Student not found"})
      return
    } 
    res.status(200).json({ msg : "Student has been deleted"})

  })
}


module.exports = {
  addStudent,
  updateStudent,
  deleteStudent
}