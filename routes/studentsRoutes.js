const express = require("express")
const router = express.Router()
const studentController = require("../controller/studentController")


router.post("/addStudent", studentController.addStudent)
router.put("/updated/:id", studentController.updateStudent)
router.delete("/deleted/:id", studentController.deleteStudent)


module.exports = router 