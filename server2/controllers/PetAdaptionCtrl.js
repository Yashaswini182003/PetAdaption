const Pet = require("../model/PetAdaption");


const Adopt = async (req, res) => {

    const { id } = req.params;
    try {
        const pet = await Pet.findById(id);
        if (!pet) {
            return res.status(404).json({ error: "Pet not found " });
        }

        // Example: Mark pet as adopted

        // add a 'status' field in your schema if it doesn't exist
        pet.status = "Adopted";
        await pet.save();


        res.json({ message: "Adoption request submitted successfully!" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// get all pets with optional filters
const getallpets = async (req, res) => {
    try {
        const filters = req.query;
        const pets = await Pet.find(filters);
        res.json(pets);
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
};


// get a single pet by ID
const getsinglepet = async (req, res) => {

    try {
        const pet = await Pet.findById(req.params.id);
        if (!pet) {
            return res.status(404).json({ message: "Pet not found" });
        }
        res.json(pet);

    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// add a new pet (POST/pets)
const addpet = async (req, res) => {
    try {
        const { name, breed, age, gender, location, photo } = req.body;
        console.log("Received photo URL:", photo); // Log the photo URL

        const newPet = new Pet({ name, breed, age, gender, location, photo });
        await newPet.save();
        
        res.status(201).json(newPet); // Send back the newly created pet with the photo URL
    } catch (error) {
        console.error("Error adding pet:", error);
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    Adopt,
    getallpets,
    getsinglepet,
    addpet
}
