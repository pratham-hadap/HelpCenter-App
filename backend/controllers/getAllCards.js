const Card = require("../models/Card");

exports.getAllCards = async(req,res)=>{
    try{

        let getCard = await Card.find()
        console.log("get all card details",getCard);

        return res.status(200).json({
            sucess:true,
            message:"all cards fetch successfully",
            getCard
        })
    }
    catch(error){
        console.log("error while fetching all cards",error)
        res.status(500).json({
            success:false,
            message:"Error While fetching all Cards",
        })
    }
}