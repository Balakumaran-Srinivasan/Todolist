const mongoose = require('mongoose');

// TODO: change your Schema name 👇
const userSchema = new mongoose.Schema({
    // TODO: insert your schema below 👇
    username:String,
    password:String
    
});

//[model-name]👇    [db collection name]👇          👇your schema here
const UserModel = mongoose.model("user", userSchema);
// export your model here 👇
module.exports = UserModel;