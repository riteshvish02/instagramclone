const mongoose = require("mongoose")
var plm = require("passport-local-mongoose");
mongoose.connect("mongodb://0.0.0.0./finalbackend")

const userSchema = mongoose.Schema({
  name:{
    required:[true,"Name is required for creating user"],
    type:String,
  },
  username:String,
  bio:String,
  profileimg:{
    type:String,
    default:"deafault.png",
  },
  followers:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  }],
  following:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  }],
  messages:{
    type:Array,
    default:[]
  },
  posts:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"post"    
  }],
  reels:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"reel"    
  }],
  createdat:{
    type:Date,
    default:Date.now()
  },
  comments:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"comment"
  }],
  email:{
    required:[true,"email is required for creating user"],
    type:String,
  },
  saved:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"post"   
    }
  ],
  password:String,
  stories:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"story"
    }
  ]
})
userSchema.plugin(plm);

module.exports = mongoose.model("user",userSchema)