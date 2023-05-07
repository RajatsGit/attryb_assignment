const oemModel = require('../models/OEMSpecs')
const data =[
    {nameOfTheModel:'Honda City',
    yearOfTheModel:2015,
    listPriceOfTheNewVehicle:200000,
    availableColors:['red','green'],
    advertisedMileage:20,
    power:200,
    maxSpeed:200
},
{nameOfTheModel:'Maruti Suzuki',
    yearOfTheModel:2018,
    listPriceOfTheNewVehicle:400000,
    availableColors:['red','white'],
    advertisedMileage:30,
    power:100,
    maxSpeed:150
},
{nameOfTheModel:'Swift Desize',
    yearOfTheModel:2020,
    listPriceOfTheNewVehicle:500000,
    availableColors:['gold','blue'],
    advertisedMileage:12,
    power:300,
    maxSpeed:180
},
{nameOfTheModel:'TATA Nano',
    yearOfTheModel:2014,
    listPriceOfTheNewVehicle:100000,
    availableColors:['orange','grey'],
    advertisedMileage:9,
    power:90,
    maxSpeed:160
}
]

 
const oemSpecs = data.map((car)=>{
    const oemdata = new oemModel(car);
    oemdata.save();
})



module.exports =  oemSpecs;