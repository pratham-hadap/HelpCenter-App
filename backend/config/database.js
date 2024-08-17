const mongoose = require("mongoose");

require("dotenv").config();

exports.dbConnect = ()=>{
    
    mongoose.connect(process.env.MONGODB_URL)

    .then( () =>{
        console.log("mongoDB connection Successfull")
    })

    .catch( (error) =>{
        console.log("error in mongoDB connection")
        console.log(error);
    })
}