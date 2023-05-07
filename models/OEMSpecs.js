const mongoose = require('mongoose');

const oemSpecsSchema = new mongoose.Schema({

    nameOfTheModel:{
        type:String,
        required:[true,'name is required']
    },
    yearOfTheModel:{
        type:Number,
        required:[true,'Year of the model is required']
    },
    listPriceOfTheNewVehicle:{
        type:Number,
        required:[true,'ListPrice is required']
    },
    availableColors:{
        type:Array,
        default:[]
    },
    advertisedMileage:{
        type:Number,
        required:[true,'Mileage is required']
    },
    power:{
        type:Number,
        required:[true,'Power(in BHP) is required']
    },
    maxSpeed:{
        type:Number,
        required:[true,'Maximum Speed is required']
    }, 
   

})

const oemModel = mongoose.model('oemspecs', oemSpecsSchema);

module.exports = oemModel;