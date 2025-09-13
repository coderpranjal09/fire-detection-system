const mongoose = require ('mongoose');

const alertSchema =  new mongoose.Schema({
    isfire:{type:Boolean, required:true},
    latitude:{type:Number,required:true},
    longitude:{type:Number,required:true},
    humidity:{type:Number,required:true},
    temp:{type:Number,required:true},
    createdAt:{type:Date, default:Date.now}
});

module.exports=mongoose.model('FireAlertScehma',alertSchema);