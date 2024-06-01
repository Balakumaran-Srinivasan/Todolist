// controllers/authController.js

const { json } = require("body-parser");
const UserModel = require("../model/user-model");
const TodoModel = require("../model/todo-model");

 getalluser=async(req,res)=>{
    try{
        const users= await UserModel.find({})
        res.json({
        status:true,
        msg:"all users",
        data:users
        })
    }
    catch (error) {
        res.status(500).json({ error: "oops Somethin went " });
      }
 }

// Controller to register a new user
register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }
    const newUser = await UserModel.create({ username, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to log in a user
login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// todo items
getTodo=async(req,res)=>{

  try{
    const username = req.session.user; // Assuming user is stored in session (replace with your implementation)
    if (!username){
      res.json({
        msg:"Unauthorized. Please login",
      })
    }
      const user = await UserModel.find({username})
      if (!user) {
        return res.status(404).send('User not found');
      }

      const todo = await TodoModel.find({user:user._id})
      res.json({
      status:true,
      msg:"Todo items",
      data:todo
      })
  }
  catch (error) {
      res.status(500).json({ error: "oops Somethin went " });
    }
}

createTodo=async(req,res)=>{

  try{
   const payload = req.body;
   const title = payload.title;
   const username = payload.username; // Assuming user is stored in session (replace with your implementation)

   if (!username || !title) {
     return res.status(400).send('Title and username are required fields');
   }

   const user = await UserModel.findOne({ username });

   if (!user) {
     return res.status(404).send('User not found');
   }
       
    const newTodo = new TodoModel({ title, user: user._id });
    await newTodo.save();
      res.json({
      status:true,
      msg:"Todo items added sucessfully",
      data:newTodo
      })
  }
  catch (error) {
      res.status(500).json({ error: "oops Somethin went wrong" });
    }
}
module.exports={register,login,getalluser,getTodo,createTodo}