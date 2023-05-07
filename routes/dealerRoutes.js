const express = require('express');
const { inventoryController,fetchOEMDetailsController,fetchCarDetails,deleteCarDetail } = require('../controllers/dealerController');

// Router Object
const router = express.Router();


const authMiddleware = require('../middlewares/authMiddleware');


// Routes

// Inventory Request - GET request
router.post('/postinventory',authMiddleware,inventoryController);

router.get('/getoem',authMiddleware,fetchOEMDetailsController);
router.get('/getcardetails',authMiddleware,fetchCarDetails);

router.post('/deletecardetails',authMiddleware,deleteCarDetail);


deleteCarDetail
module.exports = router;