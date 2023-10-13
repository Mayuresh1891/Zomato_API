// Controller Functions
module.exports.home = (request,response)=>{
    response.send("welcome to express js");
}

module.exports.aboutUs = (request,response)=>{
    response.send("welcome to about us page");
}

module.exports.contactUs = (request,response)=>{
    response.send("welcome to contact us page");
}

module.exports.Hi = (request,response)=>{
    response.send("welcome to Hi us page");
}