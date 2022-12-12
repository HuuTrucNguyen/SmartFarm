
const fs = require('fs');
const xml2js = require('xml2js');
var util = require("util");
const cors = require("cors");
const express = require("express");
const app = express();

const parser = new xml2js.Parser();

const getXMLFile = (req,res)=>{
    try {
        fs.readFile('Sensor.xml', (err, data) => {
            parser.parseString(data, (err, result) => {
                console.log(util.inspect(result, false, null, true))
                // console.log(JSON.parse(data)['SensorDHT'])
                let {houseIds} = req.query;
                // const houseIds = '1,2'
                let chosenSensors= [];
                let chosenHouseIds = houseIds.split(',');
                for(let i =0; i< result.length ; i++){
                    if(result[i].houseId.every(i => chosenHouseIds.includes(i))){
                        chosenSensors.push(sensors[i])
                    }
                } 
            res.status(200).json({sensors});    
            });
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:error.message});
    }
 }

//  getXMLFile()
module.exports = getXMLFile;