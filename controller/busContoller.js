
const db = require("../utils/db-connection1")



const addNewBus = (req, res) => {
  const { busNumber, availableSeats, seatCapacity} = req.body

  const addBusQuery =  "INSERT INTO bus (busNumber, availableSeats, seatCapacity) VALUES (?, ?, ?)"
    db.execute(addBusQuery, [busNumber, availableSeats, seatCapacity], (err) => {
      if(err) {
        res.status(500).json({ msg : "Unable to add BUS"})
        return
      }
      res.status(200).json({ msg: `Bus added to the database`})
    })
}


const getBus = (req, res) => {
  const seats = req.params.seats
  const { busNumber, availableSeats, seatCapacity} = req.body
  const getQuery = "SELECT * FROM bus WHERE availableSeats > ?"

  db.execute(getQuery, [seats], (err, results) => {
    if(err) {
      res.status(500).json({ msg : "Unable to fetch bus"})
      return
    }
    res.status(200).json(results)
  }) 
}





module.exports = {
  addNewBus,
  getBus
}