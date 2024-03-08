const { default: mongoose } = require("mongoose");
const { stringify } = require("uuid");

const postSchema = new mongoose.Schema({
   
    caption:{
      type:String,
      required:true,
    },
    image:{
      type:String,
    },
    createdate: {
      type: Date,
      default:Date.now,
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'user',
        }  
    ]
   
  });
  
  module.exports = mongoose.model('post', postSchema);
  
  