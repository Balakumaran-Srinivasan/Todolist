const express = require('express');
const { register, login, getalluser, getTodo, createTodo } = require('../controller/user-controller');
 
const userRouter = express.Router();

// CRUD

// Read   - GET
userRouter.get('/users',getalluser);
userRouter.get('/todo',getTodo);

 // Create - POST
 userRouter.post('/register',register);
userRouter.post('/login',login);
userRouter.post('/create',createTodo)
 // Update - PUT
 
module.exports = userRouter;
