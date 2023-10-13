const express = require("express")//old method to import express

//creating server
//importing express framework
// import express from "express";//new method to import express but first follow step no 9 from mysteps.txt
const app = express();

//importing app routes
const appRoutes = require("./routes/appRoutes");

//add routes
app.use("/",appRoutes);

//add port
app.listen(3001,()=>{
    console.log("server started at port::",3001);
});

