const mongoose = require('mongoose');


const inventorySchema = new mongoose.Schema({
    km:{
        type:Number,
    },
    majorScratches:{
        type:String
    },
    originalPaint:{
        type:Boolean
    },
    noOfAccidentsReported:{
        type:Number
    },
    noOfPreviousBuyers:{
        type:Number
    },
    registrationPlace:{
        type:String
    },
    description:{
        type:String,
        required:[true]
    },
    userId:{
        type:String,

    },oem_id:{
        type:String,
    }
    , user:{
        type: mongoose.Schema.Types.ObjectId, ref: 'user'
    },
    oem:{type: mongoose.Schema.Types.ObjectId, ref: 'oemspecs'}
});

const inventoryModel = mongoose.model('inventory', inventorySchema );

module.exports = inventoryModel;