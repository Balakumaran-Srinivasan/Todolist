// controllers/authController.js

const { json } = require("body-parser");
const UserModel = require("../model/user-model");

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

module.exports={register,login,getalluser,}