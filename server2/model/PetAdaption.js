
const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name : String,
    breed : String,
    age : Number,
    gender : String,
    location : String,
    // cloudinary photo URL
    photo : String, 
    status : {type: String, default : "Available" },
    // new field
});

const Pet = mongoose.model("PetAdaption", PetSchema);

module.exports = Pet;

