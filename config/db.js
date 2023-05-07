const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Database is connected');
    } catch (error) {
        console.log(`Issue In Mongo DB Server ${error}`);        
    }
}
module.exports = connectDB;