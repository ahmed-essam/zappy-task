const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
    id:{
        type:Number,
        required: true,
        unique: true
    },
    created_at:{
        type:String
    },
    text:{
        type:String
    },
    userName:{
        type:String
    },
    profile_image_url:{
        type:String
    }
});

var tweets =  mongoose.model('tweets',tweetSchema);
module.exports = tweets;
