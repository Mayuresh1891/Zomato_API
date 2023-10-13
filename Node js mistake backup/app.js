//create server
const express = require("express");// importing Express framework of Nodejs
const server = express();//creating server

const mongoose = require("mongoose");// importing mongoose library for database
const DB_NAME= "batch_8th_of_Jan"
const MONGODB_URI='mongodb://127.0.0.1:27017/' + DB_NAME

//add routes
const { request } = require("http");
const userRoutes = require('./Route/userRoutes');
const { error } = require("console");

//add port
mongoose//using mongoose library for MongoDB database
.connect(MONGODB_URI)
.then(()=>{
    console.log("db connect");
    server.listen(3001,()=>{
        console.log('server is running on port::', 3001);
    });
    }).catch((error)=>{console.log(error);});

server.use("/",userRoutes);
    

//backup for add event lister
/**server.listen(3000,()=>{
    console.log('server is running on port 3000');
});
server.use("/",userRoutes);
**/
