const express =require('express');
const userRouter = express.Router();
const userController = require('../../controller/user/user.controller.js');

//all routes regards the user will be here
userRouter.post('/userRegister',userController.addUser);


module.exports = userRouter;