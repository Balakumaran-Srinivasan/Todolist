const express = require('express');
const { register, login, getalluser } = require('../controller/user-controller');
 
const userRouter = express.Router();

// CRUD
userRouter.get('/users',getalluser);
userRouter.post('/register',register);
userRouter.post('/login',login);
// Read   - GET
 // Create - POST
 // Update - PUT
 
module.exports = userRouter;
