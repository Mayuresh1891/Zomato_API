//importing the data from appModal.json
const locationlist = require("../model/appModel.json")

//exporting the page and  the page contain and the page controlles. 
module.exports.homepage = (request,response)=>{
    response.send("welcome to Zomato server");
};

module.exports.locationlist = (request,response)=>{
    //to send a object
    /*for false object status
    let jsondata = {
        status:false,
        location:[]
    };*/
    /* for true object status
    let jsondata = {
        status:true,
        location:["name":"mumbai"]
    };
*/
    let status = locationlist.length===0?false:true;//to check the status of list is zero or not
        let jsondata = {
            status:locationlist.length===0?false:true,
            location_list:locationlist
        };
    
        // response.send(jsondata);
        response.send({status,location_list:locationlist});
};

//how to get data of searched city? dynamically
module.exports.searchlocation=(request,response)=>{
    //How to collect dynamic data from url => request.params (retures object)
    let params = request.params //{city:name}
    let list = locationlist.filter((location)=>{
        return location.city===params.city;
    })
        // console.log(params);
    let jsonData = {
        searchlist: list,};
    response.send(jsonData);};
//^-- this will give you only searched city output.


