const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    petId: mongoose.Schema.Types.ObjectId,
    adopterName: String,
    email:String,
    status: { type: String, default: "Pending"},
});

const Application = mongoose.model("Application", ApplicationSchema);

module.exports = Application;