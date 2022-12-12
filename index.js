const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const temperatureRoute = require("./routes/Temperature");


dotenv.config();

app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());
app.use(morgan("common"));

//routes
app.use("/api", temperatureRoute);


// connect database
mongoose.connect((process.env.MONGOOSE_URL),
() =>{
    console.log("Connect to MongooDB");
});

app.listen(8000, () => {    
    console.log("Server is running")
});