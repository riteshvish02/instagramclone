const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    coment:{
        type:String,
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        }
    ],
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('comment', commentSchema)