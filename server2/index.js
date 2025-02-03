

const express = require('express');


const cors = require('cors');
// we can directly type Runserver() as a function below it will automatically produce const Runserver = require('./database/Connection');
const Runserver = require('./database/Connection');
// this should be specified after completing the routes files
const PetRoute = require('./routes/PetAdaptionRoutes');
const ApplicationRoute = require('./routes/ApplicationRoutes');


const app = express()
const port = 3000


Runserver()


app.use(express.json());
app.use(cors());


// importing variables from model files and this should be specified after completing routes files
app.use("/pet", PetRoute)
app.use("/application", ApplicationRoute)


app.listen(port, ()=> {
     
    console.log(`server is running on ${port}`)
})