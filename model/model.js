const mongoose = require("mongoose");

const SensorSchema = new mongoose.Schema({
    humidity:{
        type: Number,
        required: true,
    },
    temperature:{
        type: Number,
        required: true,
    },
    houseId:String,
    measuredTime:String
    
},
{timestamps:true} // lấy tgian hiện tại trên máy
) 


module.exports = mongoose.model('Sensor',SensorSchema)