const Card = require("../models/Card");

exports.createCard = async(req,res)=>{
    try{
        const {title,description} = req.body;

        if(!title || !description){
            return res.status(401).json({
                success:false,
                message:'Please fill all the details carefully'
            })
        }

        let card = await Card.create({title,description});
        console.log("card details",card);

        return res.status(200).json({
            sucess:true,
            message:"card created successfully",
            card
        })
    }
    catch(error){
        console.log("error while creating card",error)
        res.status(500).json({
            success:false,
            message:"Error While Creating Card",
        })
    }
}