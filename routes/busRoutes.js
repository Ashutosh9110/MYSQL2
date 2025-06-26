const express = require("express")
const router = express.Router()

const busController = require("../controller/busContoller")


router.post("/addNewBus", busController.addNewBus)
router.get("/getBus/:seats", busController.getBus)


module.exports = router