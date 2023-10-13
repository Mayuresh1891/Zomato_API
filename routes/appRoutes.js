//importing express framework
const express = require("express");
const appRoutes = express.Router();

//importing modules from controller
const { homepage,locationlist,searchlocation/*this will keep adding according to the number of pages with seprates commas */} = require("../controller/appController");


//get method for routing
// appRoutes.get('/',) for default page that is homepage
appRoutes.get('/',homepage);
appRoutes.get("/api/location-list",locationlist);

//exporting the routes
module.exports = appRoutes; // Old Method
// export default appRoutes;//new Method


//How to search JSON data?
//ans
// appRoutes.get("/api/search-location/mumbai",searchlocation)// 1.for static URI or
appRoutes.get("/api/search-location/:city",searchlocation)//2. for dynamic URI (:) COLLAN IS IMPORTANT FACTOR

