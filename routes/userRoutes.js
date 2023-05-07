const express = require('express');
const { loginController, registerController,getUserController } = require('../controllers/userController');

// Router Object
const router = express.Router();


const authMiddleware = require('../middlewares/authMiddleware');


// Routes

// Login - POST request
router.post('/login',loginController);

// Register - POST request
router.post('/register', registerController);


// Get User
router.post('/getUserData',authMiddleware, getUserController)

module.exports = router;