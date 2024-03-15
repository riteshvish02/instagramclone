const { default: mongoose } = require("mongoose");
const { stringify } = require("uuid");

const reelSchema = new mongoose.Schema({
   
    caption:{
      type:String,
    },
    video:{
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
    ],
   comments:[{
      type:mongoose.Schema.Types.ObjectId,
      ref: 'comment',
   }]
  });
  
  module.exports = mongoose.model('reel', reelSchema);
  
  