const Card = require("../models/Card")


exports.getAllCardByTitle = async(req,res)=>{
    try{
        const title = req.params.title

        const card = await Card.findOne({title:title});
        console.log(card)

        if(!card){
            return res.status(401).json({
                success:false,
                message:"Card not found",
                card
            })
        }

        res.status(200).json({
            success:true,
            message:"Specific Card details found sucessfully",
            card
        })

    }
    catch(error){
        console.log("error while fetching card by title",error);
        return res.status(500).json({
            success:false,
            message:"error while fetching card by title"
        })
    }
}