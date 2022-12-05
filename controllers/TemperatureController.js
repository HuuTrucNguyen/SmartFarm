const Sensors= require("../model/model");

const TemperatureController = {
    createDataAfterMeasurement:async(req,res)=>{
        const {humidity,temperature,houseId,measuredTime}= req.body;
        await Sensors.create({humidity,temperature,houseId,measuredTime})
        res.status(200).json(req.body);
    },

    getData: async(req,res) =>{
        try {
            const {houseIds,time} = req.query; 
            const allHouseIds = houseIds.split(';'); // tách nhiều nhà ra thành từng nhà
            const allTime = time.split(';'); // tương tự tách nhà 
            const sensors = await Sensors.find({
                houseId:{$in:allHouseIds},
                measuredTime:{$in:allTime}
            })
            res.status(200).json({sensors});    
        } catch (error) {
            console.log(error)
            res.status(500).json({msg:error.message});  
        }
        
    },

    getDataDuringSpecificPeriod:async(req,res)=>{
        try {
            const {start,end} = req.query;
            const sensors = await Sensors.find({
                measuredTime:{
                    $gte:start,
                    $lte:end,
                }
            })
            res.status(200).json({sensors});
        } catch (error) {
            console.log(error)
            res.status(500).json({msg:error.message});
        }
    },

    getDataHouseIDandDuringSpecificPeriod:async(req,res)=>{
        try {
            const {houseIds,start,end} = req.query;
            console.log(houseIds)
            const allHouseIds = houseIds.split(';');
            const sensors = await Sensors.find({
                houseId:{$in:allHouseIds},
                measuredTime:{
                    $gte:start,
                    $lte:end,
                }
            })
            res.status(200).json({sensors});
        } catch (error) {
            console.log(error)
            res.status(500).json({msg:error.message});
        }
    }
};

module.exports = TemperatureController;