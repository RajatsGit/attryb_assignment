const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// User Registeration controller
const registerController = async(req,res) => {
    console.log(req.body);
    try {
        const existedUser = await userModel.findOne({email: req.body.email});
        if(existedUser){
            return res.status(200).send({
                message:'User Already Exists',
                success:false,
            })
        }
        const password = req.body.password;
        const salt = await bcyrpt.genSalt(10);
        const hashedPassword = await bcyrpt.hash(password,salt);
        req.body.password = hashedPassword;
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).send({
            message:'Registered Successfully',
            success: true,
        })
    } catch (error) {
        console.log(error);
    res.status(500).send({
      success: false,
      message: `register Controller ${error.message}`,
    });
  }
    }

    // login controller
const loginController = async (req, res) => {
    try {
      const user = await userModel.findOne({ email: req.body.email });
      if (!user) {
        return res.status(200).send({
          message: "User Not Found",
          success: false,
        });
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(200).send({
          message: "Invalid Email or Password",
          success: false,
        });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res.status(200).send({
        message: "Login Success",
        success: true,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: `Error in LonginController ${error.message}`,
      });
    }
  };


    // Get User Controller

    const getUserController = async (req, res) => {
        try {
          const user = await userModel.findOne({ _id: req.body.userId });
        //   user.password == undefined;
          if (!user) {
            return res.status(200).send({
              message: "user not found",
              success: false,
            });
          } else {
            res.status(200).send({
              success: true,
              data: user,
            });
          }
        } catch (error) {
          console.log(error);
          res.status(500).send({
            message: "Auth Error",
            success: false,
            error,
          });
        }
      };

      

    module.exports = {
        loginController,
        registerController,
        getUserController
    };