const mongoose = require('mongoose')

const TwSchema = new mongoose.Schema({
    message:{
        type:String,
        required: true
    },
    createdAt:{
        
}
})