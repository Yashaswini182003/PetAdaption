const mongoose = require('mongoose');

function Runserver()
{
    try
    {
        // this is the correct link below for database connection 
        mongoose.connect('mongodb+srv://root:Yash123%2A%23@cluster0.dqdep.mongodb.net/database3?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Mongodb connected')
    } 
    catch (error) 
    {
        console.log('mongodb is not connected', error)
    }
}

module.exports = Runserver;