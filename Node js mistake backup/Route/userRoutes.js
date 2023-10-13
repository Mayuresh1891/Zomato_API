// adding express router(routing method)
const userRoutes = require("express").Router()
const userController = require('../controller/userController');
const {home, aboutUs, contactUs, Hi} = userController


// routing
userRoutes.get('/',home);

userRoutes.get('/aboutUs',aboutUs);

userRoutes.get('/contactUs',contactUs);

userRoutes.get('/Hi',Hi);

// export
module.exports = userRoutes;
