const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    uid:{
        type: Schema.Types.ObjectId
    },
    profile_pic:{
        type: String
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)
module.exports = User