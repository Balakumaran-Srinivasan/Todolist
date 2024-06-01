const mongoose = require('mongoose');

// TODO: change your Schema name 👇
const userSchema = new mongoose.Schema({
    // TODO: insert your schema below 👇
    username:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required:true,
    }
    
});

//[model-name]👇    [db collection name]👇          👇your schema here
const UserModel = mongoose.model("user", userSchema);
// export your model here 👇
module.exports = UserModel;