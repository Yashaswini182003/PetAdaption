const Pet = require("../model/PetAdaption");
const Application = require("../model/Application");

// submit an application for adoption
const createapplication = async(req,res) => {

    try
    {

        const { petId, adopterName, email} = req.body;

        // save the adoption application form
        const application = new Application(req.body)
        await application.save();

        // update pet's status
        await Pet.findByIdAndUpdate(petId,  { status: "Adopted"});

        res.status(201).json(application);
    } 
    catch (error) 
    {
        res.status(500).json({ error: error.message});
    }
};



// get a single application by ID

const singleapplication = async(req, res) => {

    try 
    {
        const application = await Application.findById(req.params.id);
        if(!application)
        {
            return res.status(404).json({ message: "Application not found" });
            res.json(application);


        }
    } 
    catch (error) 
    { 
        res.status(500).json({ error: error.message });
        
    }
};








module.exports = {

    createapplication,
    singleapplication

}
    