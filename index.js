const mongoose = require('mongoose');
const express =require('express');
const app = express();
const bodyParser =require('body-parser');
const mongoUrl = 'mongodb://127.0.0.1/userDB';
const port = 3000;
const userRoutes =require('./routes/user/user.routes');

//Registering the middleware
app.use(bodyParser.json());

//Registering Routes here
app.use('/userSpecific',userRoutes);


app.listen(port,()=>{
    console.log("server is running  on " +port);
    mongoose.connect(mongoUrl,()=>{
        console.log("Connected to MongoDB ");
    })

})