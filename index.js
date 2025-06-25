const express = require("express")
const app = express()
const db = require("./utils/db-connection")
const studentRoutes = require("./routes/studentsRoutes")


app.use(express.json())

app.use("/students", studentRoutes)

app.listen(3000, () => {
  console.log("Server running at 3000");
})


