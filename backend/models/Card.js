const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    id:{
        type:String
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("card",cardSchema);