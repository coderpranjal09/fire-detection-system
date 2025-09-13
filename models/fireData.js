const mongoose = require ('mongoose');

const alertSchema =  new mongoose.Schema({
    latitude:{type:Number,required:true},
    longitude:{type:Number,required:true},
    humidity:{type:Number,required:true},
    temp:{type:Number,required:true},
    isfire:{type:Boolean, required:true},
    createdAt:{type:Date, default:Date.now}
});

module.exports=mongoose.model('FireAlertScehma',alertSchema);