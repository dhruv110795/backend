const express = require('express');
const controller = require("./controllers.js")
const router = express.Router()

router.get("/getAll", controller.getAllData)

module.exports = router;