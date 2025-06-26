const express = require("express")
const app = express()
// const db = require("./utils/db-connection")
const db = require("./utils/db-connection1")
// const studentRoutes = require("./routes/studentsRoutes")
const userRoutes = require("./routes/userRoutes")
const busRoutes = require("./routes/busRoutes")

app.use(express.json())

// app.use("/students", studentRoutes)
app.use("/users", userRoutes)
app.use("/bus", busRoutes)

app.listen(3000, () => {
  console.log("Server running at 3000");
})


