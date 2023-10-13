//import schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create a schema(the schema is important for updating data,deleting data,inserting data,editing data.)
const LocationsSchema = new Schema
    ({
        City : {type:String, require:true},
        Location : {type:String, Require: true},
        pincode : {type:Number, minLength:6},
    });

//attach the schema to the model
const LocationsModel = mongoose.model('location',LocationsSchema,"locations");
module.exports=LocationsModel;
