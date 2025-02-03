const express = require('express')
const { Adopt, getallpets, getsinglepet, addpet } = require('../controllers/PetAdaptionCtrl')

const PetRoute = express.Router()

// Routes
// Handle adoption request

// get -> fetch
// post -> adding
// put -> update
// delete -> delete
// if get is used then we dont have to use id in path for single getsinglepet

PetRoute.post("/pets/:id/adopt" , Adopt )
PetRoute.get("/getallpets", getallpets)
PetRoute.get("/pets/:id", getsinglepet)
PetRoute.post("/addpets", addpet)

module.exports = PetRoute;

