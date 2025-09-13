const FireAlertScehma = require('../models/fireData');

 const fireAlert = async(req,res)=>{

    try{
        const {isfire, longitude, latitude,humidity,temp} = req.body;

        if (typeof isfire !== "boolean" || typeof longitude !== "number" || typeof latitude !== "number"){

            return res.status(400).json({error:" invalid format"});
        }

        const newAlert = new FireAlertScehma({isfire , longitude, latitude,humidity,temp}) ;
await newAlert.save();


       res.status(201).json({success:true,message:"new fire alert is coming" , alert:newAlert});
    }
    catch(error){
        res.status(500).json({error:"server error is coming when saving data"});
    }
}

 const getFireAlert =async (req,res)=>{

    try{

        const alertData = await FireAlertScehma.find();

        res.status(200).json({success:true , message:alertData});
    }
    catch(error){

        res.status(500).json({success:false , error:"error is coming from server"});
    }
}

module.exports= {getFireAlert,fireAlert};