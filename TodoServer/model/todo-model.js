// models/todoModel.js

const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
   
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    title: {
      type: String,
      required: true,
    },
  //   description: String,
  //   completed: {
  //     type: Boolean,
  //     default: false
  //   },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TodoModel = mongoose.model("Todoitem", todoSchema);

module.exports = TodoModel;
