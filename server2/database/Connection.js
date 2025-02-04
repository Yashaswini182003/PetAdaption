const mongoose = require('mongoose');

function Runserver()
{
    try
    {
        // this is the correct link below for database connection 
        mongoose.connect(process.env.MONGO_URL);
        console.log('Mongodb connected')
    } 
    catch (error) 
    {
        console.log('mongodb is not connected', error)
    }
}

module.exports = Runserver;