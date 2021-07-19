const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    Amount:{
        type:Number,
        required:true
    }
})



const Transactiondb = mongoose.model('transactiondb',schema)
module.exports = Transactiondb