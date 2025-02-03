const express = require('express')
const { createapplication, singleapplication } = require('../controllers/ApplicationCtrl')

// submit application for adoption

const ApplicationRoute = express.Router()

ApplicationRoute.post("/applications", createapplication)
ApplicationRoute.get("/applications/:id", singleapplication)

module.exports = ApplicationRoute;