const TemperatureController = require("../controllers/TemperatureController");
const router = require("express").Router();


//add Sensor
router.post("/create-sensor", TemperatureController.createDataAfterMeasurement);
//get Sensor
router.get("/get-sensor", TemperatureController.getData);
router.get("/get-sensor-houseIDandperiod", TemperatureController.getDataHouseIDandDuringSpecificPeriod);
router.get('/get-sensors-period',TemperatureController.getDataDuringSpecificPeriod)

module.exports = router;
