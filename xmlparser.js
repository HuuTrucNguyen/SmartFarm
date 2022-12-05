
const fs = require('fs');
const xml2js = require('xml2js');
var util = require("util");
const cors = require("cors");
const express = require("express");
const app = express();

const parser = new xml2js.Parser();

const ReadXMLFile = (req,res)=>{
    try {
        fs.readFile('Sensor.xml', (err, data) => {
            parser.parseString(data, (err, result) => {
                console.log(util.inspect(result, false, null, true));
                // let {houseIds} = req.query;
                // every some map filter find
                const houseIds = '1,2'
                let chosenSensors= [];
                let chosenHouseIds = houseIds.split(',');
                for(let i =0; i< result.length ; i++){
                    if(result[i].houseId.every(i => chosenHouseIds.includes(i))){
                        chosenSensors.push(sensors[i])

                    }
                } 
            });
        });
        console.log('connect successfully')
        // next()
    } catch (error) {
        console.log(error)
    }
 }

 ReadXMLFile()