const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const morgan = require('morgan');
const path = require('path')
const cors = require('cors')

// configure the dotenv
dotenv.config();

// mongoDB connection
connectDB();

// REST Object
const app = express();

// middlewwares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin: '*'
}));
app.use(express.urlencoded({extended: true}));



  




// Different routes
app.use('/api/v1/user',require('./routes/userRoutes'));
app.use('/api/v1/dealer',require('./routes/dealerRoutes'));


// PORT 
const port = process.env.PORT || 8080;
app.listen(port,()=> {
    console.log(`Server is running in ${process.env.DEV_MODE} Mode on port ${port}`);
})



